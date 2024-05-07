import React, { useEffect, useRef, useState } from 'react';
import ProfileContextProvider from '../contexts/ProfileContext';
import Preview from './Preview';

const FormLayout = ({
    title,
    children,
    onPrevious,
    onNext,
    error,
    progressPercentage = 0,
    onSubmit = () => {
        console.log('Submit');
    },
    profile
}) => {
    const errorRef = useRef(null);
    const [previewInMobile, setPreviewInMobile] = useState(false);

    useEffect(() => {
        if (error && errorRef.current && error.length > 0) {
            errorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [error]);

    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className="bg-neutral-100 rounded-lg shadow-lg p-3 md:p-8 pb-10 w-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary-700">{title}</h2>
                    <div className=' md:block'>
                        <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded" onClick={() => setPreviewInMobile(prev => !prev)}>
                            {previewInMobile ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                            Preview
                        </button>
                    </div>
                </div>
                <div className="relative h-2 bg-neutral-200 rounded-full">
                    <div className="absolute h-2 bg-primary-500 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className='flex gap-2'>
                    <div className='min-w-[40vw] max-w-full w-full'>{children}</div>
                    {previewInMobile && (
                        <div className='min-w-[40vw] absolute md:relative h-full flex'>
                            <Preview profile={profile} />
                        </div>
                    )}
                </div>
                {error && <p ref={errorRef} className="text-red-500 mt-4">{error}</p>}
                <div className='md:j mt-4'>
                    <button className={"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded mr-2 " + (progressPercentage > 0 ? '' : 'hidden')} onClick={onPrevious}>
                        Previous
                    </button>
                    {progressPercentage === 100 ? (
                        <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded" onClick={onSubmit}>
                            Submit
                        </button>
                    ) : (
                        <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded" onClick={onNext}>
                            Next
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default FormLayout;