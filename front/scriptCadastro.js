// Obtém a referência ao elemento HTML com o ID "cadastre" - que é um botão
let button = document.getElementById("cadastre");

// Define um manipulador de eventos para o clique do botão
button.onclick = async function() {
    // Obtém os valores dos campos de entrada com os IDs "name", "email", "sexo" e "senha"
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("sexo").value;
    let senha = document.getElementById("senha").value;
    
    // Cria um objeto com os dados coletados dos campos de entrada
    let data = { name, email, sexo, senha };

    // Envia uma solicitação POST para o endpoint de criação de usuário
    // O método 'async' permite usar 'await' dentro desta função
    const response = await fetch('http://localhost:3005/api/user/create', {
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
        // Imprime os dados retornados no console para depuração
        console.log(result.data);
        // Redireciona o usuário para a página de login
        window.location.href = "login.html";
    } else {
        // Exibe uma mensagem de erro se a criação do usuário falhar
        alert(result.message);
    }
};
