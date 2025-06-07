describe('Сторінка профілю', () => {
  it('Вхід і перегляд профілю', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Ім’я користувача"]').type('testuser');
    cy.get('input[placeholder="Пароль"]').type('Test1234!');
    cy.get('button').contains('Увійти').click();
    cy.url().should('include', '/chat');
    cy.contains('Профіль').click();
    cy.contains('Ім’я:');
    cy.contains('Email:');
  });
});