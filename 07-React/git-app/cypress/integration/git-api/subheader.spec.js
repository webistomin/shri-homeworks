describe('Git Api - Cтрока коммита', () => {
  it('Устанавливает информацию о репозитории', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    cy.get('#js-repository-select-btn')
      .click({force: true});
  
    cy.get('.popup__name').contains('learn-unit-testing')
      .click()
      .wait(1000);
    
    cy.get('.subheader__title')
      .contains('learn-unit-testing')
      .toMatchImageSnapshot();
    
    cy.get('.subheader__select')
      .contains('master')
      .toMatchImageSnapshot();
  })
});
