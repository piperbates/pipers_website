type EducationDetailsProps = {
    facility: string,
    attended: {
        started: string,
        finished: string
        },
    subjectsStudied: string[]
}

export const educationDetails: EducationDetailsProps[] = [
    {
        facility: 'School of Code',
        attended: {
            started: 'Sept 2020',
            finished: 'Jan 2021'
        },
        subjectsStudied: [
            'React', 'Node', 'Javascript'
        ]
    }
]