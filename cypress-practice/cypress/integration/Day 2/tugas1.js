describe('kumpulan test case', function (){
    it('tc-1', function(){
    //     cy.visit('https://bukalapak.com/')
    //     cy.get('.bl-link > .pr-4').click()
    //     cy.get('bl-text-field_inner').type('jojo')

    // cy.visit

    //     cy.get('select').select('opel')
    //     cy.get('[value="Bike"]').check()
    cy.visit('https://demoqa.com/automation-practice-form ')

    // 1. Input nama awal dan nama akhir.
    cy.get('#firstName').type('Nanda')
    cy.get('#lastName').type('Septyana')
    // 2. Input email.
    cy.get('#userEmail').type('nanda.spirit@gmail.com')
    // 3. Check gender.
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    
    // 4. Input mobile number.
    cy.get('#userNumber').type('05729807779')
    // 5. Check hobbies.
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    // 6. Isi current address.
    cy.get('#currentAddress').type('Membaca pengetahuan')
    // 7. Click button submit.
    cy.get('#submit').click()

    })

    Cypress.on('uncaught:exception', (err, runnable)=>{         return false     })
})