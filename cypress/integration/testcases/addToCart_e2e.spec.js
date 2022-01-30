describe('end to end automation', () => {

  describe('login page of HomeByMe', () => {
    context('720p resolution', () => {
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })


      it('verify page title', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.url().should('contain', 'nopcommerce')
        cy.title().should('contain', 'nopCommerce')
        cy.get("#small-searchterms").type('Lenovo IdeaCentre 600 All-in-One PC')
        cy.get("[type='submit']").click()
        cy.get("button.button-2.product-box-add-to-cart-button").click()
        cy.get(".bar-notification.success>.content").should('have.text', 'The product has been added to your shopping cart')
        cy.get(".bar-notification.success>.content>a").click()
        cy.get(".page-title>h1").should('be.visible')
        cy.get(".quantity>input").clear().type('2')
        cy.get(".common-buttons>#updatecart").click()
        cy.get(".product-subtotal").should('have.text', '$1,000.00')

      })
    })
  })
})