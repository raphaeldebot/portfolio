// src/theme.js
export default {
    colors: {
        primaryBackground: '#0f0c29', // Fond bleu foncé
        secondaryBackground: '#302b63', // Violet profond
        primaryText: '#e0e0e0', // Couleur du texte clair
        secondaryText: '#b0b0b0', // Couleur du texte secondaire
        accentPink: '#ff6b6b', // Rose doux
        accentBlue: '#5cdbd3', // Bleu doux
        accentPurple: '#a64ac9', // Accent violet
        accentGradient: 'linear-gradient(45deg, #ff6b6b, #a64ac9)', // Accent en dégradé
        cardBackground: 'rgba(255, 255, 255, 0.1)', // Pour le glassmorphisme
        border: 'rgba(255, 255, 255, 0.2)', // Bordure semi-transparente
      },
    fontSizes: {
        title: '3rem',
        subtitle: '1.75rem',
        body: '1rem',
    },
    fonts: {
        title: 'Arial, sans-serif',
        subtitle: 'Arial, sans-serif',
        body: 'Arial, sans-serif',
    },
    spacing: {
        small: '10px',
        medium: '20px',
        large: '40px',
    },
    layout: {
        maxWidth: '900px',
        maxWidthLarge: '1200px',
    },
    borderRadius: '15px',
    shadows: {
        light: '2px 2px 5px rgba(0, 0, 0, 0.15)', // ombre douce et légère
        strong: '4px 4px 10px rgba(0, 0, 0, 0.3)', // ombre légèrement plus forte
    },
};
