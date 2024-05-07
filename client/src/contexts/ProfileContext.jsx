import React, { createContext, useEffect, useState } from 'react'

export const ProfileContext = createContext()

const ProfileContextProvider = ({ children }) => {
    const [profile, setProfile] = useState(
        localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) :
        {
        theme: 'blue-hacker',
        name: '',
        email: '',
        location: '',
        username: '',
        about: '',
        social: {
            github: '',
            linkedin: '',
            twitter: '',
            website: ''
        },

        // Project Details
        projects: [{
            name: '',
            description: '',
            url: '',
            technologies: [],
            github: ''
        }],

        // Skills and Experience
        skills: {
            languages: [],
            frameworks: [],
            databases: [],
            tools: []
        },

        experience: [
            {
                company: '',
                position: '',
                period: '',
                description: ''
            }
        ],

        // Education and Certifications
        education: [{
            institution: '',
            degree: '',
            duration: '',
            grade: ''
        }],
        certifications: [{
            title: '',
            issuer: '',
            year: '',
            link: ''
        }],

        // Personal Details
        learningGoals: ["Jira"],
        hobbies: ["Cricket"],
        interests: ["Reading", "Writing", "Coding"],
    })

    useEffect(() => {
        console.log(profile)
        localStorage.setItem('profile', JSON.stringify(profile))
    }
    , [profile])

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )

}

export default ProfileContextProvider
