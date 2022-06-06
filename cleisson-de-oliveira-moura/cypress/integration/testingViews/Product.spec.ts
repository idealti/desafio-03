describe('Testing Product View!', () => {
   it('Should go to Cart', () => {
      cy.visit('http://localhost:3000/')

      cy.get('[data-product="productView"')
         .first()
         .click()
      
      cy.url().should('include', '/product/')

      cy.get('[data-button="addToCart"]')
         .click()
      
      cy.contains('Go to cart')
         .click()

      cy.url().should('include', '/cart')
   })

   it('Should back to Shopping', () => {
      cy.visit('http://localhost:3000/')

      cy.get('[data-product="productView"')
         .first()
         .click()
      
      cy.url().should('include', '/product/')

      cy.get('[data-button="addToCart"]')
         .click()
      
      cy.contains('Back to shopping')
         .click()

      cy.url().should('include', '/')
   })
})