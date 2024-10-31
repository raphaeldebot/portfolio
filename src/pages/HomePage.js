// src/pages/HomePage.js

import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const IntroSection = styled.section`
  text-align: center;
  max-width: 800px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-top: 10px;
`;

const ProjectsSection = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 40px 0;
`;

const ProjectCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

// Le composant HomePage qui contient la structure de base de la page d'accueil
const HomePage = () => {
  return (
    <HomePageContainer>
      {/* Section d'introduction */}
      <IntroSection>
        <Title>Bienvenue sur mon Portfolio</Title>
        <SubTitle>
          Je suis Debot Raphaël, développeur passionné par le développement web et les technologies modernes.
        </SubTitle>
        <p>
          Découvrez mes projets, compétences et contactez-moi pour des opportunités de collaboration.
        </p>
      </IntroSection>

      {/* Section des projets récents */}
      <ProjectsSection>
        <h3>Projets récents</h3>
        {/* Exemple de cartes de projets */}
        <ProjectCard>
          <h4>Projet 1 : Titre du Projet</h4>
          <p>Brève description de ce projet. Technologies utilisées : React, Node.js, etc.</p>
        </ProjectCard>

        <ProjectCard>
          <h4>Projet 2 : Titre du Projet</h4>
          <p>Brève description de ce projet. Technologies utilisées : React, Node.js, etc.</p>
        </ProjectCard>
      </ProjectsSection>
    </HomePageContainer>
  );
};

export default HomePage;
