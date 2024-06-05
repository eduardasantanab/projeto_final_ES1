describe('como usuário, eu gostaria de poder pesquisar livros por nome do autor ', () => {
  it('o usuário deve inserir nomes válidos e reais para pesquisar o autor do livro', () => {
    cy.visit('http://localhost:63342/projeto_final_ES1/index.html?_ijt=g63ug10cdfrccbk8h311mue57v&_ij_reload=RELOAD_ON_SAVE')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.wait(1000);

    cy.get('#aluno_login_button').click()

    cy.wait(1000);

    cy.contains('Biblioteca').should('be.visible')
    cy.contains('Livros').click({ force: true })

    cy.get('input[type="search"]').type('machado de assis')
    cy.get('#search_button').click()

    cy.get('#autor2').contains('Autor: Machado de Assis')
    cy.get('#autor4').contains('Autor: Machado de Assis')
  })
})