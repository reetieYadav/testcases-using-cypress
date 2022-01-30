/// <reference types="cypress" />

describe('signup page',()=>{
    let userInfo 
    before(()=>{
        cy.fixture('example').then((data)=>{
            userInfo=data
        })
    })

    it('Send inputs',()=>{
        cy.visit('https://www.way2automation.com/way2auto_jquery/index.php')
        cy.url().should('contain','index.php')
        cy.get('#load_box > #load_form>fieldset').within((section)=>{
           
            cy.get('input').first().type(userInfo.name)
            cy.get('input').first().prev().then((label)=>{
                assert.equal(label.text(), 'Name:')
            })
            cy.get("input[name='phone']").type(userInfo.phoneNumber)
            cy.get("input[name='phone']").prev().should('have.text','Phone:')
            cy.get("input[name='email']").type(userInfo.email)
            cy.get("input[name='email']").prev().should('contain.text','Email')

            cy.get("[name='country']").select('Angola').should('have.value','Angola')
            cy.get("[name='country']").prev().should('have.text','Country:')
            cy.get("input[name='city']").type(userInfo.city)
            cy.get("input[name='city']").prev().then((label)=>{
                assert.equal(label.text(), 'City:')
            })
            cy.get("input[name='username']").type(userInfo.username)
            cy.get("input[name='username']").prev().then((label)=>{
                assert.equal(label.text(), 'Username:')
            })
            cy.get("input[name='password']").type(userInfo.password)
            cy.get("input[name='password']").prev().then((label)=>{
                assert.equal(label.text(), 'Password:')
            })
            cy.get("input[name='password']",{timeout:3000}).should('be.visible').invoke('attr','type').should('contain','password')
        // {timeout:3000} is not hardcoded. if it finds the element it will go ahead, otherwise will wait for 3sec and then will fail
        })
       
        
    })
    
    it('submit form',()=>{
        cy.get(':nth-child(12) > .span_1_of_4 > .button').should('be.visible').invoke('attr','value').should('contain','Submit')
        cy.get(':nth-child(12) > .span_1_of_4 > .button').click()
    })
    
    it('Form submit verification', ()=>{
        cy.get('#alert').should('be.visible').should('have.text','This is just a dummy form, you just clicked SUBMIT BUTTON')
    })


})

