describe("Coach dealing with forms" () => {
    beforeEach(() => {
       loginfile.login(users.coach)
   });
   
   it("Can fill out form and submit", () => {
       cy.get("#modal-button").click()
       cy.get("#modal-form").should("exist")
       cy.get("#form-name").type("Mike Johnson")
       cy.get("#form-age").type("33")
       cy.get("#form-email").type("mj09@yahoo.com")
       cy.get("#submit-button").click()
   
      }    
   }))

