// Buka link https://ultimateqa.com/simple-html-elements-for-automation/ 
// Isi nama dan email, lalu klik button “email me!”.
// Pilih jenis kelamin pada radio button.
// Pilih satu atau semua pilihan pada checkboxes.
// Pilih dropdown “Audi”.
// Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.


// Parameter kelolosan kode:
// Menggunakan assertions di setiap prosesnya.
// Setiap nomor dipisah menjadi test case yang berbeda.


describe('Tugas Cypress 3', function(){
    // Isi nama dan email, lalu klik button “email me!”.
    it('TC-1 (Isi nama dan email, lalu klik button email me!.)',function(){
       cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
       cy.get('#et_pb_contact_name_0').type('Nanda').should('have.value','Nanda')
       cy.get('#et_pb_contact_email_0').type('nanda.spirit@gmail.com').should('have.value','nanda.spirit@gmail.com')
       cy.contains('Email Me!').click(); 
    }),

    // Pilih jenis kelamin pada radio button.
    it('TC-2 (Pilih jenis kelamin pada radio button)',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[type="radio"]').first().check().should('have.value','male');
    }),

    // Pilih satu atau semua pilihan pada checkboxes.
    it('TC-3 (Pilih satu atau semua pilihan pada checkboxes.)',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[type="checkbox"]').check('Bike').should('have.value','Bike');
        cy.get('[type="checkbox"]').check('Car').should('have.value','Car');
    }),

    // Pilih dropdown “Audi”.
    it('TC-4 (Pilih dropdown Audi)',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('select').select('audi').should('have.value', 'audi');
        cy.get('select').contains('Audi');
    }),
    
    // Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.
    it('TC-5 (Klik tombol Click Me pada bagian simple controls lalu cek apakah terdapat tulisan button success)',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').should('have.text','Click Me').click();
        cy.get('.entry-title').contains('Button success');
        cy.get('.formkit-close').should('not.be.visible');
        cy.get('.formkit-close').click({force: true});
    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});