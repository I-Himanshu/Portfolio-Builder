import React from 'react';
const Resume = ({
    USER
}) => {
    console.log(USER,"USER");
    const { name, email, phone, website, education, experience, skills, projects, certifications } = USER;
    return (
        <div className="resume bg-white p-4 aspect-w-16 aspect-h-23 text-black w-full flex flex-col">
            {/* <h1 className="text-2xl font-bold text-center">Resume</h1> */}
            <div className="resume-heading w-full flex justify-between">
                <div className="resume-left w-1/2">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    {website && <p><a href={website} className="text-blue-500">{website}</a></p>}
                    <div className="flex gap-2">
                        {
                            USER.social && (
                                Object.keys(USER.social).filter(key => USER.social[key] && USER.social[key].length > 0).map((key, index) => (
                                    <a key={index} href={USER.social[key]} target="_blank" rel="noreferrer">
                                        <i className={`fab fa-${key} text-xl`}></i>
                                    </a>
                                ))
                            )
                        }
                    </div>
                </div>
                <div className="resume-right w-1/2 text-right">
                    {
                        email && (
                            <p>
                                <i className="fas fa-envelope mr-2"></i>
                                <a href={`mailto:${email}`}>{email}</a>
                            </p>
                        )
                        
                    }
                    {
                        phone && (
                            <p>
                                <i className="fas fa-phone-alt mr-2"></i>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </p>
                        )
                    }
                    {
                        USER.location && (
                            <p>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {USER.location}</p>
                        )
                    }
                </div>
            </div>
            <div className="resume-about mt-2">
                <h2 className="text-xl font-bold border-b-2 border-gray-600">About</h2>
                <p>{USER.about}</p>
            </div>
            <h2 className="text-xl font-bold mt-2 w-full border-b-2 border-gray-600">Education</h2>
            {education && education.length > 0 && (
                education.map((edu, index) => (
                    <div key={index} className="resume-subheading">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">{edu.institution}</h3>
                            <p className="italic text-sm">{edu.location || edu.grade}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>{edu.degree}</p>
                            <p className="italic text-sm">{edu.duration}</p>
                        </div>
                    </div>
                ))
            )}

            {
                experience && experience.length > 0 && (
                    <div className="experience">
                        <h2 className="text-xl font-bold mt-4 border-b-2 border-gray-600">Experience</h2>
                        {
                            experience.map((exp, index) => (
                                <div key={index} className="resume-subheading mb-2">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">{exp.company}</h3>
                                        <p className="italic text-sm">{exp.period}</p>
                                    </div>
                                    <p className="italic text-sm font-semibold">{exp.position}</p>
                                    <p className="w-3/4">{exp.description}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }


            {skills && (skills.languages || skills.frameworks || skills.databases || skills.tools) && (
                <div className="skills">
                    <h2 className="text-xl font-bold border-b-2 border-gray-600">Technical Skills</h2>
                    <ul className="list-disc ml-4">
                        {
                            Object.keys(skills).filter(key => skills[key] && skills[key].length > 0 && key !== 'id').map((key, index) => (
                                <li key={index} className="text-sm">
                                    <span className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>: {skills[key].join(', ')}
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            )}

            {projects && projects.length > 0 && (
                <div className="projects mt-2">
                    <h2 className="text-xl font-bold border-b-2 border-gray-600">Projects</h2>
                    {projects.map((project, index) => (
                        <div key={index} className="resume-subheading mb-1">
                            <h3 className="font-semibold">{project.name}
                                {
                                    project.url && (
                                        <a href={project.url} className="ml-2" target="_blank" rel="noreferrer">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    )
                                }
                                {
                                    project.github && (
                                        <a href={project.github} className="ml-2" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    )
                                }
                            </h3>
                            <div className="flex justify-between gap-2">
                                <p className='description w-3/4'>{project.description}</p>
                                {project.technologies && (
                                    <p className="italic text-sm w-1/4">{project.technologies.join(', ')}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {certifications && certifications.length > 0 && (
                <div className="certifications">
                    <h2 className="text-xl font-bold mt-4 border-b-2 border-gray-600">Certifications</h2>
                    {certifications.map((certification, index) => (
                        <div key={index} className="resume-subheading">
                            <h3 className="font-bold">{certification.title}</h3>
                            <p className="italic text-sm">{certification.issuer}, {certification.year}</p>
                        </div>
                    ))}
                </div>
            )}

            {
                USER.languages && USER.languages.length > 0 && (
                    <div className="languages">
                        <h2 className="text-xl font-bold mt-4 border-b-2 border-gray-600">Languages</h2>
                        <div className="flex gap-3">
                            {
                                USER.languages.map((language, index) => (
                                    <p key={index}>{language}</p>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Resume;