describe('U1.1', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display Dashboard message', () => {
    cy.get('h1').contains('Dashboard');
  });

  it('Should show commands table', () => {
    cy.wait(1000);
    cy.get('[col-id="amount"].ag-cell-value')
      .first()
      .click()
      .find('input')
      .first()
      .should('be.visible')
      .type('1557')
      .type('{enter}');
  });
});
