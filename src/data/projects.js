import drawinggame from "../project-img/drawinggame.png";
import pkmcard from "../project-img/pkmcard.png"
import rps from "../project-img/rps.png";
import patricksBookcase from "../project-img/patricks-bookcase.png";
import sassyElephants from "../project-img/sassy-elephants.png";
import recap from "../project-img/recap.png";
import arteveryhour from "../project-img/arteveryhour.png";
import purely from "../project-img/purely.png";


const tsiSize = "fa-5x"

const tsi = { //tsi = tech stack icons, the import code for the font awesome icons
  react: iconMaker("react"),
  javaScript: iconMaker("js-square"),
  html: iconMaker("html5"),
  css: iconMaker("css3-alt"),
  nodeJs: iconMaker("node"),
  vimeoApi: iconMaker("vimeo"),
  twitter: iconMaker("twitter")
}

function iconMaker(name){
  return `fab fa-${name} ${tsiSize}`
}

export let projectArr = [
  {
    title: "We Love Purely",
    src: purely,
    desc: "We Love Purely relaunched their website using Shopify and wanted a team of people to develop their site. I was personally responsible for managing the site DNS to help with a successful launch, I learnt Liquid on the job and used it alongside my team mates to create cusom sections, templates, and applications in order to deliver a fantastic web presence for Purely. We also developed a Standard Operating Procedure for the Purely team so they were able to fully manage and customise their website without touching code after our involvement.",
    link: "",
    liveLink: "https://welovepurely.com/",
    techStack: [tsi.html, tsi.css]
  },
  {
    title: "re:cap",
    src: recap,
    desc: "Created for School of Codes final project, we were given the brief 'How can School of Code better deliver lecture resources to its bootcampers?' Armed with nothing more than this sentence, my 6-person-team worked for 4 weeks to develop a media sharing platform we dubbed re:cap. We worked using Agile methodologies throughout,  in particular the Scrum-Ban method, frequently reporting back to our client for feedback and testing.",
    link: "https://github.com/piperbates/front-end-final-project-code-goblins",
    liveLink: "https://www.youtube.com/watch?v=yQWYeDRapBc",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css, tsi.vimeoApi]
  },
  {
    title: "Patricks Bookcase",
    src: patricksBookcase,
    desc: "A personalised app to organise a users book collection. Created as a personal project during the School of Code as a way to help my partner organise his extensive yet unorganised library, I have plans to turn this into a much larger scale app with multiple users who have multiple bookcases. Started building in Nov 2020.",
    link: "https://github.com/piperbates/patricks-bookcase-front-end",
    liveLink: "https://patricks-bookcase.netlify.app",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css]
  },
  {
    title: "MentorMatch",
    src: sassyElephants,
    desc:
      "A project created in a week long hackathon during School of Code, in a team of 5. Designed to better match School of Code mentors with students, as the previous matching system is randomised. We wanted to create a more personal experience, matching people based on personality, job interests / experience, and hobbies. Created in November 2020.",
    link: "https://github.com/piperbates/front-end-project-week-thesassyelephants",
    liveLink: "",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css]
  },

  {
    title: "Art Every Hour",
    src: arteveryhour,
    desc:
      "My first Twitter bot. Created to help Twitter users find more artists across the platform without having to search constantly. Uses the Twitter API to search for recent hashtags containing #art, and retweets the most recent, once an hour. Deployed on heroku. Created in January 2021 as a side project to better understand Node.js after the School of Code.",
    link: "https://github.com/piperbates/ArtEveryHourBot",
    liveLink: "https://twitter.com/ArtEveryHour",
    techStack: [tsi.javaScript, tsi.nodeJs, tsi.twitter]
  },

  {
    title: "Drawing App",
    src: drawinggame,
    desc: "A simple drawing game made with canvas and javascript. Built as a personal project in Nov 2020 during my time on the School of Code to better understand canvas and Javascript. I have plans to turn this into a collaborative drawing game using webhooks in the future.",
    link: "https://github.com/piperbates/drawing-app",
    liveLink: "https://piperbates.github.io/drawing-app/",
    techStack: [tsi.javaScript, tsi.html, tsi.css]
  },

  {
    title: "Pokemon Generator",
    src: pkmcard,
    desc: "A random Pokemon card generator, created with PokeAPI and JS. Built in Sept 2020 for a School of Code hackathon. My first project using an API, where I developed a real love for RESTful APIs and their potential.",
    link: "https://github.com/piperbates/pokemon-card-generator",
    liveLink: "https://piperbates.github.io/pokemon-card-generator/",
    techStack: [tsi.javaScript, tsi.html]
  },
  {
    title: "Rock Paper Scissors",
    src: rps,
    desc:
      "The classic game, made with vanilla JS. My first Javascript project, built in Sept 2020 in a two person hackathon during the School of Code, then refactored on day 1 of the 100 days of code challenge on 11/03/2021.",
    link: "https://github.com/piperbates/rock-paper-scissors-refactored",
    liveLink: "https://piperbates.github.io/rock-paper-scissors-refactored/",
    techStack: [tsi.javaScript, tsi.html, tsi.css]
  },
];

export default projectArr;
