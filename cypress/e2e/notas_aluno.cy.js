describe('como aluno, eu gostaria de poder consultar as minhas notas', () => {
it('o usuário deve conter um cadastro de aluno com suas informações de login.', () => {
  cy.visit('https://projeto-final-es-1.vercel.app/')

  cy.contains('Login Aluno')

  cy.get('input[type="email"]').type('teste@email.com')
  cy.get('input[type="password"]').type('321234')

  cy.get('#aluno_login_button').click()

//  cy.get('#login').invoke('attr', 'href').then((href) => {
//  cy.visit('notas_aluno.html');
//  })
  })
})
