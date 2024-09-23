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

            // Cria um novo elemento <p> para o conteúdo do post
            const conteudo = document.createElement('p');
            conteudo.className = 'conteudo'; // Define a classe para estilização
            conteudo.textContent = blog.conteudo; // Define o texto do conteúdo como o conteúdo do blog


           // Cria o botão de editar
           const editButton = document.createElement('button');
           editButton.textContent = 'Editar';
           editButton.className = 'edit-button';
        

            // Cria o botão de excluir
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.className = 'delete-button'

            // Adiciona o ouvinte de evento para o botão de editar
            editButton.addEventListener('click', () => {
                // Função para editar o post
                console.log(`Editar post ID: ${blog.id}`);
                // Aqui você pode abrir um modal ou permitir edição inline
            });

            // Adiciona o ouvinte de evento para o botão de excluir
            deleteButton.addEventListener('click', async () => {
                // Função para excluir o post
                console.log(`Excluir post ID: ${blog.id}`);
                // Fazer uma requisição para o backend para excluir o post
                const deleteResponse = await fetch(`http://localhost:3005/api/delete/blog/${blog.id}`, {
                    method: 'DELETE'
                });

                const deleteResult = await deleteResponse.json();
                if (deleteResult.success) {
                    blogList.removeChild(bloggeral); // Remove o post da página
                } else {
                    console.log('Erro ao excluir:', deleteResult.message);
                }
            });

            // Adiciona o título, autor, conteúdo e botões ao contêiner
            quad.appendChild(titulo);
            quad.appendChild(autor);
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
