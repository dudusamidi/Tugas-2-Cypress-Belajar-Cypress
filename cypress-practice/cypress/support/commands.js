//custom command
// Cypress.Commands.add('login', ()  => {
//     cy.visit('https://bukalapak.com')
//     cy.contains('Daftar').click()

// })

Cypress.Commands.add('linkURL', () => {
    cy.visit('https://www.demoblaze.com/index.html')
})

// Cypress.Commands.add('typeLogin', (user) =>{
//     cy.get('input[name=email]').type(user.email)
//     cy.get('input[name=password]').type(user.password)
// })