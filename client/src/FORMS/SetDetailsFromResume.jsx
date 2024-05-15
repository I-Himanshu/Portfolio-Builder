import React, { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import FileInput from '../components/FileInput';
import pdfToText from "react-pdftotext";

const SetDetailsFromResume = () => {
    const { profile, setProfile } = useContext(ProfileContext);
    const [file, setFile] = useState(null);
    const [setting, setSetting] = useState(false);
    const [error, setError] = useState(null);

    const convertPdfToText = async (file) => {
        try {
            const req = await pdfToText(file);
            return req;
        } catch (error) {
            console.error('Error converting PDF to text:', error);
            setError('Error converting PDF to text. Please try again.');
            throw error;
        }
    }

    const getResumeData = async (text) => {
        try {
            const type = profile.type;
            const prompt = `
${text}
from those details, Try to extract the following details and if details are not found, leave them empty or as it is and if possible you can generate some details if it is adjact
${JSON.stringify(profile, null, 4)}

and return the userdetails in json form to me
`;
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBeHqeSPhFD6Fxzj4Dlrv7zGm61ZMvEWrU', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
            const data = await response.json();

            let res = data["candidates"][0]["content"]["parts"][0]["text"];
            res = res.split("```json")[1].split("```")[0];
            console.log(res);
            const JSONDATA = JSON.parse(res);
            console.log(JSONDATA);
            return data;
        } catch(error) {
            console.error('Error getting resume data:', error);
            setError('Error getting resume data. Please try again.');
            throw error;
        }
    }

    const setProfileFromResume = async () => {
        try {
            if (file) {
                setSetting(true);
                const text = await convertPdfToText(file);
                let data = await getResumeData(text);
                if(data && data.candidates){
                    data = data.candidates[0].content.parts[0].text;
                    let res = data.split("```json")[1].split("```")[0];
                    data = JSON.parse(res);
                }
                setProfile((prev) => ({ ...prev, ...data }));
                setSetting(false);
                setError(null);
            } else {
                console.error('No file selected.');
                setError('No file selected. Please upload a resume.');
            }
        } catch (error) {
            console.error('Error setting profile from resume:', error);
            setSetting(false);
        } finally {
            setSetting(false);
        }
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Set Details from Resume</h2>
                <FileInput label="Upload Resume" file={file} setFile={setFile} accept="application/pdf" />
                <button className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-4 ${setting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => {
                        setProfileFromResume();
                    }}
                    disabled={setting}
                >
                    {setting ? 'Setting Details...' : 'Set My Details From Resume'}
                </button>
                {error && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4' role="alert">
                        <strong className='font-bold'>Error:</strong>
                        <span className='block sm:inline'>{error}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SetDetailsFromResume;