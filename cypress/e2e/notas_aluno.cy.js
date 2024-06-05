describe('Como aluno, eu gostaria de poder consultar as minhas notas', () => {
it('O usuário deve conter um cadastro de aluno com suas informações de login.', () => {
  cy.visit('https://projeto-final-es-1.vercel.app')

  cy.contains('Login Aluno')

  cy.get('input[type="email"]').type('teste@email.com')
  cy.get('input[type="password"]').type('321234')

  cy.get('#aluno_login_button').click()

  cy.contains('Informações Pessoais').should('be.visible')
  cy.contains('Notas').click({ force: true })
  })
})
