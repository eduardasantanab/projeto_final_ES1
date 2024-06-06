# PROJETO FINAL ENGENHARIA DE SOFTWARE I - EDUCALIVROS

Grupo: 
- Gabriel Torres
- Isadora Xavier
- Maria Eduarda Santana da Silva Barros
- Mário Jorge Timoteo
- Pedro Henrique

<br/>

### 1. Proposta do sistema

#### ESCOLA LIVRARIA-ONLINE

Nosso sistema consiste em uma escola-livraria online, que visa proporcionar uma experiência única aos usuários, destacando a marca da empresa no mercado. A escolha desse sistema foi motivada pela crescente demanda por soluções educacionais e culturais acessíveis e inovadoras. A integração de uma escola e livraria em uma plataforma online oferece comodidade aos clientes, reunindo em um único lugar recursos educacionais, materiais de leitura e serviços relacionados à educação. Além disso, a oportunidade de criar uma interface atraente e funcional nos desafia a aplicar os conhecimentos adquiridos na disciplina de forma prática e criativa.
	A Escola-Livraria Online tem como visão ser reconhecida como uma plataforma líder na integração de educação e cultura, proporcionando experiências de aprendizado inspiradoras e acessíveis a todos. Nossos valores fundamentais incluem excelência educacional, inovação, acessibilidade e integridade. Além disso, faz parte da nossa missão promover o desenvolvimento pessoal e intelectual dos alunos, fornecendo recursos educacionais de alta qualidade e promovendo o amor pela leitura e aprendizado ao longo da vida.

#### > Descrição do Sistema:
O sistema da Escola-Livraria Online é projetado para oferecer uma experiência de usuário fluida e intuitiva. Ao acessar o site, os usuários são recebidos com uma página de login, que valida ou se aquele usuário tem conta, além dele poder se cadastrar. Ao passar pelo login, é introduzido um home, apresentando slideshows com imagens relacionadas à escola, links de navegação para diferentes seções do site.
As principais seções do site incluem:<br/>

- **Informações da Escola:** Esta seção fornece detalhes sobre os fundamentos da escola, novidades, localizações e informações de contato.<br/>
- **Biblioteca:** Os usuários podem explorar uma variedade de livros disponíveis para compra ou empréstimo, acessando um catálogo organizado e informativo. Nessa seção, existe uma barra de pesquisa funcional, ao qual o usuário pode pesquisar livros pelo seu título ou pelo nome do autor.
- **Produtos:** Aqui, os usuários podem encontrar materiais de papelaria e outros produtos relacionados à escola, disponíveis para compra.
- **Serviços:** Esta seção oferece cursos e aulas particulares oferecidos pela escola, com opções para jovens e crianças.
- **Informações Pessoais:** Os usuários podem acessar suas informações específicas, tanto se forem alunos quanto professores. Além disso, os alunos possuem uma seção especial de notas.<br/><br/>

### 2. Diagrama de Caso de Uso<br/><br/>
<img src="/arquivosReadme/casos_de_uso.jpg"/><br/><br/>

### 3. Diagrama de Classes<br/><br/>
<img src="/arquivosReadme/diagrama_classes.jpg"/><br/><br/>

### 4. Modelo Relacional do Banco de Dados<br/><br/>

### 5. Screenshots do sistema

- Sistema com padrão arquitetural REST

Primeiramente, um projeto foi criado para implementação do sistema. Em seguida, no frontend, o usuário encontra uma página de login, com um design atrativo, que combina com a marca do colégio. Além disso, um botão para caso o usuário não tenha conta, se cadastrar.<br/><br/>
<img src="/arquivosReadme/frontend_login.png"/><br/><br/>

Em seguida, várias seções são disponíveis na navegação, além de um slideshow, que exibe algumas imagens, como a logo da escola, e mensagens, como o anúncio de matrículas.<br/><br/>
<img src="/arquivosReadme/home.png"/><br/><br/>

Ainda em home, tem-se uma parte que fala resumidamente das outras seções do site, além da localização e contato da escola.<br/><br/>
<img src="/arquivosReadme/secoes.png"/><br/><br/>
<img src="/arquivosReadme/footer.png"/><br/><br/>

Já na seção sobre a escola, é descrito algumas informações da escola, além de algumas novidades.<br/><br/>
<img src="/arquivosReadme/sobre.png"/><br/><br/>

A seção de biblioteca, é dividida em duas: Sobre a biblioteca, e Livros. A primeira busca mostrar algumas característica da biblioteca física do colégio.<br/><br/>
<img src="/arquivosReadme/biblioteca.png"/><br/><br/>

Já Livros, é a parte de e commerce do site, em que o usuário pode buscar um livro na barra de pesquisa, tanto pelo seu título, quanto pelo autor.<br/><br/>
<img src="/arquivosReadme/busca.png"/><br/><br/>

Ao clicar em Compra/Empresitmo, é possível ver detalhes sobre o livro.<br/><br/>
<img src="/arquivosReadme/modal_livro.png"/><br/><br/>

Na seção de produtos, existe assim como livros, um catálogo. E, se o usuário clicar em compra/empréstimo, detalhes sobre aquele produto são mostrados.<br/><br/>
<img src="/arquivosReadme/produtos.png"/><br/><br/>
<img src="/arquivosReadme/modal_produtos.png"/><br/><br/>

Na seção de serviços, cursos e aulas particulares, são apresentados para o usuário. E, ele tem a opção de realizar a compra ou aula experimental daquele curso/aula particular.<br/><br/>
<img src="/arquivosReadme/servicos.png"/><br/><br/>
<img src="/arquivosReadme/modal_servicos.png"/><br/><br/>

Por fim, em Informações pessoais, são mostradas informações daquele usuário.<br/><br/>
<img src="/arquivosReadme/perfil_professor.png"/><br/><br/>

Um detalhe sobre Informações pessoais, é que apenas usuários do tipo aluno, veem uma subdivisão desta seção, que é Notas.<br/><br/>
<img src="/arquivosReadme/perfil_aluno.png"/><br/><br/>

O Back-end foi implementado para algumas áreas do site. A primeira delas foi a parte do Login, que está conectado a um banco de dados, para garantir que realize o login apenas pessoas que possuem registro.<br/><br/>
<img src="/arquivosReadme/alert_usuario.png"/><br/><br/>

Cada registro de login realizado pelo usuário na aplicação Front-End é conectado com o Back-End do Back4app, que armazena todos os dados de cadastro como demonstrado na figura a seguir:<br/><br/>
<img src="/arquivosReadme/backend_login.png"/><br/><br/>

Além disso, a barra de pesquisa de livros é funcional, podendo o usuário pesquisar um livro por seu título ou nome do autor.<br/><br/>
<img src="/arquivosReadme/frontend_busca.png"/><br/><br/>

Por fim, as informações de perfil são pegas do banco de dados, dinamicamente.<br/><br/>
<img src="/arquivosReadme/info_perfil.png"/><br/><br/>

Para a criação dos testes, foi utilizado o cypress, implementando as histórias de usuário da tabela Scrum. O teste abaixo, por exemplo, entra no site loga como aluno, vai na seção de livros, e verifica se ao escreve na barra de pesquisa "senhora", ele retorna esse livro procurado. <br/><br/>
<img src="/arquivosReadme/teste.png"/><br/><br/>
<img src="/arquivosReadme/teste_automatizado_senhora.png"/><br/><br/>

- Pipeline e Build automatizada

O pipeline foi implementado para tanto rodar os testes do cypress, quanto para dar deploy no site.<br/><br/>

<img src="/arquivosReadme/codigo_pipeline.png"/><br/><br/>
<img src="/arquivosReadme/pipeline.png"/><br/><br/>
