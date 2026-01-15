import Inventory from "../pages/Inventory";
import login from "../pages/login"

describe('Login', ()=>{

    beforeEach(()=>{
        // Arrange
        login.visitPage();
    })

    it("Realizar login com sucesso", ()=>{
        
        // Act
        login.fillCredentials(Cypress.env('username'), Cypress.env('password'))


        // Assert
        Inventory.ValidatePage()

    })

    it("Falhar em fazer login",()=>{
        
        // Act
        login.fillCredentials('InvalidUser', 'InvalidPass')

        // Assert
        login.validateErroLogin()
        
    })
})