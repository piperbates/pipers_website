import { StyledP } from "@/components/Text/StyledFonts";
import { MainLayout } from "@/components/Layouts/MainLayout";
import { SectionBox } from "@/components/CollapsableBox/SectionBox";
import { faq } from "@/utils/data/faq";
import { experience } from "@/utils/data/experience";
import {
  ExperienceBox,
  ProjectBox
} from "@/components/SectionBoxes/SectionBox";
import { about } from "@/utils/data/about";
import { projects } from "@/utils/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <SectionBox title="About" openOnLoad>
        {about.map((paragraph, key) =>
          <StyledP key={key}>
            {paragraph}
          </StyledP>)}
      </SectionBox>

      <SectionBox title="Experience">
        {
          experience.map((item, key) =>
            <ExperienceBox company={item} key={key} />
          )}
      </SectionBox>

      <SectionBox title="Interview Questions">
        {
          faq.map((item, key) => {
            return (
              <SectionBox key={key} titleSmall title={item.question}>
                {item.answer.map((answer, key) =>
                  <StyledP
                    key={key}>
                    {answer}
                  </StyledP>
                )}
              </SectionBox>);
          })
        }
      </SectionBox>

      <SectionBox title="Projects">
        {projects.map(
          (project, key) =>
            <ProjectBox project={project} key={key} />
        )}
      </SectionBox>
    </MainLayout>
  );
}
