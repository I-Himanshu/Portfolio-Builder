import React, { useState, useEffect } from 'react';
import { getBasicProfile } from '../utils/api';

const UserCard = ({ username, name, email, about }) => {
    return (
        <div className='bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-lg'>{username}</p>
            <p className='text-lg'>{email}</p>
            <p className='text-lg'>{about}</p>
            <a href={`/t/${username}`} className='text-blue-500 hover:underline'>View Profile
                <i class="fa-solid fa-up-right-from-square mr-1 ml-3"></i>
            </a>
        </div>
    );
};

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBasicProfile();
                if (response.status === 200) {
                    setUsers(response.data);
                } else {
                    console.log(response, 'error');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
            {loading ? (
                <p className='text-gray-600 text-lg text-center'>Loading...</p>
            ) : (
                users.map((user) => (
                    <UserCard
                        key={user.username}
                        username={user.username}
                        name={user.name}
                        email={user.email}
                        about={user.about}
                    />
                ))
            )}
        </div>
    );
};

export default Users;