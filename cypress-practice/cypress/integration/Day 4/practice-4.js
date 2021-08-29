describe('test', function(){
    // before(() =>{
    //     cy.visit('https://bukalapak.com')
    // })

    // before.each(() =>{
    //     cy.visit('https://bukalapak.com')
    // })
    
    // it('test', function(){
    //     cy.contains('Daftar').click()
    //     cy.wait(1000)
    // })
    // it('test-1', function(){
    //     cy.contains('Daftar').click()
    // })
    
    it('test', function(){
        cy.visit('https://bukalapak.com')
        cy.contains('Daftar').click()
        cy.go('back')
        cy.go('forward')
    })

})