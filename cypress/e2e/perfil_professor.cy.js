describe('Como professor, eu gostaria de poder visualizar meus dados pessoais no meu perfil', () => {
it('O usuário deve conter um cadastro de professor com suas informações de login.', () => {
  cy.visit('https://projeto-final-es-1.vercel.app/')
  cy.contains('Login Professor')

  cy.get('input[type="email"]').type('professora@gmail')
  cy.get('input[type="password"]').type('0000')

  cy.get('#professor_login_button').click()

  cy.wait(1000)

  cy.contains('Informações Pessoais').should('exist')
  cy.get('#login').click()
  })
})
