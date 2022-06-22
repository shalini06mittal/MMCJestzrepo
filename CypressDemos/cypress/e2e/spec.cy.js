describe('testing demo',()=>{
    it('dummy test',()=>{
        cy.visit('https://www.techgatha.com');
        cy.get('h1').should("contain","Transform your career.")
        cy.get('a[href="creations.html"]').should("contain","KIDS SECTION")
       
    })
})