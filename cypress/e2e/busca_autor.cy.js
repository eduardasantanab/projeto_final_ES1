describe('Como usuário, eu gostaria de poder pesquisar livros por nome do autor ', () => {
  it('O usuário deve inserir nomes válidos e reais para pesquisar o autor do livro', () => {
    cy.visit('https://projeto-final-es-1.vercel.app/')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.wait(1000);

    cy.get('#aluno_login_button').click()

    cy.wait(1000);

    cy.contains('Biblioteca').should('be.visible')
    cy.contains('Livros').click({ force: true })

    cy.get('input[type="search"]').type('clarice lispector')
    cy.get('#search_button').click()

    cy.get('#D8NR9yeFxU').get('#autor').contains('Autor: Machado de Assis')
    cy.get('#6Bz3xw3zSF').get('#autor').contains('Autor: Machado de Assis')
  })
})
