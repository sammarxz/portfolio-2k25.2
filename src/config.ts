import type { ThemeConfig, Project } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://marxz.me/', // Site domain
    title: 'Sam Marxz', // Site title
    author: '@sammarxz', // Author name
    description: 'Site Pessoal do designer e desenvolvedor Sam Marxz', // Site description
    language: 'pt-br' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '35rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: true, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'DD-MM-YYYY', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: true, // Show reading time in posts
    toc: true, // Show table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button in code blocks
    linkCard: true // Enable link card
  }
}

// PROJECTS CONFIGURATION ////////////////////////////////////////////////////////////////////////////////
export const projects: Project[] = [
  {
    title: 'Puro Suco',
    description: 'Newsletter semanal com as principais notícias para desenvolvedores e designers.',
    image: '/puro-suco.svg',
    url: 'https://purosu.co'
  },
  {
    title: 'Bíblia 365',
    description: 'Sistema de design escalável para produtos digitais, incluindo componentes reutilizáveis e tokens de design.',
    image: '/biblia-365.svg',
    url: 'https://biblia-365.com'
  }
]
