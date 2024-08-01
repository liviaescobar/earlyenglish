
let button = document.getElementById("handleSubmit");

button.onclick = async function(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description"). value;
    let data = {title,description}

    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "POST", 
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.succes){
        alert("Sucesso!")
    } else {
        alert("Não");
    }
}

