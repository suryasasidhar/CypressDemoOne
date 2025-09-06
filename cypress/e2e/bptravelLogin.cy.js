describe('BP Travel Wesbite', () => {
  it('Bp Travel Login', () => {
    cy.visit('https://bptravel.blueprism.com/')
    cy.get('#username').should('be.visible').click().type('admin');
    cy.get('#password').should('be.visible').click().type('admin');
    cy.get('span[onclick="login()"]').click();
    cy.url().should('include','search.html');
    
    cy.contains('Log Out').click();
  })
})