type SectionProps = {
    headerText: string,
    children: React.ReactElement
}

export default function Section ({children, headerText}: SectionProps) {
    return <div>
        <h1>{headerText}</h1>
        {children}
    </div>
}