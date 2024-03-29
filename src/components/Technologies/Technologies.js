import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
  
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js And Electron.js<br />
            And Angular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
  
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Express And Java, Spring Boot<br />
            And Django 
          </ListParagraph>
        </ListContainer>
      </ListItem>
  
       <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Base</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, PostgreSQL And Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>
  
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
