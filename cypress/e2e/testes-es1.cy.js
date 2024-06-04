describe('como usuário, eu gostaria de poder realizar um cadastro', () => {
  it('deve haver um formulário para o preenchimento de cadastro', () => {
    cy.visit('https://projeto-final-es-1.vercel.app/')
    cy.get('#registro_button').click()
    cy.get('#volta_login').click()

  })
})


//describe('como professor, eu gostaria de poder visualizar meus dados pessoais no meu perfil', () => {
//  it('o usuário deve conter um cadastro de professor com suas informações de login.', () => {
//    cy.visit('https://projeto-final-es-1.vercel.app/')
//
//    cy.contains('Login Professor')
//
//    cy.get('input[type="email"]').type('professora@gmail')
//    cy.get('input[type="password"]').type('0000')
//
//    cy.get('#professor_login_button').click()
//
//    //cy.get('#login').click()
//    })
//})

