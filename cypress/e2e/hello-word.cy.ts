describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://rocketseat.com.br')
    cy.contains('assinar agora', {
      matchCase: false,
    }).click()
  })
})
