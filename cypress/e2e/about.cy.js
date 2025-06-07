describe('Сторінка Про додаток', () => {
  it('Перехід до сторінки About', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Ім’я користувача"]').type('testuser');
    cy.get('input[placeholder="Пароль"]').type('Test1234!');
    cy.get('button').contains('Увійти').click();
    cy.url().should('include', '/chat');
    cy.contains('Про додаток').click();
    cy.contains('Це простий чат-додаток');
  });
});