import React, { useContext, useEffect } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import Resume from '../RESUME/Resume';

const DownloadResumePage = () => {
    const {profile, setProfile} = useContext(ProfileContext);


    useEffect(()=>{
        window.print();
        location.href = "/create";
    },[])
    return (
        <Resume USER={profile} />
    )
}

export default DownloadResumePage