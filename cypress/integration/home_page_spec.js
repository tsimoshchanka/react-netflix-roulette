describe('The Home Page', function() {
    const resultItemClass = '.ResultsItem___resultsItem';
    const sortingBtnClass = '.ResultsSortOption___button';

    beforeEach(function () {
        cy.visit('/');
    })
      
    it('successfully loads', function() {
        cy.contains('NetflixRoulette');
        cy.contains('24 movies found');
    })

    it('filters results by changing the search input', function() {
        cy.get(resultItemClass).should('have.length', 24);
        cy.get('input[type="text"]').type('qwertyzxcvbbn123');
        cy.contains('No films found');
    })
})
  