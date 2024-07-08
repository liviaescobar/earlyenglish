let button = document.getElementById("enviar");

button.onclick = async function() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let conteudo = document.getElementById("conteudo").value;

    let dados = {titulo, autor, conteudo}

    const response = await fetch("http://localhost:3000/api/store/blog", {
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