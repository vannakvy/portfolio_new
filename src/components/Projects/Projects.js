import React from 'react';

import {Button, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {SiSymantec} from 'react-icons/si';
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title><SiSymantec/> {p.title}</HeaderThree>
              {/* <Hr /> */}
            </TitleContent>
            <CardInfo className="cartleContent>d-info">{p.description}</CardInfo>
            <div>
              <Button>See Detail</Button>
              {/* <TitleContent>Stack</TitleContent> */}
              {/* <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList> */}
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;