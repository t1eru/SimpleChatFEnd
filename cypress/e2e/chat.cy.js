describe('Chat interaction', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Ім’я користувача"]').type('testuser');
    cy.get('input[placeholder="Пароль"]').type('Test1234!');
    cy.get('button').contains('Увійти').click();
    cy.url().should('include', '/chat');
  });

  it('Надсилання повідомлення', () => {
    cy.get('textarea').type('cypress');
    cy.get('button').contains('Надіслати').click();
    cy.contains('cypress');
  });
});
