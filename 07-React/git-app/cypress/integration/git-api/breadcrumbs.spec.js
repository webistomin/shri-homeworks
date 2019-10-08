describe('Git Api - Главная страница', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    
    cy.get('#js-repository-select-btn')
      .click({force: true})
      .blur()
      .toMatchImageSnapshot();
    
    cy.get('.popup__name').contains('learn-unit-testing')
      .click()
      .wait(1000);
  });
  
  it('Корректно выводит хлебные крошки', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/tree/master/folder/"]')
      .click()
      .wait(1000);
    
    cy.get('.breadcrumbs')
      .children().should('have.length', 2);
    
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/folder/text.txt"]')
      .click()
      .wait(1000);
    
    cy.get('.breadcrumbs')
      .children().should('have.length', 3);
  });
  
  it('Корректно расставлены ссылки в хлебных крошках', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/tree/master/folder/"]')
      .click()
      .wait(1000);
  
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/folder/text.txt"]')
      .click()
      .wait(1000);
  
    cy.get('.breadcrumbs__item:nth-child(2) a')
      .click()
      .wait(1000);
  
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/api/repos/learn-unit-testing/tree/master/folder')
    });
  
    cy.get('.breadcrumbs__item:nth-child(1) a')
      .click()
      .wait(1000);
  
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/')
    });
  })
});
