describe('Git Api - Переходы по сайту', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/api/repos/learn-unit-testing/blob/master/index.js');
    cy.viewport('macbook-15');
  });
  
  it('Переходит на главную, если кликнуть на логотип', () => {
    cy.get('.page-header__home')
      .click()
      .wait(1000);
  
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/')
    })
  });
  
  it('Корректно меняет title страницы', () => {
    cy.title()
      .should('eq', 'Yandex Arcanum: index.js')
  })
});
