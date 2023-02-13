import { techStackImages } from "../images/techStackImages";

const { react, typescript, redux, html, css, javascript, shopify, node, twitter, vimeo, reactAdmin, mongo, aws, antDesign } = techStackImages

export type TechStackType = {
    name: string,
    logo: string
}

export const techStack = {
    react: {
        name: 'React',
        logo: react.logo,
    },
    typescript: {
        name: 'Typescript',
        logo: typescript.logo,
    },
    redux: {
        name: 'Redux',
        logo: redux.logo
    },
    mongoDB: {
        name: 'Mongo DB',
        logo: mongo.logo
    },
    aws: {
        name: 'AWS',
        logo: aws.logo
    },
    reactAdmin: {
        name: 'React Admin',
        logo: reactAdmin.logo
    },
    shopify: {
        name: 'Shopify',
        logo: shopify.logo
    },
    html: {
        name: 'HTML',
        logo: html.logo
    },
    css: {
        name: 'CSS',
        logo: css.logo
    },
    javascript: {
        name: 'JavaScript',
        logo: javascript.logo
    },
    node: {
        name: 'Node.JS',
        logo: node.logo
    },
    vimeo: {
        name: 'VimeoAPI',
        logo: vimeo.logo
    },
    twitter: {
        name: 'Twitter API',
        logo: twitter.logo
    },
    antDesign: {
        name: 'Ant Design',
        logo: antDesign.logo
    }
}