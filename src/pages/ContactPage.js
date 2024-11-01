// src/pages/ContactPage.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.accentPink};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.primaryText};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accentPink};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accentPink};
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.accentGradient};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.body};

  &:hover {
    opacity: 0.9;
  }
`;

const SocialLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  margin: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <SectionTitle>Contactez-moi</SectionTitle>
      <ContactForm>
        <Input type="text" placeholder="Votre nom" required />
        <Input type="email" placeholder="Votre email" required />
        <TextArea rows="5" placeholder="Votre message" required />
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </ContactForm>
      <SocialLinks>
        <SocialLink href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          Twitter
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
        {/* Ajoutez d'autres liens sociaux */}
      </SocialLinks>
    </ContactContainer>
  );
};

export default ContactPage;
