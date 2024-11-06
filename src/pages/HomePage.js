// src/pages/HomePage.js

import React from 'react';
import styled from 'styled-components';
import IntroSection from '../components/IntroSection';
import ProjectCard from '../components/ProjectCard';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primaryBackground}, ${({ theme }) => theme.colors.secondaryBackground});
  min-height: 100vh;
`;

const ProjectsSection = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidthLarge};
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
`;

const HomePage = () => {
  const projects = [
    {
      title: 'Projet 1 : Todo List',
      description: 'Une application pour gérer vos tâches quotidiennes, développée avec React et Styled-Components.',
      iframeUrl: 'https://raphaeldebot.github.io/todolist/',
    },
    {
      title: 'Projet 2 : Site E-commerce',
      description: 'Un site de vente en ligne développé avec React et Stripe pour les paiements sécurisés.',
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <HomePageContainer>
      <IntroSection />

      <ProjectsSection>
        <h3>Projets récents</h3>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              iframeUrl={project.iframeUrl} // Pass iframeUrl if it exists
            />
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </HomePageContainer>
  );
};

export default HomePage;
