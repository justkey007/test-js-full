export const getGreeting = () => cy.get('h1');

export const getRandomNumber = () =>
  Math.floor(Math.random() * 1000).toString();
