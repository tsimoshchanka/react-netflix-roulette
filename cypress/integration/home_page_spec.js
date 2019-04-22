describe('The Home Page', function() {
    const resultItemClass = '.ResultsItem___resultsItem';
    const sortingBtnClass = '.ResultsSortOption___button';

    beforeEach(function () {
        cy.visit('/');
    })
      
    it('successfully loads', function() {
        cy.contains('NetflixRoulette');
        cy.contains('5 movies found');
        cy.contains('Kill Bill');
    })

    it('filters results by changing the search input', function() {
        cy.get(resultItemClass).should('have.length', 5)
        cy.get('input[type="text"]').type('kill bill');
        cy.get(resultItemClass).should('have.length', 2)
    })

    it('sorts results by changing the sorting criteria', function() {
        cy.get(resultItemClass).first().contains('The Hateful Eight');
        cy.get(sortingBtnClass).last().click();
        cy.get(resultItemClass).first().contains('Reservoir Dogs');
    })
})
  