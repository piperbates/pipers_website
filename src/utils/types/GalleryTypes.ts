import { TechStackType } from "../techStack"

export type GalleryType = {
    header: string,
    img: string,
    githubLink?: string,
    liveLink?: string,
    techStack?: TechStackType[]
}