import React, { useContext } from 'react';
import InputField from '../components/InputField';
import SpecialInputField from '../components/SpecialInputField';
import { ProfileContext } from '../contexts/ProfileContext';

const SkillsExperience = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    const handleSkillsChange = (type, skills) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            skills: {
                ...prevProfile.skills,
                [type]: skills
            }
        }));
    };

    const handleExperienceChange = (index, field, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            experience: prevProfile.experience.map((exp, i) =>
                i === index ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const handleAddExperience = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            experience: [
                ...prevProfile.experience,
                { company: '', position: '', period: '', description: '' }
            ]
        }));
    };

    const handleRemoveExperience = (index) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            experience: prevProfile.experience.filter((_, i) => i !== index)
        }));
    };

    return (
        <>
            <div className="bg-gray-100 p-4 rounded mt-4">
                <h2 className="text-xl font-semibold">Skills</h2>
                <SpecialInputField
                    label="Languages (e.g. JavaScript, Python)"
                    value={profile.skills.languages}
                    onChange={(languages) => handleSkillsChange('languages', languages)}
                    name="languages"
                    options={[
                        'JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Swift',
                        'TypeScript', 'Rust', 'Kotlin', 'Scala', 'Perl', 'Haskell', 'Lua', 'Shell',
                        'HTML', 'CSS', 'SQL', 'Assembly', 'Objective-C', 'R', 'MATLAB', 'Dart', 'F#',
                        'VHDL', 'Verilog', 'Clojure', 'Groovy', 'Scheme', 'Lisp', 'Erlang', 'OCaml',
                        'Fortran', 'Delphi', 'COBOL', 'Pascal', 'Ada', 'PL/SQL', 'Tcl', 'Prolog',
                        'PowerShell', 'Batch', 'ColdFusion', 'VBScript', 'ActionScript'
                    ]}
                    getOptionLabel={(option) => option}
                    tagBgColor='bg-green-500' // Indicates positive feelings for languages
                />
                <SpecialInputField
                    label="Frameworks(e.g. React, Angular, Next,js)"
                    value={profile.skills.frameworks}
                    onChange={(frameworks) => handleSkillsChange('frameworks', frameworks)}
                    name="frameworks"
                    options={[
                        'React', 'Angular', 'Vue.js', 'Django', 'Flask', 'Spring', 'Express.js', 'Laravel',
                        'Ruby on Rails', 'ASP.NET', 'Symfony', 'CakePHP', 'CodeIgniter', 'Struts', 'Play',
                        'Hibernate', 'Meteor', 'Ember.js', 'Meteor', 'Sails.js', 'NestJS', 'Quarkus', 'Grails',
                        'Dropwizard', 'Koa', 'Phoenix', 'LoopBack', 'AdonisJS', 'Feathers', 'Next.js', 'Nuxt.js',
                        'Svelte', 'Polymer', 'Backbone.js', 'Aurelia', 'Mithril', 'Meteor', 'Riot.js', 'Durandal',
                        'CanJS', 'Ember.js', 'Spine', 'Knockout.js', 'Flight', 'Derby', 'Glide', 'Echo'
                    ]}
                    getOptionLabel={(option) => option}
                    tagBgColor='bg-blue-500' // Indicates a neutral feeling for frameworks
                />
                <SpecialInputField
                    label="Databases(e.g. MySQL, MongoDB)"
                    value={profile.skills.databases}
                    onChange={(databases) => handleSkillsChange('databases', databases)}
                    name="databases"
                    options={[
                        'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Oracle', 'SQL Server', 'MariaDB',
                        'Cassandra', 'Couchbase', 'DynamoDB', 'Firebase', 'Neo4j', 'CouchDB', 'RethinkDB',
                        'Elasticsearch', 'Memcached', 'ArangoDB', 'CockroachDB', 'InfluxDB', 'VoltDB', 'RavenDB',
                        'HBase', 'Teradata', 'DB2', 'Greenplum', 'Vertica', 'Amazon Aurora', 'Aerospike', 'Snowflake',
                        'Bigtable', 'ClickHouse', 'Cosmos DB', 'DocumentDB', 'MarkLogic', 'Realm', 'Rockset', 'TiDB',
                        'TimescaleDB', 'Vitess', 'YugaByte DB', 'Zebra', 'Zetabyte DB', 'Zookeeper', 'ZODB', 'Zope'
                    ]}
                    getOptionLabel={(option) => option}
                    tagBgColor='bg-yellow-500' // Indicates caution for databases
                />
                <SpecialInputField
                    label="Tools / Platforms / Technologies / Services"
                    value={profile.skills.tools}
                    onChange={(tools) => handleSkillsChange('tools', tools)}
                    name="tools"
                    options={[
                        'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Travis CI', 'CircleCI', 'TeamCity',
                        'Bamboo', 'GitLab', 'GitHub Actions', 'Bitbucket Pipelines', 'Heroku', 'Netlify', 'Vercel',
                        'DigitalOcean', 'Linode', 'Google Cloud Platform', 'Microsoft Azure', 'IBM Cloud', 'Oracle Cloud',
                        'Alibaba Cloud', 'Terraform', 'Ansible', 'Chef', 'Puppet', 'SaltStack', 'Consul', 'Zookeeper',
                        'etcd', 'Docker Swarm', 'Rancher', 'Nomad', 'Jira', 'Confluence', 'Slack', 'Trello', 'Asana',
                        'Notion', 'Microsoft Teams', 'Zoom', 'Google Meet', 'Skype', 'Discord', 'Rocket.Chat', 'Slack'
                    ]}
                    getOptionLabel={(option) => option}
                    tagBgColor='bg-red-500' // Indicates negative feelings towards tools
                />
            </div>

            <div className="bg-gray-100 p-4 rounded mt-4">
                <h2 className="text-xl font-semibold">Experience</h2>
                {profile.experience.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
                        <InputField
                            label="Company Name"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                            name="company"
                        />
                        <InputField
                            label="Position / Role / Title"
                            value={exp.position}
                            onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                            name="position"
                        />
                        <InputField
                            label="Period (e.g. Jan 2020 - Feb 2021)"
                            value={exp.period}
                            onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                            name="period"
                        />
                        <InputField
                            label="Description (Your role and responsibilities)"
                            type="textarea"
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                            name="description"
                            inputClassName="min-h-32 resize-auto"
                        />
                        <button
                            onClick={() => handleRemoveExperience(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-xs group"
                        >
                            <i className="fa fa-trash mr-2"></i> 
                            <span className="hidden group-hover:inline">Remove Experience</span>
                        </button>
                    </div>
                ))}
                <button
                    onClick={handleAddExperience}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                >
                    <i className="fa fa-plus mr-2"></i> Add Experience
                </button>
            </div>
        </>
    );
};

export default SkillsExperience;
