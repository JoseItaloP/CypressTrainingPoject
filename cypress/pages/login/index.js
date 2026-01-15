import { Selector } from "./elements"

export default new class Login{
    visitPage(){
        cy.visit('https://www.saucedemo.com/')
    }

    fillCredentials(userName, Password){
        cy.get(Selector.LoginBox).type(userName)

        cy.get(Selector.PassBox).type(Password)

        cy.get(Selector.Button).click()
    }

    validateErroLogin(){

        cy.screenshot('Erro credenciais invalidas')

        cy.get(Selector.Erro).should('contain.html', "Epic sadface: Username and password do not match any user in this service")

    }
}