// describe('kumpulan test case2', function () {
//     it('tc-2', function(){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

//     })

//     Cypress.on('uncaught:exception', (err, runnable)=>{
//         return false
//     })
// })

describe('My First Test Suite', function() {
    it('my first test case', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
//Isi nama dan email, lalu klik button “email me!”.
        cy.get('#et_pb_contact_name_0').type('Nanda')
        cy.get('#et_pb_contact_email_0').type('Nanda')
        cy.get('.et_pb_contact_submit').click()

// Pilih jenis kelamin pada radio button.
        cy.get('[value="male"]').click()
// Pilih satu atau semua pilihan pada checkboxes.
        cy.get('[value="Bike"]').check()
// Pilih dropdown “Audi”.
        cy.get('select').select('Audi')
// Klik tombol “Click Me” pada bagian simple controls lalu cek
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
// apakah terdapat tulisan button success.
        cy.get('.entry-title').contains('Button success')
        
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})