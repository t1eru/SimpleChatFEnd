describe('Auth flow', () => {
  it('Реєстрація → Вхід → Чат', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[placeholder="Ім’я користувача"]').type('testuser');
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Пароль"]').type('Test1234!');
    cy.get('input[placeholder="Дата народження"]').type('2000-01-01');
    cy.get('button').contains('Зареєструватись').click();
    cy.url().should('include', '/login');
    cy.get('input[placeholder="Ім’я користувача"]').type('testuser');
    cy.get('input[placeholder="Пароль"]').type('Test1234!');
    cy.get('button').contains('Увійти').click();
    cy.url().should('include', '/chat');
  });
});
