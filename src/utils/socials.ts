
import githubIcon from '@/images/icons/github.svg';
import linkedInIcon from '@/images/icons/linkedin.svg';
import telephoneIcon from  '@/images/icons/phone-solid.svg';
import emailIcon from  '@/images/icons/envelope-solid.svg';
import medium from  '@/images/icons/medium.svg';



export type SocialsType = {
    name: string,
    icon: string,
    link: string
}

export const socials: SocialsType[] = [
    {
        name: "Telephone",
        icon: telephoneIcon,
        link: '07982 938 994'
    },
    {
        name: "Email",
        icon: emailIcon,
        link: 'piperbates42@gmail.com'
    },
    {
        name: "Github",
        icon: githubIcon,
        link: 'https://github.com/piperbates/'
    },
    {
        name: "LinkedIn",
        icon: linkedInIcon,
        link: 'https://www.linkedin.com/in/piperbates/'
    },
    {
        name: "Blog",
        icon: medium,
        link: 'https://medium.com/@piperbates'
    }
]