// Adiciona um ouvinte de evento que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', async () => {
    // Faz uma solicitação para obter os dados do blog do servidor
    // A palavra-chave 'async' permite que usemos 'await' dentro desta função
    const response = await fetch('http://localhost:3005/api/get/blog');
    
    // Converte a resposta da solicitação para formato JSON
    const result = await response.json();

    // Verifica se a solicitação foi bem-sucedida
    if(result.success){
        // Seleciona o elemento HTML com a classe 'posts', onde os posts do blog serão adicionados
        const blogList = document.querySelector('.posts');

        // Itera sobre cada item no array 'result.data', que contém os dados dos posts do blog
        result.data.forEach(blog => {
            // Cria um novo elemento <div> para representar um post do blog
            const bloggeral = document.createElement('div');
            bloggeral.className = 'blog'; // Define a classe para estilização

            // Cria um novo elemento <div> para servir como contêiner do post do blog
            const quad = document.createElement('div');
            quad.className = 'quadro'; // Define a classe para estilização

            // Cria um novo elemento <h1> para o título do post
            const titulo = document.createElement('h1');
            titulo.className = 'titulo'; // Define a classe para estilização
            titulo.textContent = blog.titulo; // Define o texto do título como o título do blog

            // Cria um novo elemento <p> para o autor do post
            const autor = document.createElement('p');
            autor.className = 'autor'; // Define a classe para estilização
            autor.textContent = blog.autor; // Define o texto do autor como o autor do blog

            const arquivo = document.createElement('a');
            arquivo.className = 'arquivo'; // Define a classe para estilização
            arquivo.textContent = "Baixar PDF"; // Define o arquivo do blog

            arquivo.href = "http://localhost:3005/uploads/" + blog.arquivo; //Caminho para o arquivo
            arquivo.target = "_blank" 
            arquivo.download = blog.arquivo; // Define o nome do arquivo para download

            // Cria um novo elemento <p> para o conteúdo do post
            const conteudo = document.createElement('p');
            conteudo.className = 'conteudo'; // Define a classe para estilização
            conteudo.textContent = blog.conteudo; // Define o texto do conteúdo como o conteúdo do blog


           // Cria o botão de editar
           const editButton = document.createElement('p'); //está aqui apenas para não apagar o bloco do post (?)
        
            // Cria o botão de excluir
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'EXCLUIR';
            deleteButton.className = 'delete-button';

            if(localStorage.getItem('login') == 'normal') {
                deleteButton.style.display = 'none';
            }
            
            // Adiciona o ouvinte de evento para o botão de excluir
            deleteButton.addEventListener('click', async () => {
                // Função para excluir o post
                console.log(`Excluir post ID: ${blog.id}`);
                // Fazer uma requisição para o backend para excluir o post
                const deleteResponse = await fetch(`http://localhost:3005/api/delete/blog/${blog.id}`, {
                    method: 'DELETE'
                });

                const deleteResult = await deleteResponse.json();
                const confirmDelete = confirm('Você tem certeza que quer apagar?');

                // Se o usuário clicar em "Sim" (confirmar), a exclusão é executada
                if (confirmDelete) {
                    // Aqui você coloca o código para realizar a exclusão
                    if (deleteResult.success) {
                        blogList.removeChild(bloggeral); // Remove o post da página
                    } else {
                        console.log('Erro ao excluir:', deleteResult.message);
                    }
                    alert('Item excluído');
                } else {
                    // Se o usuário clicar em "Não", a função termina sem fazer nada
                    alert('Item não excluido') // Ou você pode simplesmente não fazer nada aqui, pois a execução é interrompida
                }
            });

            // Adiciona o título, autor, conteúdo e botões ao contêiner
            quad.appendChild(titulo);
            quad.appendChild(autor);
            quad.appendChild(arquivo);
            quad.appendChild(conteudo);
            quad.appendChild(editButton);
            quad.appendChild(deleteButton);


            // Adiciona o contêiner do post ao elemento principal do blog
            bloggeral.appendChild(quad);

            // Adiciona o post do blog ao elemento que contém todos os posts
            blogList.appendChild(bloggeral);
        })
    } else {
        // Se a solicitação não for bem-sucedida, exibe um erro no console
        console.log("Erro", result.sql);
    }
});
