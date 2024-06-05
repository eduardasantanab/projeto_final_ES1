describe('Como usuário, eu gostaria de poder visualizar os serviços disponíveis', () => {
  it('Deve conter um botão de serviços no menu de navegação que direciona o usuário para descrições de serviços', () => {
    cy.visit('https://projeto-final-es-1.vercel.app/')

    cy.contains('Login Aluno')

    cy.get('input[type="email"]').type('teste@email.com')
    cy.get('input[type="password"]').type('321234')
    cy.get('#aluno_login_button').click()

    cy.wait(1000);

    cy.contains('Serviços').should('be.visible')
    cy.contains('Serviços').click()

    cy.scrollTo(0, 500);
    cy.wait(1000);

    cy.scrollTo(500, 1000);
    cy.wait(1000);

    cy.scrollTo(1000, 2000);
    cy.contains('Adquirir curso').should('exist')
    cy.contains('Adquirir curso').click()

    cy.contains('Comprar').should('exist')
    cy.contains('Aula experimental').should('exist')
    cy.contains('Close').click()
  })
})

