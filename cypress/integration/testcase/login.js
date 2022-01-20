/// <reference types="cypress" />

describe('login page',()=>{

    it('signIn',()=>{
        cy.visit('https://www.way2automation.com/way2auto_jquery/index.php')
        cy.url().should('contain','index.php')
        cy.get(':nth-child(12) > .span_3_of_4 > .text_popup > .fancybox').click()
        cy.get('#login > #load_form').within((section)=>{
        cy.get('label').first().should('have.text','Username:')
        cy.get("input[name='username']").type('Reeta Yadav')
        cy.get('label').last().should('have.text','Password:')
        cy.get("input[name='password']").type('Reeta Yadav')
        cy.get("input[value='Submit']").click()
        })
    
        // cy.get('#load_form > h3').should('be.visible')
        // cy.get('#login > #load_form > :nth-child(5) > label').should('have.text','Username:')
        // cy.get('#login > #load_form > :nth-child(5) > input').type('Reeta Yadav')
        // cy.get('#login > #load_form > :nth-child(6) > label').should('have.text','Password:')
        // cy.get('#login > #load_form > :nth-child(6) > input').type('reetayadav123')
        // cy.get(':nth-child(7) > .span_1_of_4 > .button').click()
    })
    
    it('signIn verification',()=>{
        cy.get('#alert1').should('be.visible').should('have.text','This is just a dummy form, you just clicked LOGIN')
    })

})
 
