describe('Como usuário, eu gostaria de poder pesquisar livros por título', () => {
  it('O usuário deve inserir nomes válidos e reais para pesquisar título do livro', () => {
    cy.visit('https://projeto-final-es-1.vercel.app/')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.get('#aluno_login_button').click()


    cy.contains('Biblioteca').should('be.visible')
    cy.contains('Livros').click({ force: true })

    cy.get('input[type="search"]').type('senhora')
    cy.get('#search_button').click()

    cy.get('#card_title').should('exist').and('contain.text', 'Senhora')
     })
})