async function showDados(nome,sobrenome,cpf,cep,email,foto_perfil_url) {
    const s = nome + " " + sobrenome;
    document.getElementById("nome_sobrenome").innerHTML = s
    document.getElementById("nome").innerHTML = nome
    document.getElementById("sobrenome").innerHTML = sobrenome
    document.getElementById("email").innerHTML = email
    document.getElementById("cep").innerHTML = cep
    document.getElementById("cpf").innerHTML = cpf
    document.getElementById("foto_perfil").src = foto_perfil_url;
}