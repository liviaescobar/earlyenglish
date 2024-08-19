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
            let tipoUsuario = result.data.tipo;
            localStorage.setItem('login', tipoUsuario)     
            let nomeUsuario = result.data.name;
            localStorage.setItem('nome', nomeUsuario)           
            
            if (tipoUsuario === "admin") {
                // Não faz nada, o admin pode ver o formulário
                window.location.href = "blog.html"; 
            } else if (login === "normal") {
                // Esconde o formulário para usuários normais
                let form = document.getElementById("formPosts"); 
                form.style.display = "none"
                window.location.href = "blog.html"; 
                
            } else {
                // Redireciona para a página de login se ninguém estiver logado
                window.location.href = "login.html"; 
            }

            
        } else {
            alert(result.message);
        }
    };  