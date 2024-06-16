document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/blog');
    const result = await response.json();

    // <div class="blog">
    // <div class="quadro">
    //     <h1 class="titulo">Título do Texto</h1>
    //     <p class="autor">Autor do Texto</p>
    //     <p class="conteudo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget turpis a odio aliquet laoreet sit amet quis elit. </p>
    // </div> 
    // </div>

    if(result.success){
        const blogList = document.querySelector('.posts');
        result.data.forEach(blog => {
            const bloggeral = document.createElement('div');
            bloggeral.className = 'blog';

            const quad = document.createElement('div');
            quad.className = 'quadro';

            const titulo = document.createElement('h1');
            titulo.className = 'titulo';
            titulo.textContent = blog.titulo;

            const autor = document.createElement('p');
            autor.className = 'autor';
            autor.textContent = blog.autor;

            const conteudo = document.createElement('p');
            conteudo.className = 'conteudo';
            conteudo.textContent = blog.conteudo;


            quad.appendChild(titulo);
            quad.appendChild(autor);
            quad.appendChild(conteudo);

            bloggeral.appendChild(quad);

            blogList.appendChild(bloggeral);

        })
    }else{
        console.log("Erro", result.sql)
    }
}); 