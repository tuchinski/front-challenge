/// <reference types="cypress" />

describe('buying ticket', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })

    it('User should be able to purchase and check if the toast is visible', () => {
        //clicking in the first card
        const a = cy.get('[data-cy="CardDraw"]').first()
        a.contains('Play')
        a.contains('Play').click()
        cy.url().should('include', '/details')
        
        //make a quick pick and continue to cart
        cy.get('[data-cy="button-secondary"]').click()
        cy.get('[data-cy="button-primary"]').contains('Add').click()
        cy.get('[data-cy="button-primary"]').contains('Continue').click()
        cy.url().should('include', '/cart')
        
        //click in buy button and check toast
        cy.get('[data-cy="button-primary"]').click()
        cy.contains('Fingers crossed! Ticket bought!').should('be.visible')
        cy.contains('Sorry, something went wrong while purchasing tickets. Try again later.').should('not.exist')
        
    })

    it('User should be not able to purchase a ticket with repeated numbers', () => {
        //clicking in the first card
        const a = cy.get('[data-cy="CardDraw"]').first()
        a.contains('Play')
        a.contains('Play').click()
        cy.url().should('include', '/details')
        
        //selecting 2 tickets with repeated numbers
        cy.get("#1").click()
        cy.get("#2").click()
        cy.get("#3").click()
        cy.get("#4").click()
        cy.get("#5").click()
        cy.get('[data-cy="button-primary"]').contains("Add").click()

        cy.get("#1").click()
        cy.get("#6").click()
        cy.get("#7").click()
        cy.get("#8").click()
        cy.get("#9").click()
        cy.get('[data-cy="button-primary"]').contains("Add").click()
        
        cy.get('[data-cy="button-primary"]').contains("Continue").click()
        cy.url().should('include', '/cart')
        // //click in buy button and check toast
        cy.get('[data-cy="button-primary"]').click()
        cy.contains('Sorry, something went wrong while purchasing tickets. Try again later.').should('be.visible')
        cy.contains('Fingers crossed! Ticket bought!').should('not.exist')
        
    })
})