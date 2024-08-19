let button = document.getElementById("enviar");

window.onload = function() {
    let login = localStorage.getItem("login");

    console.log("Valor de login no localStorage:", login);

    if (login === "admin") {
        // Não faz nada, o admin pode ver o formulário
       
    } else if (login === "normal") {
        // Esconde o formulário para usuários normais
        let form = document.getElementById("formPosts"); 
        form.style.display = "none"

        
    } else {
        // Redireciona para a página de login se ninguém estiver logado
        window.location.href = "login.html"; 
    }
};


button.onclick = async function() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let conteudo = document.getElementById("conteudo").value;

    let dados = {titulo, autor, conteudo}

    const response = await fetch("http://localhost:3005/api/store/blog", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success){
        alert("Sucesso!")
        location.reload()

    } else {
        alert("Não foi criado");
        console.log(content.sql);
    }
}

