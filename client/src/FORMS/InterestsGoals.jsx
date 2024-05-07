import React, { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import SpecialInputField from '../components/SpecialInputField';

const InterestsGoals = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    return (
        <div>
            <SpecialInputField
                label="Interests"
                value={profile.interests}
                onChange={(e) => { handleInputChange({ target: { name: 'interests', value: e } }) }}
                name="interests"
                options={[]}
                getOptionLabel={(option) => option}
            />
            <SpecialInputField
                label="Learning Goals (What do you want to learn in nearby future?)"
                value={profile.learningGoals}
                onChange={(e) => { handleInputChange({ target: { name: 'learningGoals', value: e } }) }}
                name="learningGoals"
                options={[]}
                getOptionLabel={(option) => option}

            />
            <SpecialInputField
                label="Hobbies"
                value={profile.hobbies}
                onChange={(e) => { handleInputChange({ target: { name: 'hobbies', value: e } }) }}
                name="hobbies"
                options={[]}
                getOptionLabel={(option) => option}
            />
        </div>
    );
};

export default InterestsGoals;
