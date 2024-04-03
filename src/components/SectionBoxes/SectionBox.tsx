import { experienceTypes } from "@/utils/data/experience";
import { StyledH3, StyledH4 } from "../Text/HeaderText";
import { SectionBox } from "../CollapsableBox/SectionBox";
import { SmallText, StyledP, StyledSpan } from "../Text/StyledFonts";
import styles from './SectionBoxes.module.css';
import { projectTypes } from "@/utils/data/projects";
import Image from "next/image";
import Link from "next/link";

export const ExperienceBox = ({ company }: { company: experienceTypes }) => {
    return (
        <SectionBox titleSmall title={company.company}>
            <div className={styles.experienceBox}>
                <StyledH4>{company.jobTitle}</StyledH4>
                <SmallText>
                    {`${company.duration.started} - ${company.duration.ended}`}
                </SmallText>
                <ul className={styles.techStack}>
                    {company.techStack.map((tech, key) => {
                        return (
                            <li key={key}><StyledSpan>{tech}</StyledSpan></li>);
                    })}
                </ul>

                <ul className={styles.jobDescription}>
                    {company.jobDescription.map((description, key) => {
                        return (
                            <li key={key}><StyledP>{description}</StyledP></li>
                        );
                    }
                    )}
                </ul>

                <StyledP>
                    Reason for leaving:
                </StyledP>
                <StyledP>
                    {company.reasonForLeaving}
                </StyledP>
            </div>
        </SectionBox>
    );
};

export const ProjectBox = ({ project }: { project: projectTypes }) => {
    return (
        <SectionBox titleSmall title={project.projectTitle}>
            <div className={styles.experienceBox}>
                <div className={styles.projectHeader}><Image
                    alt={project.image.description}
                    src={project.image.source}
                    width="100"
                    height="100"
                    style={{ borderRadius: 50, margin: 10 }}
                />
                    <ul className={styles.techStack}>
                        {project.techStack.map(
                            (tech, key) => <li key={key}>{tech.name}</li>)}
                    </ul>
                </div>
                <StyledP>{project.projectDescription}</StyledP>
                <div>
                    <ul>
                        <li>
                            <Link
                                href={project.links.githubLink}
                                target="_blank">View on Github
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={project.links.liveLink}
                                target="_blank">View Live
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </SectionBox>
    );
};