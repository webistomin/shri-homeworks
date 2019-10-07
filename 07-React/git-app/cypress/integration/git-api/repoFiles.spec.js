describe('Git Api - Список файлов', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    cy.get('#js-repository-select-btn')
      .click({force: true});
  
    cy.get('.popup__name').contains('learn-unit-testing')
      .click()
      .wait(1000);
  });
  
  it('Возращает структуру репозитория', () => {
    cy.get('.source')
      .toMatchImageSnapshot()
  });
  
  it('Корректно переходит по клику на файл', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/index.js"]')
      .click()
      .wait(1000);
  
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/api/repos/learn-unit-testing/blob/master/index.js')
    })
  });
  
  it('Корректно переходит во вложенную папку', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/tree/master/folder/"]')
      .click()
      .wait(1000);
    
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/api/repos/learn-unit-testing/tree/master/folder/')
    });
    
    cy.get('.source__files-name')
      .contains('text.txt')
      .toMatchImageSnapshot();
  });
  
  it('Корректно выводит имя файла', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/index.js"]')
      .click()
      .wait(1000);
    
    cy.get('.blob-viewer__title')
      .contains('index.js')
      .toMatchImageSnapshot();
  });
  
  it('Корректно выводит размер файла', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/index.js"]')
      .click()
      .wait(1000);
    
    cy.get('.blob-viewer__size')
      .contains('13 Bytes')
      .toMatchImageSnapshot();
  });
  
  it('Корректно выводит строчки кода', () => {
    cy.get('.source__files-name[href="/api/repos/learn-unit-testing/blob/master/index.js"]')
      .click()
      .wait(1000);
  
    cy.get('.blob-viewer__content-table tbody')
      .toMatchImageSnapshot();
    
    cy.get('.blob-viewer__content-table tbody')
      .children().should('have.length', 2)
      
  });
});
