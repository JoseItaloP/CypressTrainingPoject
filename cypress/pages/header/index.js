import { elements } from "./elements"

export default new class Header{
    ValidateCartHaveItem(Quantit){
        cy.get(elements.CartBadge)
            .should('be.visible')
            .and('have.text', Quantit.toString())
    }

    NavigateToCart(){
        cy.get(elements.CartSelector).click()
    }

    ValidateCartBadgetNotExist(){
        cy.get(elements.CartBadge)
            .should('not.exist')

        cy.screenshot('Produto removido')
    }
}