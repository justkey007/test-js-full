describe('U1.3', () => {
  beforeEach(() => {
    cy.visit('/timeout');
  });

  it('Should display error message after request timeout', () => {
    cy.wait(7000);
    cy.get('body').contains('Le service est momentanément indisponible');
  });
});
