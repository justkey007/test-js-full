describe('U1.0', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display Dashboard message', () => {
    cy.get('h1').contains('Dashboard');
  });

  it('Should show the turnover evolution curve', () => {
    cy.get('.apexcharts-canvas').should('be.visible');
  });

  it('Should show commands table', () => {
    cy.get('.ag-center-cols-container')
      .find('.ag-row')
      .should('be.visible')
      .should('have.length.greaterThan', 15);
  });
});
