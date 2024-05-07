import React, { useEffect, useState } from 'react';
import { getBasicProfile } from '../utils/api';

const Dashboard = () => {
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
        <div className="flex flex-col min-h-screen bg-primary-100">
            {/* Header Section */}
            <header className="flex flex-col px-8 py-4 justify-between md:flex-row md:items-center">
                <h1 className="text-primary-700 text-2xl font-bold">Portfolio Design Tool</h1>
                <div className="flex items-center space-x-4">
                    <i className="fas fa-search text-primary-500"></i>
                    <input
                        className="w-full h-10 px-4 py-2 rounded-full border border-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </header>

            {/* Main Content Section */}
            <main className="flex flex-col flex-grow px-8 pb-8">
                {/* About Tool Section */}
                <section className="w-full bg-white shadow rounded-lg mb-8 p-4">
                    <h2 className="text-primary-700 text-lg font-semibold pb-4">About Your Portfolio Design Tool</h2>
                    <p className="text-gray-600">
                        Welcome to our Portfolio Designing Tool! Create a stunning portfolio by providing your details, and we will craft a beautiful portfolio hosted on our domain.
                    </p>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full mt-4">
                        Create Portfolio
                    </button>
                </section>

                {/* Data Section with Skeleton Loading Effect */}
                <section className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-primary-700 text-lg font-semibold pb-4">
                        All Portfolios
                    </h2>

                    {loading ? (
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded mb-2"></div>
                            <div className="h-8 bg-gray-200 rounded mb-2"></div>
                            <div className="h-8 bg-gray-200 rounded mb-2"></div>
                        </div>
                    ) : (
                        <table className="w-full table-auto text-sm">
                            <thead>
                                <tr className="text-sm leading-normal bg-primary-100">
                                    <th className="py-2 px-4 text-left font-bold uppercase text-primary-700 border-b border-primary-300">
                                        Email
                                    </th>
                                    <th className="py-2 px-4 text-left font-bold uppercase text-primary-700 border-b border-primary-300">
                                        Name
                                    </th>
                                    <th className="py-2 px-4 text-left font-bold uppercase text-primary-700 border-b border-primary-300">
                                        About
                                    </th>
                                    <th className="py-2 px-4 text-left font-bold uppercase text-primary-700 border-b border-primary-300">
                                        Preview
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id} className="hover:bg-primary-200">
                                        <td className="py-2 px-4 border-b border-primary-300">
                                            {user.email}
                                        </td>
                                        <td className="py-2 px-4 border-b border-primary-300">
                                            {user.name}
                                        </td>
                                        <td className="py-2 px-4 border-b border-primary-300">
                                            {user.about}
                                        </td>
                                        <td className="py-2 px-4 border-b border-primary-300">
                                            <a
                                                href={`/t/${user.username}`}
                                                className="text-blue-500 hover:underline"
                                                target='_blank'
                                            >
                                                View Profile
                                                <i className="fa-solid fa-up-right-from-square mr-1 ml-3"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Dashboard;