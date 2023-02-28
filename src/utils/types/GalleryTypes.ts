import { TechStackType } from "../techStack"

export type GalleryType = {
        title: string,
        description: string,
        imageSrc: string,
        imageAlt: string,
        githubLink?: string,
        liveLink?:string
        techStack?: TechStackType[]
}