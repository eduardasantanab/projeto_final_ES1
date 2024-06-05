describe('Como um usuário, eu gostaria de poder me informar sobre a sinopse dos livros ', () => {
  it('Deve conter uma opção que redirecione o usuário para uma aba de detalhes do livro', () => {
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

    cy.get('#descricao').should(($p) => {
      expect($p).to.not.be.empty;
    });

    cy.get('#descricao1').contains('É o último romance da escritora brasileira Clarice Lispector, publicado em 1977. Trata-se de uma obra instigante e original, de cunho autobiográfico, pertencente à Terceira Geração Modernista. É classificada como um romance intimista, também conhecido como romance psicológico, estilo em que a autora se destaca. Afinal, a obra de Clarice é marcada por suas emoções e sentimentos pessoais.')

  })
})