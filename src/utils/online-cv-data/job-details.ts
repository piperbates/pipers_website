import { techStack, TechStackType } from "../techStack"

type JobDetailType = {
    company: string,
    jobTitle: string,
    techStack: TechStackType[],
    started: string,
    finished: string | null,
    jobDescription: string
    keyContributions: string[]
}

export const jobDetails: JobDetailType[] = [
    // SteelBuy
    {
        company: 'SteelBuy',
        jobTitle: 'Frontend Engineer',
        techStack: [techStack.react, techStack.reactAdmin, techStack.redux, techStack.typescript],
        started: 'Sept 2022',
        finished: null,
        jobDescription: 'As one of the first developers brought onto the project shortly before launch one of my key responsibilities has been to quickly pick up the codebase in order to transition away from the work that had primarily been done by contractors prior to my arrival. I worked closely with the contractors to fully integrate myself into the workflow and was instrumental in delivering key projects such as taxonomy of new products, and sitewide responsiveness.',
        keyContributions: [
            'Led the development of the app responsiveness.',
            'Led the way for the documentation to be a part of our story process and included within our definition of done.',
            'Supported the product team wherever possible by giving estimations and balancing priorities while also ensuring our own tech debt was managed',
            'Investigated new technologies with the key to refactor major aspects of the codebase and was involved in critical discussions about this refactoring.',
            'Met with customers and external industry experts to fully understand the industry and get a better idea of what was needed across the platform.',
            'Had regular meetings with colleagues across the company to discuss any pain points with the platform that we could potentially improve.',
            'Fought for the inclusion of accessibility best practices on the platform.',
            'Developed some of the first rounds of testing for the front end of the project and encouraged these tests to be a part of our Definition of Done.'
        ],
    },

    //Bamboo Auctions
    {
        company: 'Bamboo Auctions',
        jobTitle: 'Junior Software Engineer',
        techStack: [techStack.react, techStack.redux, techStack.typescript, techStack.node, techStack.mongoDB],
        started: 'May 2022',
        finished: 'Aug 2022',
        jobDescription: 'I was brought onto the tech team at Bamboo Auctions due to my experience working in agile teams. My colleagues were not familiar with this methodology and so I was able to provide insight and contribute very quickly to changing the entire process of the tech team. I have been a key player in the development of an entirely new platform, discussing our ways of working, contributing feedback on the design and structure of the platform, and building it up from scratch.',
        keyContributions: [
            'Pushed for us to use Agile, to have regular stand ups, retrospectives, and sprints. This massively benefitted our productivity and helped us manage our teams expectations with the rest of the company, and stopped us from picking up ad-hoc tasks without direction',
            'Created the error handling process, which was previously non-existant and being ignored - this helped us understand, document, and fix the errors while also tidying up what errors we were being made aware of.',
            'Was involved in the beginning of the new platform, using a Monorepo pattern and Storybook. I provided important insight into how we should work on this new platform. Learnt Storybook and Redux Toolkit for this project and started to build components with this system.',
            'Triaging support cases, bugs, or other issues within our codebase that could then be raised and resolved using Jira',
            'Took on high level design and investigation tasks',
            'Pushed for improvements to accessibility standards and React best practices'
        ]
    },

    // Click Travel
    {
        company: 'Click Travel',
        jobTitle: 'Junior Software Engineer',
        techStack: [techStack.react, techStack.redux, techStack.typescript, techStack.node, techStack.mongoDB, techStack.aws],
        started: 'May 2021',
        finished: 'May 2022',
        jobDescription: 'I was brought onto this team due to my knowledge of React and have been able to provide the team with insight and awareness into React best practices while still expanding my own knowledge into new technologies.',
        keyContributions: [
            'Created an easy to replicate template for apps within our MFE pipeline with documentation so newcomers to the project could quickly create new pages',
            'Developed multiple React components to align with current Angular developments, ensuring the end result was identical for consistency',
            'Pushed for improvements to accessibility standards and React best practices',
            'Intergrated myself into the team quickly by writing unit tests in Jest',
            'Set up SSO for customers at their request',
            'Created a new feature for internal use that prevented customer support agents making bookings for blocked hotels. Saved a considerable amount of customer supports time and ensured less complaints by customers',
            'Managed multiple support tickets that led to discovering bugs or other issues within our codebase that could then be raised and resolved',
            'Resolved a number of issues and bugs within the codebase'
        ]
    }
]