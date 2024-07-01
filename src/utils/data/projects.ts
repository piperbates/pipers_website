/* eslint-disable max-len */
import pipersArtWebsite 
    from '../../assets/codingProjectImages/pip-art-site.png';
import pokemonQuiz from '../../assets/codingProjectImages/pkmn-quiz.png';
import purely from '../../assets/codingProjectImages/purely.png';
import artEveryHour from '../../assets/codingProjectImages/artEveryHour.png';
import recap from '../../assets/codingProjectImages/recap.png';
import bookOrchard from '../../assets/codingProjectImages/bookOrchard.png';
import drawingGame from '../../assets/codingProjectImages/drawinggame.png';
import touchlineTech from '../../assets/codingProjectImages/tt-logo.png';

import { TechStackType, techStack } from '../techStack';
import { Url } from 'next/dist/shared/lib/router/router';

export type projectTypes = {
    projectTitle: string,
    projectDescription: string,
    image: {
        source: string,
        description: string
    },
    techStack: TechStackType[],
    links: {
        liveLink?: Url,
        githubLink?: Url
    }
}



export const projects: projectTypes[] = [


    // Touchline Tech
    {
        projectTitle: 'Touchline Tech',
        projectDescription: 'A startup helping grassroots football clubs connect to their fanbase and get sponsors. This is an entirely volunteer run project as the business has had some serious financial issues due to previous development teams causing huge set backs. I brought more developers onto the project and have been acting as the front end tech lead since 2022.',
        image: {
            source: touchlineTech.src,
            description: 'The touchline tech logo'
        },
        techStack: [
            techStack.react,
            techStack.typescript
        ],
        links: {
        }
    },

    // Piper Art website
    {
        projectTitle: 'My Art Portfolio',
        projectDescription: 'My art portfolio',
        image: {
            source: pipersArtWebsite.src,
            description: 'Screenshot of Pipers Art Website'
        },
        techStack: [
            techStack.react,
            techStack.typescript
        ],
        links: {
            liveLink: 'http://www.piperstrange.co.uk',
            githubLink: 'https://github.com/piperbates/art_website'
        }
    },
    
    // All Pokemon Quiz
    {
        projectTitle: 'Pokemon Quiz',
        projectDescription: 'inspired off the Sporcle 151 Pokemon Quiz, this is a fun memory game to see if you an name all Pokémon in 15 minutes. I have plans to include a scoreboard (and to add the other Pokemon generations in, of course).',
        image: {
            source: pokemonQuiz.src,
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
    {
        projectTitle: 'We Love Purely',
        projectDescription: 'We Love Purely relaunched their website using Shopify and wanted a team of people to develop their site. I was personally responsible for managing the site DNS to help with a successful launch, I learnt Liquid on the job and used it alongside my team mates to create cusom sections, templates, and applications in order to deliver a fantastic web presence for Purely. We also developed a Standard Operating Procedure for the Purely team so they were able to fully manage and customise their website without touching code after our involvement.',
        image: {
            source: purely.src,
            description: 'The logo for We Love Purely'
        },
        techStack: [
            techStack.shopify,
            techStack.html,
            techStack.css            
        ],
        links: {
            liveLink: 'https://welovepurely.com/',
        }
    }, 
    
    // ART EVERY HOUR
    {
        projectTitle: 'Art Every Hour',
        projectDescription: 'A Twitter bot designed to repost tweets with the #art hashtag every hour. Sadly no longer functioning due to Twitters new rules :(',
        image: {
            source: artEveryHour.src,
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
    {
        projectTitle: 're:cap',
        projectDescription: 'Created for School of Codes final project, we were given the brief \'How can School of Code better deliver lecture resources to its bootcampers?\' Armed with nothing more than this sentence, my 6-person-team worked for 4 weeks to develop a media sharing platform we dubbed re:cap. We worked using Agile methodologies throughout, in particular the Scrum-Ban method, frequently reporting back to our client for feedback and testing. Created December 2020,',
        image: {
            source: recap.src,
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
    {
        projectTitle: 'Book Orchard',
        projectDescription: 'A book categoration app designed for book hoarders and collectors. This started life as a personal project to help my partner organise their extensive library, but is evolving into a wider scale application for multiple users to catalogue their book collection. This github repo currently showcases the personal project but will be linked to the project repo once there is more to show!',
        image: {
            source: bookOrchard.src,
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
    
    // DRAWING APP
    {
        projectTitle: 'Drawing App',
        projectDescription: 'A simple drawing game made with canvas and javascript. Built as a personal project in Nov 2020 during my time on the School of Code to better understand canvas and Javascript. I have plans to turn this into a collaborative drawing game using webhooks in the future.',
        image: {
            source: drawingGame.src,
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
];