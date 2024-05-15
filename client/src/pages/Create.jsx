import React, { useContext, useState } from 'react';
import FormLayout from '../components/FormLayout';
import BasicFormDetails from '../FORMS/BasicFormDetails';
import { ProfileContext } from '../contexts/ProfileContext';
import ProfessionalDetails from '../FORMS/ProjectDetails';
import SkillsExperience from '../FORMS/SkillsExperience';
import EducationCertifications from '../FORMS/EducationCertifications';
import InterestsGoals from '../FORMS/InterestsGoals';
import FinalPage from '../FORMS/FinalPage';
import { createProfile } from '../utils/api';
import ChooseType from '../FORMS/ChooseType';
import SetDetailsFromResume from '../FORMS/SetDetailsFromResume';

const Create = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState('');
    const { profile, setProfile } = useContext(ProfileContext);
    const [portfolioUrl, setPortfolioUrl] = useState('');
    const FORMS = [
        {
            title: "Choose What You want to build?",
            component: ChooseType,
            checkValidity: ()=>{
                return ''
            }
        },
        {
            title: "Fill Details From Previous Resume",
            component: SetDetailsFromResume,
            checkValidity: ()=>{
                return ''
            }
        }
        ,
        {
        title: 'Basic Details',
        component: BasicFormDetails,
        checkValidity: () => {
            if (profile.name.length < 3) return 'Name must be atleast 3 characters long';
            if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(profile.email)) return 'Email is invalid';
            if (profile.location.length < 5) return 'Location must be atleast 5 characters long';
            if (profile.about.length < 10) return 'About must be atleast 10 characters long';
            // atleast 2 social links
            var socialLinks = Object.values(profile.social);
            socialLinks = socialLinks.filter((link) => link !== '');
            if (socialLinks.length < 2) return 'Please provide atleast 2 social profile links';
            return '';
        }
    }, {
        title: 'Professional Details',
        component: ProfessionalDetails,
        checkValidity: () => {
            if (profile.projects.length < 1) return 'Please provide atleast 1 project';
            return '';
        }
    },
    {
        title: 'Skills and Experience',
        component: SkillsExperience,
        checkValidity: () => {
            if (profile.skills.languages.length < 1) return 'Please provide atleast 1 language';
            return '';
        }
    },
    {
        title: 'Education and Certifications',
        component: EducationCertifications,
        checkValidity: () => {
            if (profile.education.length < 1) return 'Please provide atleast 1 education detail';
            if (profile.certifications.length < 1) return 'Please provide atleast 1 certification detail';
            return '';
        }
    },
    {
        title: "Interests and Hobbies",
        component: InterestsGoals,
        checkValidity: () => {
            // if (profile.interests.length < 1) return 'Please provide atleast 1 interest';
            return '';
        }
    },
    {
        title: 'Success',
        component: FinalPage,
        args: { portfolioUrl },
        checkValidity: () => ''
    }
    ];

    const handlePrevious = () => {
        // can't go back from first step
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
        setPortfolioUrl('');
    };

    const handleNext = () => {
        const error = FORMS[currentStep - 1].checkValidity();
        if (error) {
            setError(error);
            return;
        }
        setError('');
        if (currentStep === FORMS.length) return;
        setCurrentStep(currentStep + 1);
        setPortfolioUrl('');
    };

    const handleFormSubmit = () => {
        try {
            var res = createProfile(profile).then((res) => {
                console.log(res, "rr");
                if (res.status === 200) {
                    setPortfolioUrl(res.url);
                    setError('');
                } else {
                    setError(res.message ||
                        res?.errorResponse?.errmsg
                        || 'Error creating profile')
                    setPortfolioUrl('');
                }
            });
            // window.location.href = res.url;
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <FormLayout
            title={FORMS[currentStep - 1].title}
            onPrevious={handlePrevious}
            onNext={handleNext}
            error={error}
            progressPercentage={((currentStep - 1) / (FORMS.length - 1)) * 100}
            profile={profile}
            onSubmit={handleFormSubmit}
        >
            {
                React.createElement(FORMS[currentStep - 1].component, {
                    ...FORMS[currentStep - 1].args
                })
            }
        </FormLayout>
    );
};

export default Create;