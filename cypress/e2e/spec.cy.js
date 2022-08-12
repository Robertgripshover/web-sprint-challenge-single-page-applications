
describe('', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })
  it('can visit the home page', () => {
      cy.contains('Welcome, please customize a pizza!')
  })
  it('can order a pizza', () => {
    const pizzaFormOrder = cy.get(`[data-test-id='goform']`)
    pizzaFormOrder.click()
    cy.contains('Pizza Order Form')
    const submitBtn = () => cy.get(`[data-test-id='order-submit']`)

    cy.get(`[data-test-id='order-name']`).type('pizzatest')

    
  })

})