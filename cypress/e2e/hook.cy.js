describe('hooks', ()=>{
    
    before(()=>{
        cy.log("log Before")
    })
    beforeEach(()=>{
        cy.log('Log BeforeEche')
    })

    after(()=>{
        cy.log("Log after")
    })

    afterEach(()=>{
        cy.log('Log AfterEach')
    })

    it('teste 1',()=>{
        cy.log('Test 1 execução')
    })

    it('teste 2', ()=>{
        cy.log('Test 2 execução')
    })
})