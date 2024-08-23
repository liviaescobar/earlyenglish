// Obtém a referência ao elemento HTML com o ID "entrar" - que é um botão
let button = document.getElementById("entrar");

// Define um manipulador de eventos para o clique do botão
button.onclick = async function() {
    // Imprime uma mensagem no console para depuração
    console.log("ffff");

    // Obtém os valores dos campos de entrada com os IDs "email" e "senha"
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
    // Cria um objeto com os dados coletados dos campos de entrada
    let data = { email, senha };

    // Envia uma solicitação POST para o endpoint de login
    // O método 'async' permite usar 'await' dentro desta função
    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST", // Define o método HTTP como POST
        headers: {
            "Content-type": "application/json;charset=UTF-8" // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converte o objeto data para uma string JSON
    });

    // Converte a resposta da solicitação para formato JSON
    const result = await response.json();

    // Verifica se a resposta indica sucesso
    if(result.success) {
        // Imprime os dados do usuário no console para depuração
        console.log(result.data);

        // Obtém o tipo de usuário e armazena no localStorage
        let tipoUsuario = result.data.tipo;
        localStorage.setItem('login', tipoUsuario);

        // Obtém o nome do usuário e armazena no localStorage
        let nomeUsuario = result.data.name;
        localStorage.setItem('nome', nomeUsuario);
        
        // Redireciona com base no tipo de usuário
        if (tipoUsuario === "admin") {
            // Se o usuário for admin, redireciona para a página do blog
            window.location.href = "blog.html";
        } else if (tipoUsuario === "normal") {
            // Se o usuário for normal, esconde o formulário e redireciona para o blog
            let form = document.getElementById("formPosts");
            if (form) {
                form.style.display = "none"; // Esconde o formulário
            }
            window.location.href = "blog.html";
        } else {
            // Se o tipo de usuário não for reconhecido, redireciona para a página de login
            window.location.href = "login.html";
        }
    } else {
        // Se a resposta indicar falha, exibe uma mensagem de erro
        alert(result.message);
    }
};
