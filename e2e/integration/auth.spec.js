describe('Authentication', () => {
  const base = Cypress.config().baseUrl;

  it('Checking if authentication works well ...', () => {
    cy.visit('/');
    cy.url().should('eq', base + '/login');

    cy.get('form #username').type('upworkTest');
    cy.get('form #password').type('pass');

    cy.contains('form button.btn-purple', 'Sign in').click();
    cy.contains('p.error-msg', 'Wrong password or username, please try again');

    cy.get('form #password').clear().type('2022');

    cy.contains('form button.btn-purple', 'Sign in').click();
    cy.url().should('match', new RegExp(`${base}\/?$`));
  });
});
