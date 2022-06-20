import { getRandomNumber } from '../support/app.po';

describe('U1.2', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display Dashboard message', () => {
    cy.get('h1').contains('Dashboard');
  });

  it('Should update an order amount and detect chart changes', () => {
    cy.wait(1000);
    cy.get('.apexcharts-canvas')
      .invoke('html')
      .then((apexChartContentBefore) => {
        cy.get('[col-id="amount"].ag-cell-value')
          .first()
          .click()
          .find('input')
          .first()
          .should('be.visible')
          .type(getRandomNumber())
          .type('{enter}');

        cy.wait(2000);

        cy.get('.apexcharts-canvas')
          .invoke('html')
          .then((apexChartContentAfter) => {
            expect(apexChartContentBefore).not.equal(apexChartContentAfter);
          });
      });
  });
});
