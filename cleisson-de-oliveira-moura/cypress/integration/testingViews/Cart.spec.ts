describe('Testing Cart View!', ()=>{
   it('Should not go to Checkout without ptoducts on Cart', ()=>{
      cy.visit('http://localhost:3000/cart')

      cy.contains('Your cart is Empty :(') 

      cy.get('[data-button="finishOrder"]')
         .click()
         .should('have.attr', 'disabled')
   })

   it('Should increment and decrement Product amount', ()=>{
      cy.visit('http://localhost:3000/')

      cy.get('[data-button="addToCart"]')
         .first()
         .click()

      cy.contains('Go to cart')
         .click()
      
      cy.url().should('include', '/cart')

      cy.get('[data-increment="incrementIcon"]')
         .click()
      cy.get('[data-amount="productAmount"]')
         .should('have.value', '2')

      cy.get('[data-decrement="decrementIcon"]')
         .click()
      cy.get('[data-amount="productAmount"]')
         .should('have.value', '1')
   })

   it('Should remove product from cart', ()=>{
      cy.visit('http://localhost:3000/')
      
      cy.get('[data-button="addToCart"]')
         .first()
         .click()

      cy.contains('Go to cart')
         .click()
      
      cy.url().should('include', '/cart')

      cy.get('[data-remove="removeIcon"]')
         .click()

      cy.contains('Your cart is Empty :(')
   })

   it('Should go to Checkout with products on Cart', ()=>{
      cy.visit('http://localhost:3000/')
      
      cy.get('[data-button="addToCart"]')
         .first()
         .click()

      cy.contains('Go to cart')
         .click()
      
      cy.url().should('include', '/cart')

      cy.get('[data-button="finishOrder"]')
         .click()

      cy.url().should('include', '/checkout')
   })
})