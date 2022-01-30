/// <reference types="cypress" />



describe('signup in facebook',()=>{
    context('720p resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720)
       
        })
    it('Send inputs',()=>{
        cy.visit('https://www.facebook.com/'), {
      onBeforeLoad: (win) => {
        Object.defineProperty(win, 'self', {
          get: () => {
            return window.top
          }
        })
      }
    }
       
        cy.url().should('contain','facebook')

        cy.get('.fcb > a').click()
            cy.get('[data-testid="open-registration-form-button"]').click()
            cy.get("input[name='firstname']").type("rakesh")
            cy.get("input[name='lastname']").type("yadav")
            cy.get("input[name='reg_email__']").type('8798456333')
          cy.get("#password_step_input").type('reeta@123')
          cy.get("#day").select('5').should('have.value','5')
          cy.get("#month").select('Feb').should('have.value','2')
          cy.get("#year").select('1993').should('have.value','1993')
          cy.get(":nth-child(1) > ._58mt").click()
          
    })
    
    it('submit form',()=>{
        cy.get("button[name='websubmit']").click()
    })
    
    it.skip('sign up verification', ()=>{
        cy.url().should('contains','https://www.facebook.com/checkpoint/')
       
    })

    it.skip('facebook login', ()=>{
        cy.get("#email").type("8798456333")
        cy.get("#pass").type("reeta@123")
        cy.get("button[name='login']").click()

        
    })

})

})

