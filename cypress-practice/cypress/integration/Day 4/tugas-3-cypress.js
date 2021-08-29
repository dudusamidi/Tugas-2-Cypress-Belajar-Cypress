// Buka link https://www.demoblaze.com/index.html  
// Lakukan pembelian salah satu handphone.
// Prosesnya: pilih handphone -> masukkan ke cart -> klik place order -> lakukan pembayaran. (gunakan data palsu)
// Lakukan registrasi pada website.
// Lakukan login pada website.


// it('test', function(){
    //     cy.visit('https://bukalapak.com')
    //     cy.contains('Daftar').click()
    //     cy.go('back')
    //     cy.go('forward')
    // })

describe('Tugas 3 Cypress', function(){
    beforeEach(() =>{
        cy.visit('https://www.demoblaze.com/index.html')
    })
    it('pembelian barang', function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click() 
    }),
    
    it('Daftar', function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
         
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})