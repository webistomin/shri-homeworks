describe('Git Api - Главная страницы', () => {
  it('Попап для выбора репозитория открывается и закрывается', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .blur()
      .toMatchImageSnapshot({
        threshold: 0.001,
      });
      
    cy.get('#js-repository-select-popup')
      .should('be.visible');
  
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .blur()
      .toMatchImageSnapshot({
        threshold: 0.001,
      });
  
    cy.get('#js-repository-select-popup')
      .should('not.be.visible');
      
  })
});
