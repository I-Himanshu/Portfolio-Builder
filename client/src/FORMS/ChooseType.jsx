import React, { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import terminalPreviewImg from '../assets/terminal-preview.jpeg';
import resumePreviewImg from '../assets/resume-preview.jpeg';

const ChooseType = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleTypeChange = (type) => {
        setProfile((prev) => ({
            ...prev,
            type,
        }));
    };

    const typeOptions = [
        {
            label: 'Resume',
            type: 'resume',
            image: resumePreviewImg,
        },
        {
            label: 'Portfolio',
            type: 'portfolio',
            image: terminalPreviewImg,
        },
    ];

    return (
        <div className="flex gap-4">
            {
            typeOptions.map(({ label, type, image }) => (
                <label
                    key={type}
                    className={`w-36 h-36 bg-gray-400 aspect-square flex flex-col justify-center items-center rounded-lg focus:scale-95 cursor-pointer ${
                        profile.type === type ? 'bg-gray-600 border-4 border-red-400' : ''
                    }`}
                    onClick={() => handleTypeChange(type)}
                >
                    <img src={image} alt={`${label} Preview`} className="w-24 h-24 object-contain" />
                    <span className="mt-2">{label}</span>
                </label>
            )
            )
        }
        </div>
    );
};

export default ChooseType;