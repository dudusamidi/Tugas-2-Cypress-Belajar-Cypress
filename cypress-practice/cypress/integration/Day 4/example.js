// ✅ matches
it('test cy.route()', () => {
    cy.server()
    cy.route('services/api/agenda/Appointment?id=**').as('getUrl')
    cy.visit('https://example.com')
    cy.window().then((win) => {
      const xhr = new win.XMLHttpRequest()
      xhr.open('GET', '/services/api/agenda/Appointment?id=35')
      xhr.send()
    })
    cy.wait('@getUrl')
  })
  
  // ❌ does not match 
  it('test cy.intercept()', () => {
    cy.intercept('services/api/agenda/Appointment?id=**').as('getUrl')
    cy.visit('https://example.com')
    cy.window().then((win) => {
      const xhr = new win.XMLHttpRequest()
      xhr.open('GET', '/services/api/agenda/Appointment?id=35')
      xhr.send()
    })
    cy.wait('@getUrl')
  })
  
  // ✅ matches
  it('test cy.intercept()', () => {
    cy.intercept('services/api/agenda/Appointment?id=35').as('getUrl')
    cy.visit('https://example.com')
    cy.window().then((win) => {
      const xhr = new win.XMLHttpRequest()
      xhr.open('GET', '/services/api/agenda/Appointment?id=35')
      xhr.send()
    })
    cy.wait('@getUrl')
  })


  
  // ✅ matches
  it('test biasa', () => {
    // cy.intercept('services/api/agenda/Appointment?id=35').as('getUrl')
    cy.visit('https://example.com')
    // cy.window().then((win) => {
    //   const xhr = new win.XMLHttpRequest()
    //   xhr.open('GET', '/services/api/agenda/Appointment?id=35')
    //   xhr.send()
    // })
    cy.wait(2000)
  })