describe('test demo site tools qa',()=>{

    before(()=>{
        cy.visit('https://demoqa.com/');
    })
    beforeEach(()=>{
       // cy.visit('https://demoqa.com/');
    })
    it('load the website and check anchor link',()=>{
        //cy.visit('https://demoqa.com/');
        cy.get('header a').should("have.attr","href","https://demoqa.com");
    })
    it('load the website and check img link',()=>{
        //cy.visit('https://demoqa.com/');
        cy.get('img.banner-image').should("have.attr","alt","Selenium Online Training");
    })
})