import { elements } from "./elements"

export default new class Cart{

    ValidateURL(){
        cy.url()
            .should('equal', 'https://www.saucedemo.com/cart.html')
    }

    ValidateItem(ItemName){
        cy.get(elements.InventoryItemName)
            .should('have.text', ItemName)
    }
}