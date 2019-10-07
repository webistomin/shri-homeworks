describe('Git Api - Главная страница', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
  });
  
  it('Возращает заголовок для главной страницы', () => {
    cy.get('.message__message')
      .contains( 'Выберите репозиторий, чтобы продолжить работу')
      .toMatchImageSnapshot()
  })
});
