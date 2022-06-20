describe('U1.3', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display Dashboard message', () => {
    cy.get('h1').contains('Dashboard');
  });
});
