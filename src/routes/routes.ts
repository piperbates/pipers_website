import homeIcon from '../images/icons/house-solid.svg';
import aboutIcon from '../images/icons/face-smile-solid.svg';
import codingIcon from '../images/icons/code-solid.svg';
import creativeIcon from '../images/icons/paintbrush-solid.svg';
import cvIcon from '../images/icons/book-solid.svg';

export const routes = {
    HOME: {
        src: "/",
        header: "Home",
        icon: homeIcon
    },
    ABOUT: {
        src: "/about",
        header: "About",
        icon: aboutIcon
    },
    CODING_PROJECTS: {
        src: "/coding-projects",
        header: "Coding Projects",
        icon: codingIcon
    },
    CREATIVE_PROJECTS: {
        src: "/creative-projects",
        header: "Creative Projects",
        icon: creativeIcon
    },
    ONLINE_CV: {
        src: "/online-cv",
        header: "Online CV",
        icon: cvIcon
    }
};
