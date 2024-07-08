async function getUser () {

    const data = {email: 'email@email.com', password: '123'}


    // let titulo = document.getElementById("titulo").value;
    // let autor = document.getElementById("autor").value;
    // let conteudo = document.getElementById("conteudo").value;

    const response = await fetch('http://localhost:3005/api/login',{
    method: "POST",
    headers: {"Content-Type": "aplication/js"},
    body: JSON.stringify(data)

    });

    const result = await response.json();

    if(result.success) {
        console.log(result.data);
        alert(result.message);
    } else {
        alert(result.message);
    }
}

let call = getUser();