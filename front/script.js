window.onload = function() {
    let login = localStorage.getItem("login");

    console.log("Valor de login no localStorage:", login);

    if (login === "admin") {
        // Não faz nada, o admin pode ver o formulário
       
    } else if (login === "normal") {
        // Esconde o formulário para usuários normais
        let form = document.getElementById("formPosts"); 
        form.style.display = "none"
    }
};

window.onload = function() {
    let login = localStorage.getItem("login");
    let nome = localStorage.getItem("nome");

    console.log("Valor de login no localStorage:", login);

    if (login === "admin" || login === "normal") {
        // Seleciona o header da página
        let header = document.querySelector("header");

        // Cria e adiciona a saudação personalizada
        let saudacao = document.createElement("p");
        saudacao.className = "saudacao"
        saudacao.textContent = "Olá, " + nome + "!";
        header.appendChild(saudacao);

        // Cria e adiciona o botão de sair
        let botaoSair = document.createElement("button");
        botaoSair.id = "botaoSair"
        botaoSair.textContent = "SAIR";
        botaoSair.onclick = function() {
            localStorage.removeItem("login");
            localStorage.removeItem("nome");
            window.location.href = "login.html"; // Redireciona para a página de login
        };
        header.appendChild(botaoSair);

        // Esvazia o conteúdo da classe "botoes_cadastroelogin"
        let botoesCadastroLogin = document.querySelector(".botoes_cadastroelogin");
        if (botoesCadastroLogin) {
            botoesCadastroLogin.innerHTML = "";
        }
    }

    if (login === "normal") {
        // Esconde o formulário para usuários normais
        let form = document.getElementById("formPosts"); 
        form.style.display = "none";
    }
};
