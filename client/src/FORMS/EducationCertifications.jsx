import React, { useContext } from 'react';
import InputField from '../components/InputField';
import { ProfileContext } from '../contexts/ProfileContext';

const EducationCertifications = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleAddEducation = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            education: [
                ...prevProfile.education,
                { institution: '', degree: '', duration: '', grade: '' }
            ]
        }));
    };

    const handleAddCertification = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            certifications: [
                ...prevProfile.certifications,
                { title: '', issuer: '', year: '', link: '' }
            ]
        }));
    };

    const handleEducationDetailsChange = (e, index) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            education: prevProfile.education.map((edu, i) =>
                i === index ? { ...edu, [name]: value } : edu
            )
        }));
    };

    const handleCertificationDetailsChange = (e, index) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            certifications: prevProfile.certifications.map((cert, i) =>
                i === index ? { ...cert, [name]: value } : cert
            )
        }));
    };

    const handleRemoveEducation = (index) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            education: prevProfile.education.filter((_, i) => i !== index)
        }));
    };

    const handleRemoveCertification = (index) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            certifications: prevProfile.certifications.filter((_, i) => i !== index)
        }));
    };

    return (
        <>
            <div>
                {profile.education.map((edu, index) => (
                    <div className='parent bg-gray-100 p-4 rounded mt-4' key={index} data-index={index}>
                        <h2 className='text-xl font-semibold'>
                            Enter Details for Education {index + 1}
                        </h2>
                        <InputField
                            label="Institution"
                            value={edu.institution}
                            onChange={(e) => handleEducationDetailsChange(e, index)}
                            name="institution"
                        />
                        <InputField
                            label="Degree"
                            value={edu.degree}
                            onChange={(e) => handleEducationDetailsChange(e, index)}
                            name="degree"
                        />
                        <InputField
                            label="Duration"
                            value={edu.duration}
                            onChange={(e) => handleEducationDetailsChange(e, index)}
                            name="duration"
                        />
                        <InputField
                            label="Grade"
                            value={edu.grade}
                            onChange={(e) => handleEducationDetailsChange(e, index)}
                            name="grade"
                        />
                        <button
                            onClick={() => handleRemoveEducation(index)}
                            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-xs'
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                ))}
                <div className='mt-4'>
                    <button
                        onClick={handleAddEducation}
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm'
                    >
                        <i className='fa fa-plus'></i> Add Education
                    </button>
                </div>
                {profile.certifications.map((cert, index) => (
                    <div className='parent bg-gray-100 p-4 rounded mt-4' key={index} data-index={index}>
                        <h2 className='text-xl font-semibold'>
                            Enter Details for Certification {index + 1}
                        </h2>
                        <InputField
                            label="Title"
                            value={cert.title}
                            onChange={(e) => handleCertificationDetailsChange(e, index)}
                            name="title"
                        />
                        <InputField
                            label="Issuer"
                            value={cert.issuer}
                            onChange={(e) => handleCertificationDetailsChange(e, index)}
                            name="issuer"
                        />
                        <InputField
                            label="Year"
                            value={cert.year}
                            onChange={(e) => handleCertificationDetailsChange(e, index)}
                            name="year"
                        />
                        <InputField
                            label="Link"
                            value={cert.link}
                            onChange={(e) => handleCertificationDetailsChange(e, index)}
                            name="link"
                        />
                        <button
                            onClick={() => handleRemoveCertification(index)}
                            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-xs'
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                ))}
            </div>
            <div className='mt-4'>
                <button
                    onClick={handleAddCertification}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm ml-4'
                >
                    <i className='fa fa-plus'></i> Add Certification
                </button>
            </div>
        </>
    );
};

export default EducationCertifications;
