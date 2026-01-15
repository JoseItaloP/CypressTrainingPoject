import Inventory from "../pages/Inventory";
import login from "../pages/login"

describe('Login', ()=>{

    beforeEach(()=>{
        // Arrange
        login.visitPage();
    })

    it("Realizar login com sucesso", ()=>{
        
        // Act
        login.fillCredentials('standard_user', 'secret_sauce')


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