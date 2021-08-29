describe('Tugas 3 Cypress', function(){
    it('Login', function(){
        cy.linkURL()
        // cy.typeLogin({ email: 'fake@email.com', password: 'rahasia1'})
        cy.get('#login2').click()
        cy.wait(2000) 
        cy.get('#loginusername').type('adminda').should('have.value', 'adminda')
        cy.get('#loginpassword').type('admin123').should('have.value', 'admin123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').click()

    })
})