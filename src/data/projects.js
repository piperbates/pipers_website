import drawinggame from "../project-img/drawinggame.png";
import pkmcard from "../project-img/pkmcard.png"
import rps from "../project-img/rps.png";
import patricksBookcase from "../project-img/patricks-bookcase.png";
import sassyElephants from "../project-img/sassy-elephants.png"
import recap from "../project-img/recap.png"
import arteveryhour from "../project-img/arteveryhour.png"


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
    title: "re:cap",
    src: recap,
    desc: "Created for School of Codes final project, we were given the brief 'How can School of Code better deliver lecture resources to its bootcampers?' Armed with nothing more than this sentence, my 6-person-team worked for 4 weeks to develop a media sharing platform we dubbed re:cap.",
    link: "https://github.com/piperbates/front-end-final-project-code-goblins",
    // liveLink: "",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css, tsi.vimeoApi]
  },
  {
    title: "Patricks Bookcase",
    src: patricksBookcase,
    desc: "A personalised app to organise a users book collection. Started building in Nov 2020.",
    link: "https://github.com/piperbates/patricks-bookcase-front-end",
    liveLink: "https://patricks-bookcase.netlify.app",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css]
  },
  {
    title: "MentorMatch",
    src: sassyElephants,
    desc:
      "A project created in a week long hackathon during School of Code, in a team of 5. Designed to better match School of Code mentors with students. Created in November.",
    link: "https://github.com/piperbates/front-end-project-week-thesassyelephants",
    liveLink: "",
    techStack: [tsi.react, tsi.javaScript, tsi.nodeJs, tsi.css]
  },

  {
    title: "Art Every Hour",
    src: arteveryhour,
    desc:
      "My first Twitter bot. Uses the Twitter API to search for recent hashtags containing #art, and retweets the most recent, once an hour. Deployed on heroku.",
    link: "https://github.com/piperbates/ArtEveryHourBot",
    liveLink: "https://twitter.com/ArtEveryHour",
    techStack: [tsi.javaScript, tsi.nodeJs, tsi.twitter]
  },

  {
    title: "Drawing App",
    src: drawinggame,
    desc: "A simple drawing game made with canvas and javascript. Built in Nov 2020.",
    link: "https://github.com/piperbates/drawing-app",
    liveLink: "https://piperbates.github.io/drawing-app/",
    techStack: [tsi.javaScript, tsi.html, tsi.css]
  },

  {
    title: "Pokemon Card Generator",
    src: pkmcard,
    desc: "A random Pokemon card generator, created with PokeAPI and JS. Built in Sept 2020.",
    link: "https://github.com/piperbates/pokemon-card-generator",
    liveLink: "https://piperbates.github.io/pokemon-card-generator/",
    techStack: [tsi.javaScript, tsi.html]
  },
  {
    title: "Rock Paper Scissors",
    src: rps,
    desc:
      "The classic game, made with vanilla JS. My first Javascript project. Built in Sept 2020",
    link: "https://github.com/piperbates/rps",
    liveLink: "",
    techStack: [tsi.javaScript, tsi.html, tsi.css]
  },
];

export default projectArr;
