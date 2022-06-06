describe('Testing Checkout View!', ()=>{
   it('Submitting the checkout form', ()=>{
      cy.visit('http://localhost:3000/checkout')

      cy.get('.card-number-input')
         .type('1111111111111111')
         .should('have.value', '1111111111111111');
      
      cy.get('.card-holder-input')
         .type('Cleisson de Oliveira Moura')
         .should('have.value', 'Cleisson de Oliveira Moura');

      cy.get('.month-input')
         .select('07')
         .should('have.value', '07');

      cy.get('.year-input')
         .select('2022')
         .should('have.value', '2022');

      cy.get('.cvv-input')
         .type('123')
         .should('have.value', '123');

      cy.contains('Finish Order').click()

      cy.contains('Back to shopping').click()

      cy.url().should('include', '/')
   })
})