describe('Form data',()=>{
    it('when submitted gets the response',()=>{
        cy.visit('http://localhost:3002/');
        cy.get('form');
        cy.get('input#name').type('Shalini Mittal').should('have.value','Shalini Mittal');
        cy.get('input#email').type('sh@g.com').should('have.value','sh@g.com');
        cy.get('input#message').type('Testing cypress').should('have.value','Testing cypress');

        cy.server();
        cy.route({
            url:'/users/**',
            method:'POST',
            response:{id:11}
        });
        cy.get('form').submit();
        cy.contains(11);
    })
})