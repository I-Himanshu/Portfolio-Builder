import React, { useState } from 'react';
import FileInput from '../components/FileInput';
import pdfToText from "react-pdftotext";

const Review = () => {




    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(''); 
    const [reviewResult, setReviewResult] = useState('');
    console.log(process.env.VITE_APP_API_KEY);
    const handleSubmit = async () => {
        console.log(process.env)
        try {
            setLoading(true);
            setProgress('Uploading...');

            // Call Gemini API for review here
            const text = await pdfToText(file);
            setProgress('Extracting...');

            // Analyze the text using Gemini API
            setProgress('Analyzing...');
            const result = await getResumeReview(text);
            setReviewResult(result);
            setLoading(false);
            setProgress('');
        } catch (error) {
            setLoading(false);
            setProgress('');
            console.error('Error submitting review:', error);
        }
    };

    const getResumeReview = async (text) => {
        try {
            const prompt = `
        As an experienced recruiter with over 10 years of expertise in evaluating resumes, please review the following resume. Analyze it for readability, word choice, length, and the use of bullet points. Provide detailed suggestions on how to enhance its effectiveness. Focus on improving the clarity, conciseness, and overall presentation. Format your response using HTML and Tailwind CSS components, using green text for positive feedback and red text for negative feedback. Ensure perfect alignment and a clean, visually appealing design and backgrounds. Here is the resume:
        
        ${text}
      `;
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.VITE_APP_API_KEY
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                });
            const data = await response.json();
            let  res = data["candidates"][0]["content"]["parts"][0]
            console.log(res, "res0")
            if(res["text"].includes("```html")) {
                res = res["text"].split("```html")[1].split("```")[0]
                if(res.includes("<body")){
                    res = res.split("<body")[1].split("</body>")[0];
                    // remove the first >
                    res = res.split(">").slice(1).join(">")
                }
                console.log("HTML", res)
            }
            else if(res["text"].includes("<div")){
                res = res["text"].split("<div").slice(1)
                res = "<div" + res.join("div")
                console.log("DIV", res)
            }else{
                res = res["text"]
                console.log("TEXT", res)
            }
            console.log(res, "res")
            return res;
        } catch (error) {
            console.error('Error getting resume data:', error);
            throw error;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Get Your Resume Reviewed</h1>
            <p className="text-lg text-center mb-8">Upload your resume for a detailed review from our Gemini API.</p>
            <FileInput label="Upload Resume" file={file} setFile={setFile} accept="application/pdf" />
            <button
                className={`bg-primary-500 text-white px-4 py-2 rounded mt-4 hover:bg-primary-600 ${loading ? 'cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? progress || 'Loading...' : 'Submit for Review'}
            </button>
            {reviewResult && (
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: reviewResult }} />
            )}
        </div>
    );
};

export default Review;