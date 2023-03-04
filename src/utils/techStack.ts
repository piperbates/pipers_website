import { techStackImages } from './image-declarations/techStackImages';

const { react, typescript, redux, html, css, javascript, shopify, node, twitter, vimeo, reactAdmin, mongo, aws, antDesign } = techStackImages

export type TechStackType = {
    name: string,
    logo: string
}

export const techStack = {
    react: {
        name: 'React',
        logo: react.logo.src,
    },
    typescript: {
        name: 'Typescript',
        logo: typescript.logo.src,
    },
    redux: {
        name: 'Redux',
        logo: redux.logo.src
    },
    mongoDB: {
        name: 'Mongo DB',
        logo: mongo.logo.src
    },
    aws: {
        name: 'AWS',
        logo: aws.logo.src
    },
    reactAdmin: {
        name: 'React Admin',
        logo: reactAdmin.logo.src
    },
    shopify: {
        name: 'Shopify',
        logo: shopify.logo.src
    },
    html: {
        name: 'HTML',
        logo: html.logo.src
    },
    css: {
        name: 'CSS',
        logo: css.logo.src
    },
    javascript: {
        name: 'JavaScript',
        logo: javascript.logo.src
    },
    node: {
        name: 'Node.JS',
        logo: node.logo.src
    },
    vimeo: {
        name: 'VimeoAPI',
        logo: vimeo.logo.src
    },
    twitter: {
        name: 'Twitter API',
        logo: twitter.logo.src
    },
    antDesign: {
        name: 'Ant Design',
        logo: antDesign.logo.src
    }
}