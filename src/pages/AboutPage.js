// src/pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: ${({ theme }) => theme.layout.maxWidthLarge};
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.accentPink};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.6;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>À propos de moi</SectionTitle>
        <Text>
          Je suis Debot Raphaël, un développeur web passionné par les technologies modernes. J'aime créer des
          applications web intuitives et esthétiques.
        </Text>
      </Section>
      <Section>
        <SectionTitle>Compétences</SectionTitle>
        <SkillsList>
          <SkillItem>JavaScript (ES6+)</SkillItem>
          <SkillItem>React.js</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>HTML & CSS</SkillItem>
          {/* Ajoutez d'autres compétences */}
        </SkillsList>
      </Section>
      <Section>
        <SectionTitle>Intérêts Personnels</SectionTitle>
        <Text>
          En dehors du code, je m'intéresse à :
          <ul>
            <li>Gaming : j'adore les jeux vidéo, en particulier les RPGs et les jeux indépendants.</li>
            <li>Technologie : je suis toujours à l'affût des dernières innovations technologiques.</li>
            <li>Culture asiatique : je m'intéresse à la langue, la cuisine et les traditions asiatiques.</li>
          </ul>
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;
