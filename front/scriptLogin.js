let button = document.getElementById("entrar");

        button.onclick = async function() {
            console.log("ffff")
            let email = document.getElementById("email").value;
            let senha = document.getElementById("senha").value;
            
            let data = {email, senha}

        const response = await fetch('http://localhost:3005/api/login',{
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
        })

        const result = await response.json();

        if(result.success) {
            console.log(result.data);
            //salvar no localstorage
            window.location.href = "index.html";
        } else {
            alert(result.message);
        }
    };  