// src/components/IntroSection.js

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const Section = styled(motion.section)`
  text-align: center;
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(10px); /* Effet de glassmorphisme */
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.strong};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.accentPink};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.accentBlue};
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
`;

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Title>Bienvenue sur mon Portfolio</Title>
      <SubTitle>
        Je suis Debot Raphaël, développeur passionné par le développement web et les technologies modernes.
      </SubTitle>
      <IntroText>
        Découvrez mes projets, compétences et contactez-moi pour des opportunités de collaboration.
      </IntroText>
    </Section>
  );
};

export default IntroSection;
