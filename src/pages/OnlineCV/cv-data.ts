import { companyLogos } from '../../images/companyLogos/companyLogos'
import { techStack } from '../../content/techStack';
import { projectInfo } from '../../projectInfo/projectInfo';
import { personalDetails } from '../../constants';

const { steelBuy } = companyLogos;

export const cvData = {
    jobData: [
    // SteelBuy
    {
        company: 'Steel-Buy',
        jobTitle: 'Frontend Engineer',
        started: 'Sept 22',
        left: '',
        companyLogo: steelBuy,
        jobDescription: 'As one of the first developers brought onto the project shortly before launch one of my key responsibilities has been to quickly pick up the codebase in order to transition away from the work that had primarily been done by contractors prior to my arrival. I worked closely with the contractors to fully integrate myself into the workflow and was instrumental in delivering key projects such as taxonomy of new products, and sitewide responsiveness.',
        jobBulletPoints: [
            'Led the development of the app responsiveness. Before my arrival the responsiveness had not been given as much thought and I was able to investigate the workload, create tickets, and support my team develop the responsiveness across the application.',
            'Led the way for the documentation to be a part of our story process and included within our definition of done.',
            'Supported the product team wherever possible by giving estimations and balancing priorities while also ensuring our own tech debt was managed,',
            'Investigated new technologies with the key to refactor major aspects of the codebase and was involved in critical discussions about this refactoring.',
            'Met with customers and external industry experts to fully understand the industry and get a better idea of what was needed across the platform.',
            'Had regular meetings with colleagues across the company to discuss any pain points with the platform that we could potentially improve. This also helped me have a deeper understanding of the needs of the business and what other departments needed, especially from the internal platform.',
            'Fought for the inclusion of accessibility best practices on the platform which had previously been ignored.',
             'Developed some of the first rounds of testing for the front end of the project and encouraged these tests to be a part of our definition of done',
        ],
        techStack: [techStack.react, techStack.typescript, techStack.redux, techStack.reactAdmin]
    },

    // Bamboo Auctions
    {
        company: 'Bamboo Auctions',
        jobTitle: 'Junior Software Engineer',
        started: 'May 22',
        left: 'Aug 22',
        companyLogo: 'bambooAuctions',
        jobDescription: 'I was brought onto the tech team at Bamboo Auctions due to my experience working in agile teams. My colleagues were not familiar with this methodology and so I was able to provide insight and contribute very quickly to changing the entire process of the tech team. I have been a key player in the development of an entirely new platform, discussing our ways of working, contributing feedback on the design and structure of the platform, and building it up from scratch.',
        jobBulletPoints: [
            'Created a tech team manifesto, detailing our way of working to better communicate with all departments what the priorities of the tech team are',
            'Prior to my joining, the team was not using any Agile methodologies or similar, one of my first key contributions was to push for us to use Agile, to have regular stand ups, retros, and sprints. This massively benefitted our productivity and helped us manage our teams expectations with the rest of the company, and stopped us from picking up ad-hoc tasks without direction.',
            'Created the error handling process, which was previously non-existent and being ignored - this helped us understand, document, and fix the errors while also tidying up those errors we were being made aware of.',
            'Was involved in the beginning of the new platform, using a Monorepo pattern and Storybook. I provided important insight into how we should work on this new platform. Learnt Storybook and Redux Toolkit for this project and started to build components with this system.',
            'Triaging support cases, bugs, or other issues within our codebase that could then be raised and resolved using Jira.',
            'Took on high level design and investigation tasks.',
            'Pushed for improvements to accessibility standards and React best practices.'
        ],
        techStack: [
            techStack.react,
            techStack.typescript,
            techStack.redux,
            techStack.node,
            techStack.mongoDB,
            techStack.aws
        ]
    },

    // ClickTravel
    {
        company: 'Click Travel',
        jobTitle: 'Junior Software Engineer',
        started: 'May 21',
        left: 'May 22',
        companyLogo: 'clickTravel',
        jobDescription: 'My first role within ClickTravel was part of a team that was restructuring the front end codebase from Angular to React. I was brought onto this team due to my knowledge of React and was able to provide the team with insight and awareness into React best practices. After ClickTravel was bought by TravelPerk, I was a part of a small team of developers handling the transition between ClickTravel and the parent company TravelPerk.',
        jobBulletPoints: [
            'Developed an understanding of User Roles including external and internal customers',
            'Created an easy to replicate template for apps within our MFE pipeline with plans to create a script that would run it automatically when needed.',
            'Developed multiple React components to align with current Angular developments, ensuring the end result was identical for consistency.',
            'Learnt AWS on the job and quickly picked up using Cloudformation templates to create new lambda functions, alarms etc.'
        ],
        techStack: [
            techStack.react,
            techStack.typescript,
            techStack.redux,
            techStack.node,
            techStack.aws
        ]
    },
],

skills: {
    technologies: [
        'AWS',
        'React',
        'Redux',
        'MongoDB',
        'Storybook',
        'Typescript',
        'Node.js',
        'PostgreSQL',
        'Python',
        'GraphQL',
        'Shopify',
        'Liquid',
    ], 

    otherTechnologies: [
        'Jira',
        'Trello',
        'Miro',
        'Confluence',
        'Figma',
        'ZeroHeight',
        'Balsamiq',
        'Photoshop',
        'Illustrator',
        'inDesign',
        'Premier Pro',
        'Adobe CC',
    ],

    softSkills: [
        'Project management',
        'Story investigation',
        'Delivering talks and presentations',
        'Working in remote teams',
        'Experience in agile teams',
        'Ideation and planning',
        'Effective communication',
    ]
},

educationData: {
    schoolOfCode: {
        description: 'A 16 week bootcamp that taught full stack web development from scratch. Developed skills in JavaScript, React, Node, AWS, PostgreSQL and more. The School of Code was an instrumental stepping stone for me to change careers and enter the world of tech.',
        projects: {
            recap: {
                ...projectInfo.recap,
                projectDescription: 'A video and resource sharing app to support School of Code staff better support the School of Code students. Created in 4 weeks in a team of 6 people.',
                projectBulletPoints: [
                    'Built solid, clear wireframes, and database structures used throughout the project as our roadmap.',
                    'Researched new technologies and libraries such as Ant.Design and the Vimeo API to ensure we had the best understanding possible.',
                ],
            },
            mentorMatch: {
                ...projectInfo.mentorMatch,
                projectDescription: 'An app designed to match School of Code bootcampers to mentors based on students career interests and mentors experience.',
                projectBulletPoints: [
                    'Created a full stack application from scratch, doing user research, ideation, and building wireframes.',
                    'Created user authentication using Auth0.'
                ],
            },
        }
    },
    warwickshireCollege: {
        name: 'Warwickshire College',
        courseTitle: 'First Diploma Art & Design',
        qualifications: 'Illustration, graphic design, fine art, and 3D art.',
    },
},

achievements: {
    talks: 'I have delivered several tech talks, most notably at the School of Code.',
    mentoring: 'To continue to give back to the tech industry I have been mentoring at School of Code, providing support to students and giving them insight into the tech world.',
},

contactDetails: {
    ...personalDetails
},

personalInterests: [
    'Drawing and Writing',
    'Reading',
    'Graphic novels',
    'Board games',
    'Tabletop RPGs',
    'Podcasts',
    'Gardening',
    'Cooking and baking',
    'Learning unique new skills'
],

}