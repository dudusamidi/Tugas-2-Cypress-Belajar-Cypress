// Buka link
// https://ultimateqa.com/simple-html-elements-for-automation/
// Isi nama dan email, lalu klik button “email me!”.
// Pilih jenis kelamin pada radio button.
// Pilih satu atau semua pilihan pada checkboxes.
// Pilih dropdown “Audi”.
// Klik tombol “Click Me” pada bagian simple controls lalu cek
// apakah terdapat tulisan button success.


describe('Kumpulan Test Case', function() {
    //Isi nama dan email, lalu klik button “email me!”.
    // it('TC-1', function() {
    //     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    //     cy.get('#et_pb_contact_name_0').type('Nanda') //.should('have.text','Nanda')
    //     cy.get('#et_pb_contact_email_0').type('nanda.spirit@gmail.com')
    //     // cy.get('.et_pb_contact_submit').click()
    // })

    // Pilih jenis kelamin pada radio button.
    // it('TC-2', function() {
    //     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    //     cy.get('[value="male"]').check().should('be.checked')
        
    // }),

    // Pilih satu atau semua pilihan pada checkboxes.
    // it('TC-3', function() {
    //     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    //     cy.get('[value="Bike"]').check().should('be.checked')
    //     cy.get('[value="Car"]').check().should('be.checked')
    // }),

    // Pilih dropdown “Audi”.
    // it('TC-4',function(){
    //     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    //     cy.get('select').select('Audi').should('select')
        
    // }),

    // Klik tombol “Click Me” pada bagian simple controls lalu cek.
    it('TC-4',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi').should('be.selected')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})