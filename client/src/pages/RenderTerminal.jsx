import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProfile } from '../utils/api';
import Terminal from '../TERMINAL/Terminal';

const RenderTerminal = () => {
    let { username } = useParams();
    // now call the getProfile with username and set the profile
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const terminalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [terminalOpen, setTerminalOpen] = useState(true);
    useEffect(() => {
        // if username starts with @ remove it
        if (username.startsWith('@')) {
            username = username.substring(1);
        }
        getProfile(username).then((data) => {
            if (data.status === 200) {
                setProfile(data);
                setLoading(false);
            }else if(data.status === 404) {
                setError(data.message);
                setLoading(false);

            }
        });
    }, [username]);
    return (
        <div
        className='terminal-container flex justify-center items-center h-screen w-screen bg-gray-900'
        >
            {loading ? <div>Loading...</div> : 
            <Terminal 
                USER={profile}
                terminalRef={terminalRef}
                userName={profile.name}
                theme={profile.theme}
                setTerminalOpen={setTerminalOpen}
                isLoading={[
                    isLoading,
                    setIsLoading,
                    8
                ]}
            />
            }
            {
                error && <div>{error}</div>
            }
        </div>
    )
}

export default RenderTerminal