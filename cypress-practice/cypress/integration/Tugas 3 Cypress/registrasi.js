describe('Tugas3 Cypress', function(){
    it('Register', function(){
        cy.linkURL()
        cy.get('#signin2').click().should('be.visible')
        cy.wait(2000)
        cy.get('#sign-username').type('adminda').should('have.value', 'adminda')
        cy.get('#sign-password').type('admin123').should('have.value', 'admin123')
        // cy.contains('Sign up').click()
        // cy.get('.btn btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().should('be.visible')

    })
})