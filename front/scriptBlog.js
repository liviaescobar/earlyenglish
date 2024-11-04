// Obtém a referência ao elemento HTML com o ID "enviar", que geralmente é um botão
let button = document.getElementById("enviar");

// Define o que deve acontecer quando o botão é clicado
button.onclick = async function() {

    let form = document.getElementById("formPosts");
    let dadosForm = new FormData(form);

    // O pedido é do tipo POST, o que significa que estamos enviando dados para o servidor
    const response = await fetch("http://localhost:3005/api/store/blog", {
        method: "POST", // Define que estamos usando o método POST para enviar dados
        
        body: dadosForm // Converte o objeto 'dados' em uma string JSON para enviar no corpo do pedido
    });

    // Aguarda a resposta do servidor e converte o conteúdo da resposta para o formato JSON
    let content = await response.json(); // A variável 'content' agora contém a resposta do servidor em formato JSON

    // Verifica se a resposta do servidor indica que a operação foi bem-sucedida
    if(content.success) {
        alert("Sucesso!"); // Exibe uma mensagem para o usuário indicando que o envio foi bem-sucedido
        location.reload(); // Recarrega a página para mostrar as atualizações ou limpar o formulário
    } else {
        alert("Não foi criado"); // Exibe uma mensagem para o usuário indicando que houve uma falha
        console.log(content.sql); // Mostra no console a propriedade 'sql' da resposta para ajudar na depuração (normalmente, contém detalhes do erro)
    }
}
