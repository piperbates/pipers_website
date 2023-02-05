import React from 'react';
import './Page.scss'
import { PageValues, PageTitles } from '../../PageValues';

export type PageProps = {
    name: PageValues;
    image: string;
    imageDescription: string;
    children: JSX.Element;
}

export const Page = (props: PageProps) => {

    const {children, name, image, imageDescription} = props

    const titleFetcher = () => {
        switch(name) {
            case PageValues.TOP:
                return PageTitles.TOP
            case PageValues.ABOUT:
                return PageTitles.ABOUT
            case PageValues.PROJECTS:
                return PageTitles.PROJECTS
            case PageValues.CREATIVE:
                return PageTitles.CREATIVE
        }
    }

    return (
    <div className="page" id={name}>
        <div className="page-header">
            <h1>{titleFetcher()}</h1>
            <img src={image} alt={imageDescription} />
        </div>
            <article className='page-content'>
                {children}
            </article>
        <div className="seperator"></div>
    </div>)
}