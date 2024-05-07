export default function getCommandsFromUser(USER) {
  return [
    {
      id: 0,
      command: "contact",
      usage: "Type 'contact' to see my contact information.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">Contact Information</h2>
              <div class="mt-4">
                <p class="text-secondary-text">
                  <i class="fa-solid fa-envelope mr-2 text-primary-color"></i>
                  ${USER.email}
                </p>
                <p class="mt-2 text-secondary-text">
                  <i class="fa-solid fa-map-marker-alt mr-2 text-primary-color"></i>
                  ${USER.location}
                </p>
              </div>
            </div>
          `,
      isAvailable: !!(USER.email && USER.location),
    },
    {
      id: 1,
      command: "about",
      usage: "Type 'about' to learn more about me.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">About Me</h2>
              <p class="mt-4 text-secondary-text">
                ${USER.about}
              </p>
            </div>
          `,
      isAvailable: !!USER.about,
    },
    {
      id: 2,
      command: "projects",
      usage: "Type 'projects' to view my projects.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Projects</h2>
              ${
                USER.projects && USER.projects.length > 0 &&
                USER?.projects
                .map(
                  (project) => `
                <div class="mt-6">
                  <h3 class="text-xl font-bold">${project.name}</h3>
                  <p class="mt-2 text-secondary-text">${project.description}</p>
                  ${
                    project.technologies && project.technologies.lenght > 0
                      ? `<div class="mt-2">
                    <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                      ${project.technologies.join(
                        '</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">'
                      )}
                    </span>
                  </div>`
                      : ""
                  }
                  <div class="mt-2 flex">
                    ${
                      project.github
                        ? `<a href="${project.github}" class="text-primary-color hover:underline">
                            <i class="fa-brands fa-github mr-1"></i>
                            GitHub
                        </a>`
                        : ""
                    }
                    ${
                      project.url
                        ? `<a href="${project.url}" class="text-primary-color hover:underline ml-4">
                            <i class="fa-solid fa-up-right-from-square mr-1"></i>
                            View Project
                        </a>`
                        : ""
                    }

                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `,
      isAvailable: !!(USER.projects && USER.projects.length > 0),
    },
    {
      id: 3,
      command: "skills",
      usage: "Type 'skills' to see my expertise.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Skills</h2>

              ${Object.keys(USER.skills||{})
                .map((key) => {
                  return `<div class="mt-4">
                    <h3 class="text-xl font-bold">
                        <i class="fa-solid fa-code mr-2 text-primary-color"></i>
                        ${key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <div class="mt-2 flex flex-wrap gap-2">
                        ${USER.skills[key]
                          .map(
                            (skill) => `
                        <span class=" bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${skill}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: !!USER.skills,
    },
    {
      id: 4,
      command: "social",
      usage: "Type 'social' to see my social links.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Social Links</h2>
              ${Object.keys(USER.social)
                .map((key) => {
                  return `<div class="flex items-center mb-2">
                    <i class="fa-brands fa-${key} text-primary-color mr-2"></i>
                    <a href="${USER.social[key]}" class="text-primary-color hover:underline">${key}</a>
                    </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: Object.keys(USER.social).length > 0,
    },
    {
      id: 5,
      command: "education",
      usage: "Type 'education' to see my educational background.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Education</h2>
            ${USER.education
              .map(
                (edu) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${edu.degree}</h3>
                  <p class="mt-2 text-secondary-text">${edu.institution} | ${edu.duration}</p>
                  <p class="mt-2 text-secondary-text">Grade: ${edu.grade}</p>
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.education && USER.education.length > 0),
    },
    {
      id: 6,
      command: "certifications",
      usage: "Type 'certifications' to see my certifications.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Certifications</h2>
            ${USER.certifications
              .map(
                (cert) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${
                    cert.title
                  }</h3>
                  <p class="mt-2 text-secondary-text">Issuer: ${cert.issuer}</p>
                  <p class="mt-2 text-secondary-text">Year: ${cert.year}</p>
                  ${
                    cert.link
                      ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">View Certificate</a>`
                      : ""
                  }
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.certifications && USER.certifications.length > 0),
    },
    {
      id: 7,
      command: "experience",
      usage: "Type 'experience' to see my work experience.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
            ${USER.experience
              .map(
                (exp) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${exp.position}</h3>
                  <p class="mt-2 text-secondary-text">${exp.company} | ${exp.period}</p>
                  <p class="mt-2 text-secondary-text">${exp.description}</p>
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.experience && USER.experience.length > 0),
    },
    {
      id: 8,
      command: "languages",
      usage: "Type 'languages' to see the languages I speak.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Languages</h2>
              <div class="flex flex-wrap">
                ${USER.languages&&USER.languages
                  .map(
                    (lang) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${lang}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.languages && USER.languages.length > 0),
    },
    {
      id: 9,
      command: "hobbies",
      usage: "Type 'hobbies' to see my hobbies.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Hobbies</h2>
              <div class="flex flex-wrap">
                ${USER.hobbies
                  .map(
                    (hobby) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${hobby}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.hobbies && USER.hobbies.length > 0),
    },
    {
      id: 10,
      command: "interests",
      usage: "Type 'interests' to see my interests.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Interests</h2>
              <div class="flex flex-wrap">
                ${USER.interests
                  .map(
                    (interest) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${interest}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.interests && USER.interests.length > 0),
    },
    {
      id: 11,
      command: "welcome",
      usage: "Type 'welcome' to see the greeting.",
      description: `
          <div class="text-primary-text">
            <h1 class="text-3xl font-bold mb-4">Welcome to my Terminal Portfolio!</h1>
            <p class="text-secondary-text mb-2">
              Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface.
            </p>
            <p class="text-secondary-text mb-2">
              Feel free to explore the available commands and discover more about my background, skills, projects, and social connections.
            </p>
            <p class="text-secondary-text mb-4">
              Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
            </p>
            <div class="flex items-center justify-center">
              <pre class="text-2xl text-center">┌───────────────────┐
  🚀 Let's Explore! 
└───────────────────┘
              </pre>
            </div>
          </div>
        `,
      isAvailable: true,
    },
  ];
}
