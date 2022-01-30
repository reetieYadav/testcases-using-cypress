/// <reference types="cypress" />

// const { data } = require("cypress/types/jquery")

describe('login page of HomeByMe',()=>{
    

    context('720p resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720)
        })

        let userInfo 
    before(()=>{
        cy.fixture('hbm').then((data1)=>{
            userInfo=data1
        })
    })

    it('launch website',()=>{
        cy.visit('https://home.by.me/en/')
        // cy.get("#footer_tc_privacy_button_3").click()
        // cy.on('window:alert',(cookies)=>{
        //     expext(cookies).eq('')
        // })
        // cy.window().then(($win) => {
        //     cy.stub($win, 'prompt') //.returns('Continue with only necessary cookies')
        //     cy.get("#footer_tc_privacy_button_3").click()
        //     // cy.contains('Click for JS Prompt').click()
        // })

        // cy.get("[data-tag-label='log_in']").should('be.visible')
        // cy.get("#footer_tc_privacy_button_3").contains('Accept All')
       
        cy.url().should('contain','home.by.me')
      
    })

    it.skip('wrong username signIn',()=>{
        cy.get("[data-tag-label='log_in']").eq(0).click()
        cy.get('#email_log').type('reeti.y+210@gmail.com')
        cy.get('#login_password').type(userInfo.password)
        cy.get('#login_password').click()
        cy.get("[data-testid='login-error-head']>.error-message").should('have.text','Invalid credentials')
    
})

    it.skip('wrong password signIn',()=>{
        // cy.reload()
        cy.get('#email_log').clear().type(userInfo.username)
        cy.get('#login_password').type('reeta@12345')
        cy.get('#login_password').click()
        cy.get("[data-testid='login-error-head']>.error-message").should('have.text','Invalid credentials')
    
})

    it('signIn pagecheck',()=>{
     
        cy.get("[data-tag-label='log_in']").eq(0).click()
        cy.get("#login>header>h1").should('have.text','Log in')
        cy.get("#login>header>h1").prev().should('be.visible')
        cy.get("header>p>[data-testid='login-back']").should('contain.text','Sign up')
        cy.get("#login>header>p").should('contain.text',"Don't have an account? ")
        cy.get("[data-testid='login-form']>.input-field").within((section)=>{
        cy.get("input[type='text']").next().should('have.text','Email')
        cy.get("input[type='password']").next().should('have.text','Password')
        cy.get("input[type='submit']").should('have.value','Log in')
      
    })
    
    })

    it('correct signIn',()=>{
       
        cy.get("[data-testid='login-form']>.input-field").within((section)=>{
            cy.get('#email_log').clear().type(userInfo.username)
            cy.get('#login_password').type(userInfo.password)
            cy.get("input[type='submit']").click()
        })
    
    })
    
    
    it.skip('signIn verification',()=>{
        cy.get(".wrapper>.user.u-ptm>h1").contains('Welcome')
    })
 })
})


