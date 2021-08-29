describe('Tugas 3 Cypress', function(){
    it('Login', function(){
        cy.linkURL()
        // cy.typeLogin({ email: 'fake@email.com', password: 'rahasia1'})
        cy.get('#login2').click().should('be.visible')
        cy.wait(2000) 
        cy.get('#loginusername').type('adminda').should('have.value', 'adminda')
        cy.get('#loginpassword').type('admin123').should('have.value', 'admin123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click().should('be.visible')
        cy.get('.col-sm-12 > .btn').click().should('be.visible')
        cy.contains('Add to cart').click().should('exist')
        // cy.get('[onclick="byCat('monitor')"]').click()
        // cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        // cy.get('.col-sm-12 > .btn').click().should('be.visible')
        
        cy.get('#cartur').click().should('be.visible')
        // cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click().should('be.visible') //hapus barang
        cy.get('.col-lg-1 > .btn').click().should('be.visible')
        cy.wait(1000)
        cy.get('#name').type('iwan').should('have.value', 'iwan')
        // cy.wait(5000)

        cy.get('#country').type('ina').should('have.value', 'ina')
        cy.get('#city').type('clp').should('have.value', 'clp')
        cy.get('#card').type('123').should('have.value', '123')
        cy.get('#month').type('agu').should('have.value', 'agu')
        cy.get('#year').type('2021').should('have.value', '2021')
        // cy.wait(6000)

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().should('be.visible')
        cy.wait(5000)

        cy.get('.confirm').click().should('be.visible')




    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})