import Inventory from "../pages/Inventory"
import login from "../pages/login"
import Cart from "../pages/Cart"
import header from "../pages/header"

describe("Carrinho", ()=>{

    beforeEach(()=>{
        // Arrang
        login.visitPage()

        login.fillCredentials('standard_user', 'secret_sauce')
    })


    it("adicionar item ao carrinho com sucesso", ()=>{
        const QntItensCartAdd = 1
        // Act
        Inventory.addToCart('Sauce Labs Backpack')

        // Assert
        header.ValidateCartHaveItem(QntItensCartAdd)

        header.NavigateToCart()

        Cart.ValidateURL()

        Cart.ValidateItem('Sauce Labs Backpack')

    })

    it("Remover item do carinho com sucesso", ()=>{

        // Act
        Inventory.addToCart('Sauce Labs Backpack')

        Inventory.RemoveCartItem('Sauce Labs Backpack')

        // Assert
        header.ValidateCartBadgetNotExist()
    })
})