// Quando a página é carregada, o código abaixo é executado
window.onload = function() {
    // Obtém o valor armazenado no localStorage com a chave "login"
    let login = localStorage.getItem("login");

    // Mostra o valor de "login" no console para depuração
    console.log("Valor de login no localStorage:", login);

    // Verifica se o valor de "login" é null ou uma string vazia
    if (login === null || login.trim() === "") {
        // Se não houver valor ou o valor estiver vazio, redireciona para a página de login
        window.location.href = "login.html";
    } else if (login === "admin") {
        // Se o valor for "admin", não faz nada, permitindo que o admin veja o formulário
    } else if (login === "normal") {
        // Se o valor for "normal", esconde o formulário para o usuário normal
        let form = document.getElementById("formPosts");
        if (form) {
            form.style.display = "none"; // Esconde o formulário
        }
    }
};

// Quando a página é carregada, o código abaixo é executado novamente
window.onload = function() {
    // Obtém o valor armazenado no localStorage com as chaves "login" e "nome"
    let login = localStorage.getItem("login");
    let nome = localStorage.getItem("nome");

    // Mostra o valor de "login" no console para depuração
    console.log("Valor de login no localStorage:", login);

    // Verifica se o valor de "login" é "admin" ou "normal"
    if (login === "admin" || login === "normal") {
        // Seleciona o elemento <header> da página
        let header = document.querySelector("header");

        // Cria um novo elemento <p> para a saudação personalizada
        let saudacao = document.createElement("p");
        saudacao.className = "saudacao"; 
        saudacao.textContent = "Olá, " + nome + "!"; // Define o texto da saudação
        header.appendChild(saudacao); // Adiciona a saudação ao header

        // Cria um novo botão de "SAIR"
        let botaoSair = document.createElement("button");
        botaoSair.id = "botaoSair"; // Define o ID do botão
        botaoSair.textContent = "SAIR"; // Define o texto do botão
        botaoSair.onclick = function() {
            // Define o que acontece quando o botão é clicado
            localStorage.removeItem("login"); // Remove o item "login" do localStorage
            localStorage.removeItem("nome"); // Remove o item "nome" do localStorage
            window.location.href = "login.html"; // Redireciona para a página de login
        };
        header.appendChild(botaoSair); // Adiciona o botão ao header

        // Seleciona o elemento com a classe "botoes_cadastroelogin"
        let botoesCadastroLogin = document.querySelector(".botoes_cadastroelogin");
        if (botoesCadastroLogin) {
            botoesCadastroLogin.innerHTML = ""; // Limpa o conteúdo desse elemento
        }
    }
};
