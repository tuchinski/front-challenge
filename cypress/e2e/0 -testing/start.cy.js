describe('testing root route', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })

    it('assert that logo is visible', () => {
        cy.get('[data-cy="header-logo"]').should('be.visible')
    })

    it('assert that cart button is visible', ()=>{
        cy.get('[data-cy="header-cart"]').should('be.visible');
    })
    
    it('assert that 3 lottery cards are displayed', () => {
        cy.get('[data-cy="CardDraw"]').should('be.visible').should('have.lengthOf', 4);
    })
})