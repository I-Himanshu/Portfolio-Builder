import React, { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const FinalPage = ({
    portfolioUrl,
}) => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleUsernameChange = (e) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            username: e.target.value
        }));
    };
    if(profile.type=="resume"){
        return <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Link className='bg-green-500 rounded-lg px-4 py-2 text-white'
                to={"/download-my-resume"}
            >
                Download My Resume
                <i className='fa fa-download ml-2'></i>
            </Link>
        </div>
    }
    if (portfolioUrl) {
        return (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-primary-700 mb-4">Portfolio Created!</h1>
                <p className="text-gray-600 mb-6">
                    Your stunning portfolio has been created and is now available at:
                </p>
                <a
                    href={portfolioUrl}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors duration-300"
                >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    View Portfolio
                </a>
            </div>
        );
    }
    return (
        <div>
            <InputField label="Username (For your portfolio URL) " value={profile.username} onChange={handleUsernameChange} />
        </div>
    );
};

export default FinalPage;
