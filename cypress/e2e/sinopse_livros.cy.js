describe('como usuário, eu gostaria de poder pesquisar livros por título', () => {
  it('deve conter uma opção que redirecione o usuário para uma aba de detalhes do livro', () => {
    cy.visit('https://projeto-final-es-1.vercel.app/')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.get('#aluno_login_button').click()

    cy.wait(1000);

    cy.contains('Biblioteca').should('be.visible')
    cy.contains('Livros').click({ force: true })

    cy.wait(1000);

    cy.contains('Compra/Emprestimo').click()
  })
})