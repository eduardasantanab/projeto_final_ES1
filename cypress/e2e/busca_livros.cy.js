describe('como usuário, eu gostaria de poder pesquisar livros por título', () => {
  it('o usuário deve inserir nomes válidos e reais para pesquisar título do livro', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.get('#aluno_login_button').click()

    cy.wait(1000);

    cy.contains('Biblioteca').should('be.visible')
    cy.contains('Livros').click({ force: true })

    cy.get('input[type="search"]').type('senhora')
    cy.get('#search_button').click()
  })
})