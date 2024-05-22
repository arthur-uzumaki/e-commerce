describe('search products ', () => {
  it('should be able to search for products', () => {
    cy.visit('/')
    cy.get('input[name=q]').type('java').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=java')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit page without a search query', () => {
    cy.visit('/search')

    cy.on('uncaught:exception', () => {
      return false
    })

    cy.location('pathname').should('equal', '/')
  })
})
