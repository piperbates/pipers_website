import { creativeProjectImages } from './image-declarations/creativeProjectImages'

const { angel, brainMush, dragon, oceanView, picnic} = creativeProjectImages

export const creativeProjects = [
    {
        projectTitle: 'Angel',
        projectDescription: 'An angel',
        image: {
            source: angel,
            description: 'A digital painting of an angel'
        },
    }, {
        projectTitle: 'Brain Mush',
        projectDescription: 'Actual footage of my brain exploding',
        image: {
            source: brainMush,
            description: 'An illustration of Piper absorbing lots of information'
        },
    }, 
    {
        projectTitle: 'Dragon',
        projectDescription: 'I like drawing dragons',
        image: {
            source: dragon,
            description: 'An illustration of a dragon'
        },
    }, 
    {
        projectTitle: 'Ocean View',
        projectDescription: 'A bench looks out onto the ocean',
        image: {
            source: oceanView,
            description: 'An illustration of a bench overlooking an ocean'
        },
    }, 
    {
        projectTitle: 'Picnic',
        projectDescription: 'Two friends have a midnight snack',
        image: {
            source: picnic,
            description: 'An illustration of a bear and a bunny having a picnic at night'
        },
    }, 
    
]