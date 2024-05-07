import React, { useContext } from 'react';
import InputField from '../components/InputField';
import { ProfileContext } from '../contexts/ProfileContext';
import SpecialInputField from '../components/SpecialInputField';

const ProjectDetails = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleAddProject = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            projects: [
                ...prevProfile.projects,
                { name: '', description: '', url: '', technologies: [], github: '' }
            ]
        }));

    };

    const handleProjectDetailsChange = (e, index = -1) => {
        if (index == -1) index = parseInt(e.target.closest('.parent').dataset.index);
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            projects: prevProfile.projects.map((project, i) =>
                i === index ? { ...project, [name]: value } : project
            )
        }));
    };

    const handleRemoveProject = (index) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            projects: prevProfile.projects.filter((_, i) => i !== index)
        }));
    };

    return (
        <>
            <div>
                {profile.projects.map((project, index) => (
                    <div className='parent bg-gray-100 p-4 rounded mt-4' key={index} data-index={index}>
                        <h2 className='text-xl font-semibold'>
                            Enter Details for Project {index + 1}
                        </h2>
                        <InputField
                            label="Name"
                            value={project.name}
                            onChange={handleProjectDetailsChange}
                            name="name"
                        />
                        <InputField
                            label="Description (What is the project about? What problem does it solve?)"
                            type='textarea'
                            value={project.description}
                            onChange={handleProjectDetailsChange}
                            name="description"
                            inputClassName='min-h-32'
                        />
                        <SpecialInputField
                            label="Technologies Used (e.g. React, Node)"
                            value={project.technologies}
                            onChange={(technologies) => handleProjectDetailsChange({ target: { name: 'technologies', value: technologies } }, index)}
                            name="technologies"
                            options={[
                                'React', 'Node', 'Express', 'MongoDB', 'Firebase', 'Angular', 'Vue.js', 'Django', 'Flask', 'Spring',
                                'Laravel', 'Ruby on Rails', 'ASP.NET', 'Symfony', 'CakePHP', 'CodeIgniter', 'Struts', 'Hibernate',
                                'Ember.js', 'Sails.js', 'NestJS', 'Quarkus', 'Grails', 'Dropwizard', 'Koa', 'Phoenix', 'LoopBack',
                                'AdonisJS', 'Feathers', 'Next.js', 'Nuxt.js', 'Svelte', 'Polymer', 'Backbone.js', 'Aurelia', 'Mithril',
                                'Meteor', 'Riot.js', 'Durandal', 'CanJS', 'Spine', 'Knockout.js', 'Flight', 'Derby', 'Glide', 'Echo',
                                'MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Oracle', 'SQL Server', 'MariaDB', 'Cassandra', 'Couchbase',
                                'DynamoDB', 'Neo4j', 'CouchDB', 'RethinkDB', 'Elasticsearch', 'Memcached', 'ArangoDB', 'CockroachDB',
                                'InfluxDB', 'VoltDB', 'RavenDB', 'HBase', 'Teradata', 'DB2', 'Greenplum', 'Vertica', 'Amazon Aurora',
                                'Aerospike', 'Snowflake', 'Bigtable', 'ClickHouse', 'Cosmos DB', 'DocumentDB', 'MarkLogic', 'Realm',
                                'Rockset', 'TiDB', 'TimescaleDB', 'Vitess', 'YugaByte DB', 'Zebra', 'Zetabyte DB', 'Zookeeper', 'ZODB',
                                'Zope', 'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Travis CI', 'CircleCI', 'TeamCity',
                                'Bamboo', 'GitLab', 'GitHub Actions', 'Bitbucket Pipelines', 'Heroku', 'Netlify', 'Vercel', 'DigitalOcean',
                                'Linode', 'Google Cloud Platform', 'Microsoft Azure', 'IBM Cloud', 'Oracle Cloud', 'Alibaba Cloud', 'Terraform',
                                'Ansible', 'Chef', 'Puppet', 'SaltStack', 'Consul', 'etcd', 'Docker Swarm', 'Rancher', 'Nomad', 'Jira',
                                'Confluence', 'Slack', 'Trello', 'Asana', 'Notion', 'Microsoft Teams', 'Zoom', 'Google Meet', 'Skype',
                                'Discord', 'Rocket.Chat'
                            ]}
                            getOptionLabel={(option) => option}
                        />

                        <InputField
                            label="Project URL (if any)"
                            value={project.url}
                            onChange={handleProjectDetailsChange}
                            name="url"
                        />
                        <InputField
                            label="Github Repository URL"
                            value={project.github}
                            onChange={handleProjectDetailsChange}
                            name="github"
                        />
                        <button
                            onClick={() => handleRemoveProject(index)}
                            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-xs'
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                ))}
            </div>
            <div className='mt-4'>
                <button
                    onClick={handleAddProject}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm'
                >
                    <i className='fa fa-plus'></i> Add Project
                </button>
            </div>
        </>
    );
};

export default ProjectDetails;