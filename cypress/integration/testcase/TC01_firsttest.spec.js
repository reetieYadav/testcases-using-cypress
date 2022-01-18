/// <reference types="cypress" />
describe('check page navigation', ()=>{

    it('verify page title', ()=>{
        cy.visit('https://www.way2automation.com/way2auto_jquery/index.php')
        cy.url().should('contain','index.php')
        cy.title().should('contain','Welcome')
    })
    it('verify form',()=>{
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Reeta')
        cy.get('#load_box > #load_form > :nth-child(6) > input').type('9675637738')
        cy.get('#load_box > #load_form > :nth-child(7) > input').type('reeti.y@gmail.com')
        cy.get('#load_box > #load_form > :nth-child(9) > input').type('Pune')
        cy.get('#load_box > #load_form > :nth-child(10) > input').type('Reeta Yadav')
        cy.get('#load_box > #load_form > :nth-child(11) > input').type('reetayadav123')
    })




})