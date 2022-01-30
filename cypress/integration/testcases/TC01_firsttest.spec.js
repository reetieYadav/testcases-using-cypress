/// <reference types="cypress" />
describe('check page navigation', () => {


    it('verify page title', () => {
        cy.visit('https://www.way2automation.com/way2auto_jquery/index.php')
        cy.url().should('contain', 'index.php')
        cy.title().should('contain', 'Welcome')
        cy.title().then(($text) => {
            // assert.equal($text,'Welcome to the Test Site')
            expect($text).to.equal('Welcome to the Test Site')

        })
    })



    it('verify form label', () => {

        cy.get('#load_box > #load_form > h3').then((h3) => {
            assert.equal(h3.text(), 'Dummy Registration Form')
        })

        // cy.get('#load_box > #load_form > :nth-child(5) > label').last().then((label)=>{
        //     assert.equal(label.text(), 'Name:')
        // })

        cy.get('#load_form > :nth-child(5) > label').eq(1).then((label) => {
            assert.equal(label.text(), 'Name:')
        })

        // cy.get('#load_box > #load_form > :nth-child(6) > label').then((label)=>{
        //     assert.equal(label.text(), 'Phone:')
        // })

        cy.get('#load_box > #load_form > :nth-child(6) > label').should('have.text', 'Phone:')


        // cy.get(':nth-child(7) > label').then((label)=>{
        //     assert.equal(label.text(), 'Email:')
        // })

        cy.get(':nth-child(7) > label').should('contain.text', 'Email')

        cy.get(':nth-child(9) > label').then((label) => {
            assert.equal(label.text(), 'City:')
        })

        cy.get(':nth-child(10) > label').then((label) => {
            assert.equal(label.text(), 'Username:')
        })

        cy.get(':nth-child(11) > label').then((label) => {
            assert.equal(label.text(), 'Password:')
        })
    })



    it('From parent find children', () => {
        // cy.get('#load_box').find('input').invoke('attr','type').should('not.have','hidden').its('length').then((elelength)=>{
        //     cy.log(elelength)

        cy.get('#load_box>form>fieldset').children('input').should('not.have', 'hidden').its('length').then((elelength) => {
            cy.log(elelength)
        })
    })
})