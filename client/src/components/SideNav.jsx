import React, { useEffect } from 'react';

const SideNav = ({ isMenuOpen,
    setIsMenuOpen
 }) => {
    const currentPath = window.location.pathname;
    const NAVIGATION_LINKS = [
        {
            title: 'Home',
            icon: 'fa fa-home',
            link: '/'
        },
        {
            title: 'Dashboard',
            icon: 'fa fa-chart-line',
            link: '/dashboard',
        }
    ];

    return (
        <div
            className={`bg-neutral-200 shadow-lg text-neutral-800 min-h-screen py-8 flex flex-col justify-between transition-all duration-300 sticky top-0 ${
                isMenuOpen ? 'px-4': 'px-2'
            }`}
        >
            <div className="flex items-center mb-8">
                <i className="fa fa-rocket text-accent-500 mr-3 text-2xl"></i>
                {
                    isMenuOpen && <span className="text-xl font-semibold">
                        Portfolio Builder
                    </span>
                    
                }
            </div>
            <nav className="flex-1">
                <ul className="space-y-4">
                    {NAVIGATION_LINKS.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.link}
                                className={`flex items-center rounded-md p-2 transition-colors duration-200 ${
                                    currentPath==link.link ? 'bg-primary-400 text-primary-100' : 'hover:bg-primary-400 hover:text-primary-100'
                                }`}
                            >
                                <i className={`${link.icon} mr-3`}></i>
                                
                                {
                                    isMenuOpen && <span>{link.title}</span>
                                }
            
                            </a>
                        </li>
                    ))}

                    <li className="mt-4">
                        {/* Logout */}
                        <button onClick={
                            () => {
                                localStorage.removeItem('profile');
                                location.reload()
                            }
                        
                        } className="flex items-center rounded-md p-2 transition-colors duration-200 bg-red-400 text-red-100 hover:bg-red-500 hover:text-red-200">
                            <i className="fa fa-sign-out-alt mr-3"></i>
                            {
                                isMenuOpen && <span>Logout</span>
                            }
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="text-neutral-500 text-sm">
                {
                    isMenuOpen && <p>&copy; 2024 My App. All rights reserved.</p>
                }      
            </div>
        </div>
    );
};

export default SideNav;