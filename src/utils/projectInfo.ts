import { techStack } from './techStack';
import { codingProjectImages } from './image-declarations/codingProjectImages';

const { 
    bookOrchard, 
    purely, 
    recap, 
    artEveryHour, 
    drawingGame, 
    pokemonGen, 
    rps, 
    pokemonQuiz 
} = codingProjectImages;

export const projectInfo = {

// All Pokemon Quiz
pokemonQuiz: {
    projectTitle: 'Pokemon Quiz',
    projectDescription: 'inspired off the Sporcle 151 Pokemon Quiz, this is a fun memory game to see if you an name all Pokémon in 15 minutes. I have plans to include a scoreboard (and to add the other Pokemon generations in, of course).',
    image: {
        source: pokemonQuiz,
        description: 'Screenshot of the Pokemon Quiz'
    },
    techStack: [
        techStack.react,
        techStack.typescript,
    ],
    links: {
        liveLink: 'https://pokemon-151-game.netlify.app/',
        githubLink: 'https://github.com/piperbates/pokemon-151'
    }
}, 

// PURELY
purely: {
    projectTitle: 'We Love Purely',
    projectDescription: 'We Love Purely relaunched their website using Shopify and wanted a team of people to develop their site. I was personally responsible for managing the site DNS to help with a successful launch, I learnt Liquid on the job and used it alongside my team mates to create cusom sections, templates, and applications in order to deliver a fantastic web presence for Purely. We also developed a Standard Operating Procedure for the Purely team so they were able to fully manage and customise their website without touching code after our involvement.',
    image: {
        source: purely,
        description: 'The logo for We Love Purely'
    },
    techStack: [
        techStack.shopify,
        techStack.html,
        techStack.css            
    ],
    links: {
        liveLink: 'https://welovepurely.com/',
        githubLink: ''
    }
}, 

// ART EVERY HOUR
artEveryHour: {
    projectTitle: 'Art Every Hour',
    projectDescription: 'A Twitter bot designed to repost tweets with the #art hashtag every hour. Sadly no longer functioning due to Twitters new rules :(',
    image: {
        source: artEveryHour,
        description: 'A screnshot of the Twitter bot profile page'
    },
    techStack: [
        techStack.javascript,
        techStack.node,
        techStack.twitter,
    ],
    links: {
        liveLink: 'https://twitter.com/ArtEveryHour',
        githubLink: 'https://github.com/piperbates/ArtEveryHourBot'
    }
}, 

// RECAP
recap: {
    projectTitle: 're:cap',
    projectDescription: 'Created for School of Codes final project, we were given the brief \'How can School of Code better deliver lecture resources to its bootcampers?\' Armed with nothing more than this sentence, my 6-person-team worked for 4 weeks to develop a media sharing platform we dubbed re:cap. We worked using Agile methodologies throughout, in particular the Scrum-Ban method, frequently reporting back to our client for feedback and testing. Created December 2020,',
    image: {
        source: recap,
        description: 'A screenshot of the app re:cap'
    },
    techStack: [
        techStack.react,
        techStack.javascript,
        techStack.html,
        techStack.css,
        techStack.node,
        techStack.vimeo         
    ],
    links: {
        liveLink: '',
        githubLink: 'https://github.com/piperbates/front-end-final-project-code-goblins'
    }
}, 

// BOOK ORCHARD
bookOrchard: {
    projectTitle: 'Book Orchard',
    projectDescription: 'A book categoration app designed for book hoarders and collectors. This started life as a personal project to help my partner organise their extensive library, but is evolving into a wider scale application for multiple users to catalogue their book collection. This github repo currently showcases the personal project but will be linked to the project repo once there is more to show!',
    image: {
        source: bookOrchard,
        description: 'A screenshot of the app Book Orchard. Currently in development. Originally created as a small scale app to help my partner organise her extensive (and unorganised) book collection, but soon discovered many other people in the same boat!'
    },
    techStack: [
        techStack.react,
        techStack.javascript,
        techStack.html,
        techStack.css,
        techStack.node,
    ],
    links: {
        liveLink: '',
        githubLink: 'https://github.com/piperbates/back-end-patricks-bookcase'
    }
}, 

// MENTOR MATCH
mentorMatch: {
    projectTitle: 'Mentor Match',
    projectDescription: 'A project created in a week long hackathon during School of Code, in a team of 5. Designed to better match School of Code mentors with students, as the previous matching system is randomised. We wanted to create a more personal experience, matching people based on personality, job interests / experience, and hobbies. Created in November 2020.',
    image: {
        source: recap,
        description: 'A screenshot of the app Mentor Match'
    },
    techStack: [
        techStack.react,
        techStack.javascript,
        techStack.html,
        techStack.css,
        techStack.node,
    ],
    links: {
        liveLink: '',
        githubLink: 'https://github.com/piperbates/front-end-project-week-thesassyelephants'
    }
},

// DRAWING APP
drawingApp: {
    projectTitle: 'Drawing App',
    projectDescription: 'A simple drawing game made with canvas and javascript. Built as a personal project in Nov 2020 during my time on the School of Code to better understand canvas and Javascript. I have plans to turn this into a collaborative drawing game using webhooks in the future.',
    image: {
        source: drawingGame,
        description: 'A screenshot of the drawing app game'
    },
    techStack: [
        techStack.javascript,
        techStack.html,
        techStack.css,
    ],
    links: {
        liveLink: 'https://piperbates.github.io/drawing-app/',
        githubLink: 'https://github.com/piperbates/drawing-app'
    }
}, 

// Pokemon Generator
pokemonGenerator: {
    projectTitle: 'Pokemon Card Generator',
    projectDescription: 'A random Pokemon card generator, created with PokeAPI and JS. Built in Sept 2020 for a School of Code hackathon. My first project using an API, where I developed a real love for RESTful APIs and their potential.',
    image: {
        source: pokemonGen,
        description: 'Screenshot of the Pokemon Card Generator'
    },
    techStack: [
        techStack.html,
        techStack.css,
        techStack.javascript,
    ],
    links: {
        liveLink: 'https://piperbates.github.io/pokemon-card-generator/',
        githubLink: 'https://github.com/piperbates/pokemon-card-generator'
    }
}, 

// Rock Paper Scissors
rockPaperScissors: {
    projectTitle: 'Rock Paper Scissors',
    projectDescription: 'The classic game, made with vanilla JS. My first Javascript project, built in Sept 2020 in a two person hackathon during the School of Code, then refactored on day 1 of the 100 days of code challenge on 11/03/2021.',
    image: {
        source: rps,
        description: 'Screenshot of the rock paper scissors game'
    },
    techStack: [
        techStack.javascript,
        techStack.html,
        techStack.css
    ],
    links: {
        liveLink: 'https://piperbates.github.io/rock-paper-scissors-refactored/',
        githubLink: 'https://github.com/piperbates/rock-paper-scissors-refactored'
    }
}, 

// {
//     projectTitle: '',
//     projectDescription: '',
//     image: {
//         source: ,
//         description: ''
//     },
//     techStack: [
//         techStack.javascript,
//     ],
//     links: {
//         liveLink: '',
//         githubLink: ''
//     }
// }, 
}