// src/pages/HomePage.js

import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(180deg, #1a1a2e, #252a34);
  min-height: 100vh;
`;


const IntroSection = styled.section`
  text-align: center;
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.strong};
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.accentPink};
  font-weight: 400; // Plus léger pour un look moderne
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.accentBlue};
  margin-top: 10px;
`;


const ProjectsSection = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidthLarge};
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;

const ProjectTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <IntroSection>
        <Title>Bienvenue sur mon Portfolio</Title>
        <SubTitle>
          Je suis Debot Raphaël, développeur passionné par le développement web et les technologies modernes.
        </SubTitle>
        <p>Découvrez mes projets, compétences et contactez-moi pour des opportunités de collaboration.</p>
      </IntroSection>

      <ProjectsSection>
        <h3>Projets récents</h3>
        <ProjectCard>
          <ProjectTitle>Projet 1 : Titre du Projet</ProjectTitle>
          <ProjectDescription>
            Brève description de ce projet. Technologies utilisées : React, Node.js, etc.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Projet 2 : Titre du Projet</ProjectTitle>
          <ProjectDescription>
            Brève description de ce projet. Technologies utilisées : React, Node.js, etc.
          </ProjectDescription>
        </ProjectCard>
      </ProjectsSection>
    </HomePageContainer>
  );
};

export default HomePage;
