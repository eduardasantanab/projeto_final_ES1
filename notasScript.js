  document.getElementById('mostrarBotoes').addEventListener('click', function() {
    var anosDiv = document.getElementById('anos');
    anosDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior
  
    // Cria botões para cada ano de 2000 a 2024
    for (var ano = 2000; ano <= 2024; ano++) {
      var botaoAno = document.createElement('button');
      botaoAno.textContent = ano;
      botaoAno.classList.add('btn', 'btn-secondary', 'me-2', 'mb-2'); // Adiciona classes do Bootstrap
      anosDiv.appendChild(botaoAno);
    }

    anosDiv.style.display = 'block'; // Mostra os botões de anos

  });
  