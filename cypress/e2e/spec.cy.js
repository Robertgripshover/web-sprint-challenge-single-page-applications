
describe('', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })
  it('can visit the home page', () => {
      cy.contains('Welcome, please customize a pizza!')
  })
})