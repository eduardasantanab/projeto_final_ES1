Parse.initialize(
  'awPjmitwQWHohlqbzx3EoHaZBYn4ZZsAl1L2ZEvO',
  '5aw3fHuJKq9PHPhHhZYwpasW9uCUV4R8gEGXwLQI'
);
Parse.serverURL = 'https://parseapi.back4app.com';
let filteredLivros = [];

// Filtra os livros do banco de dados.
async function searchLivros(nome) {
    try {
        const url = 'livros.json';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro ao buscar livro. Status: ' + response.status);
        }

        const livrosData = await response.json();
        console.log('Livros encontrados:', livrosData);

        const records = livrosData.records; // Acessa os registros diretamente

        if (records && records.length > 0) {
            // Filtrar os livros pelo nome fornecido
            filteredLivros = records.filter(record => {
                return record[1] && record[1].toLowerCase() === nome.toLowerCase(); // Nome do livro está no índice 1
            });
            console.log('Livros filtrados:', filteredLivros);
            return filteredLivros.map(record => ({ nome: record[1], autor: record[4] })); // Autor do livro está no índice 4
        } else {
            throw new Error('Nenhum livro encontrado para o nome fornecido.');
        }
    } catch (error) {
        console.error("Erro ao buscar os livros:", error);
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelector('.forms-container');
    const campo = document.querySelector('.box-c');
    const exibicao = document.querySelector('.output-container');
    const cleanButton = document.querySelector('.clean-button');
    let valorInput = '';

    forms.addEventListener('submit', async function (e) {
        e.preventDefault();
        valorInput = campo.value.trim();
        console.log('Nome fornecido pelo usuário:', valorInput);

        // Remove o conteúdo anterior antes de exibir o gif de carregamento
        exibicao.innerHTML = '';

        // Verifica se o campo não está vazio antes de exibir a animação de carregamento
        if (valorInput !== '') {
            // Exibir a animação de carregamento
            const loading = createLoadingAnimation();
            exibicao.appendChild(loading);

            try {
                // Busca informações do livro a partir do nome fornecido pelo usuário
                const livrosData = await searchLivros(valorInput);
                exibir(livrosData);
            } catch (error) {
                console.error('Ocorreu um erro:', error);
                exibicao.innerHTML = '<h1 style="color:red;">Ops! Infelizmente nenhum livro foi encontrado pelo nome fornecido. Veja nossas recomendações abaixo.</h1>';
            } finally {
                exibicao.removeChild(loading);
                campo.value = '';
            }
        }
    });

    cleanButton.addEventListener('click', () => {
        filteredLivros = [];
        exibir();
    });

    async function searchLivros(nome) {
        try {
            const url = 'livros.json';
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Erro ao buscar livro. Status: ' + response.status);
            }

            const livrosData = await response.json();
            console.log('Livros encontrados:', livrosData);

            const records = livrosData.records; // Acessa os registros diretamente

            if (records && records.length > 0) {
                // Filtra os livros pelo nome fornecido
                filteredLivros = records.filter(record => {
                    return record[1] && record[1].toLowerCase() === nome.toLowerCase(); // Nome do livro está no índice 1
                });
                console.log('Livros filtrados:', filteredLivros);
                return filteredLivros.map(record => ({ nome: record[1], autor: record[4] })); // Autor do livro está no índice 4
            } else {
                throw new Error('Nenhum livro encontrado para o nome fornecido.');
            }
        } catch (error) {
            console.error("Erro ao buscar os livros:", error);
            throw error;
        }
    }

    function exibir(livrosData = []) {
        exibicao.innerHTML = '';

        if (livrosData.length > 0) {
            for (let i = 0; i < livrosData.length; i++) {
                const livro = livrosData[i];

                // Container div pai para armazenar todo o conteúdo
                const livroContainer = document.createElement('div');
                livroContainer.classList.add('livro-container');

                // Numeração para cada livro apenas para organizar
                const numeracao = document.createElement('span');
                numeracao.innerText = (i + 1);

                // Dados do livro
                const nomeLivro = document.createElement('div');
                nomeLivro.classList.add('nome-livro');
                nomeLivro.innerText = livro.nome;

                const autorLivro = document.createElement('div');
                autorLivro.classList.add('autor-livro');
                autorLivro.innerText = livro.autor;

                // Organização: botando dados do livro dentro de uma div e atribuindo uma classe
                const valuesAPI = document.createElement('div');
                valuesAPI.append(nomeLivro);
                valuesAPI.append(autorLivro);
                valuesAPI.classList.add('banco-de-dados-livros');

                // Exibição de dados dos livros
                livroContainer.appendChild(numeracao);
                livroContainer.appendChild(valuesAPI);

                exibicao.appendChild(livroContainer);
            }
        } else {
            const mensagem = document.createElement('h1');
            mensagem.innerText = 'Ops! Infelizmente nenhum livro foi encontrado pelo nome fornecido. Veja nossas recomendações abaixo.';
            mensagem.style.color = 'red';
            mensagem.style.fontFamily = 'Arial, sans-serif';
            mensagem.style.fontSize = '18px';
            exibicao.appendChild(mensagem);
        }
    }

    function createLoadingAnimation() {
        const loading = document.createElement('div');
        loading.classList.add('loading-container');
        const loadingImg = document.createElement('img');
        loadingImg.src = '/arquivos/icons8-spinner.gif';
        loadingImg.alt = 'Carregando...';
        loading.appendChild(loadingImg);
        return loading;
    }
});