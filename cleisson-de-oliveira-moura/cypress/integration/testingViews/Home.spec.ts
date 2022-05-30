describe('Testing Home View!', ()=>{
   it('Adding Product on Cart', ()=>{
      cy.visit('http://localhost:3000/')

      cy.get('[data-button="addToCart"]')
         .first()
         .click()

      cy.contains('Go to cart')
         .click()

      cy.url().should('include', '/cart')
   })

   it('Adding more than one Product on Cart', ()=>{
      cy.visit('http://localhost:3000/')

      cy.get('[data-button="addToCart"]')
         .first()
         .click()

      cy.contains('Back to shopping')
         .click()

      cy.url().should('include', '/')

      cy.get('[data-button="addToCart"]')
         .last()
         .click()
         
      cy.contains('Go to cart')
         .click()

      cy.url().should('include', '/cart')
   })
})