let button = document.getElementById("cadastre");

        button.onclick = async function() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let sexo = document.getElementById("sexo").value;
            let senha = document.getElementById("senha").value;
            
            let data = {name, email, sexo, senha}

        const response = await fetch('http://localhost:3005/api/user/create',{
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
        })

        const result = await response.json();

        if(result.success) {
            console.log(result.data);
            alert(result.message);
            window.location.href = "login.html";
        } else {
            alert(result.message);
        }
    }

    
