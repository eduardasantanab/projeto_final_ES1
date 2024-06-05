
describe('Como professor, eu gostaria de poder visualizar meus dados pessoais no meu perfil, para garantir que estão corretos', () => {
    it('O usuário deve conter um cadastro de professor com suas informações de login ', () => {
      cy.visit('https://projeto-final-es-1.vercel.app/')
    
      cy.contains('Login Professor')
      

      cy.get('input[type="email"]').type('teste@teste')
      cy.get('input[type="password"]').type('12345')
      cy.get('#professor_login_button').click()
  
      cy.wait(1000);

      cy.contains('Informações Pessoais')

      cy.get('input[type="Nome"]').type('teste')
      cy.get('input[type="Sobrenome"]').type('teste2')
      cy.get('input[type="CPF"]').type('1234')
      cy.get('input[type="CEP"]').type('5678')
     


    });
  });
