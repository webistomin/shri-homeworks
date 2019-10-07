describe('Git Api - Главная страницы', () => {
  it('Возращает заголовок для главной страницы', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.message__message')
      .contains( 'Выберите репозиторий, чтобы продолжить работу')
      .toMatchImageSnapshot({
        threshold: 0.001,
      });
  })
});
