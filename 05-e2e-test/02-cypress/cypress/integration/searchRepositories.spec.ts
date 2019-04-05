describe('Search repositories', () => {
  const baseUrl = Cypress.env('baseUrl');

  it('Can search typed repositories', () => {
    const repo1 = 'redux';
    const repo2 = 'emotion';

    cy.visit(baseUrl);

    cy.get('[data-testid=search-page]').click();
    cy.location('pathname').should('eq', '/repositories/search');

    cy.get('[data-testid=q-input] > input').type(repo1);
    cy.get('[data-testid=search-button]').click();
    cy.get(`[data-testid=${repo1}] > .content > .header`).should(
      'have.text',
      repo1,
    );

    cy.get('[data-testid=q-input] > input')
      .clear()
      .type(repo2);
    cy.get('[data-testid=sort-select]').click();
    cy.get('[data-testid=stars]').click();
    cy.get(`[data-testid=${repo2}] > .content > .header`).should(
      'have.text',
      repo2,
    );

    cy.get('[data-testid=home-link]').click();
    cy.location('pathname').should('eq', '/');
  });
});
