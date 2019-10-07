describe('Git Api - Главная страница', () => {
  it('Попап для выбора репозитория открывается и закрывается', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .blur()
      .toMatchImageSnapshot()
      
    cy.get('#js-repository-select-popup')
      .should('be.visible');
  
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .blur()
      .toMatchImageSnapshot();
  
    cy.get('#js-repository-select-popup')
      .should('not.be.visible');
      
  });
  
  it('Попап закрывается по клику на репозиторий в мобильной версии', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('iphone-6');
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .toMatchImageSnapshot();
    
    cy.get('#js-repository-select-popup')
      .should('be.visible')
      .click({force: true})
      .toMatchImageSnapshot();
  
    cy.get('.popup__name').contains('learn-unit-testing')
      .click()
      .wait(1000);
    
    cy.get('#js-repository-select-popup')
      .should('not.be.visible');
  });
});

