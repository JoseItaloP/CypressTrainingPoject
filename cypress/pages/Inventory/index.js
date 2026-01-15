import { elements } from "./elements"

export default new class Inventory {
    ValidatePage(){
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('Inventory Page')
    }

    addToCart(itemName){
        cy.get(elements.addItemCart(itemName)).click()

        cy.screenshot('Produto adicionado.')
    }

    RemoveCartItem(itemName){
        cy.get(elements.removeItemCart(itemName)).click()

    }

}