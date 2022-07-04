describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should do the arithmetical operations update the display with the result of the operation' , () => {
    cy.get('#number2').click(); 
    cy.get("#perator-multiply").click(); 
    cy.get('#number4').click();
    cy.get('.display').should('contain', '8')
  })

  it('should multiple operations', () => {

    cy.get('#number2').click(); 
    cy.get("#perator-multiply").click(); 
    cy.get('#number4').click();
    cy.get("#perator-multiply").click(); 
    cy.get('#number4').click();
    cy.get('.display').should('contain', '32')
    
  });

  it('should output as expected for a range of numbers', () => {

    cy.get('#number2').click(); 
    cy.get('#decimal').click(); 
    cy.get('#number7').click(); 
    cy.get('#number4').click(); 
    cy.get('#number9').click(); 
    cy.get("#perator-multiply").click(); 
    cy.get('#number5').click(); 
    cy.get('#decimal').click(); 
    cy.get('#number6').click(); 
    cy.get('#number1').click(); 
    cy.get('#number3').click();
    cy.get('.display').should('contain', '15.430137000000002')
  }); 

  it( 'should display 0 if divide by zero', () => {

    cy.get('#number2').click(); 
    cy.get('#divide').click(); 
    cy.get('#number0').click();  
    cy.get('.display').should('contain', '0')
  });
})