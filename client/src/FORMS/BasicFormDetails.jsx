import React, { useContext, useState } from 'react';
import InputField from '../components/InputField';
import { ProfileContext } from '../contexts/ProfileContext';
import SpecialInputField from '../components/SpecialInputField';

const BasicFormDetails = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfile((prevProfile) => ({
        ...prevProfile,
        [parent]: {
          ...prevProfile[parent],
          [child]: value
        }
      }));
      return;
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    }
  }
  return (
    <div>
      <InputField
        label="Name"
        value={profile.name}
        onChange={handleChange}
        name="name"
      />
      <InputField
        label="Email"
        value={profile.email}
        onChange={handleChange}
        name="email"
        type="email"
      />
      <InputField
        label="Location"
        value={profile.location}
        onChange={handleChange}
        name="location"
      />
      <InputField
        label="About / Tagline"
        value={profile.about}
        onChange={handleChange}
        name="about"
        type="textarea"
      />

      {/* Take INput for 
            social: {
            github: '',
            linkedin: '',
            twitter: '',
            website: ''
            ...
            ...
            ..
        },
            */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Github"
          value={profile.social.github}
          onChange={handleChange}
          name="social.github"
        />
        <InputField
          label="LinkedIn"
          value={profile.social.linkedin}
          onChange={handleChange}
          name="social.linkedin"
        />
        <InputField
          label="Twitter"
          value={profile.social.twitter}
          onChange={handleChange}
          name="social.twitter"
        />
        <InputField
          label="Website"
          value={profile.social.website}
          onChange={handleChange}
          name="social.website"
        />
      </div>
    </div>
  );
};

export default BasicFormDetails;