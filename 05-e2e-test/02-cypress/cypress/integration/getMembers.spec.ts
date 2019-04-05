describe('Get organization members', () => {
  const baseUrl = Cypress.env('baseUrl');

  it('Can see facebook members', () => {
    const companyName = 'facebook';
    const memberName = 'acdlite';

    cy.visit(baseUrl);

    cy.get('[data-testid=companies-page]').click();
    cy.location('pathname').should('eq', '/companies');

    cy.get(`[data-testid=${companyName}-page]`).click();
    cy.location('pathname').should('eq', `/${companyName}/members`);

    cy.get(`[data-testid=${memberName}] > .header`).should(
      'have.text',
      memberName,
    );

    cy.get('[data-testid=companies-link]').click();
    cy.location('pathname').should('eq', '/companies');

    cy.get('[data-testid=home-link]').click();
    cy.location('pathname').should('eq', '/');
  });
});
