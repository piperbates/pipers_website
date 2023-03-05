import OnlineCvLayout from "@/components/Layouts/OnlineCvLayout";
import Section from "@/components/OnlineCv/Section";
import styles from '@/styles/OnlineCv.module.css';

export default function OnlineCV () {
    return (
    <OnlineCvLayout>
        <Section headerText="Piper Bates">
            <div className={styles.onlineCvPersonalStatement}>
                <p>
                    Personal Statement
                </p>
            </div>
        </Section>

        <Section headerText="Tech Stack">
            <p>Hello</p>
        </Section>

        <Section headerText="Work Experience">
           <p>Work exp</p>
        </Section>

        <Section headerText="Education">
           <p>Education</p>
        </Section>

        <Section headerText="Notable Achievements">
           <p>Notable Achievements</p>
        </Section>

    </OnlineCvLayout>)

}