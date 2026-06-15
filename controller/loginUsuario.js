const btnEntrar = document.getElementById("btnLogar");
const formulario = document.getElementById("formUsuarios")

btnEntrar.addEventListener("click", (event) =>{
    event.preventDefault();
    const usuario = obtendoDadosUsuarioLogin(formulario);

    fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())          
        .then(dados => {
            if(dados.mensagem === "Login feito com sucesso."){
                console.log("Usuário logado: ", dados);
                console.log(dados.nome)
                mensagemNaTelaPositiva("Login feito com sucesso!")
                setTimeout(() =>{
                    sessionStorage.setItem("nomeUsuario", dados.nome)
                    sessionStorage.setItem("permissaoUsuario", dados.permissao)
                    sessionStorage.setItem("idUsuario", dados.id);
                    window.location.href = "projetoConclusaoHtml.html"               
                }, 2000);
            }
            else{
                mensagemNaTela("Erro ao fazer login. Tente novamente.")
            }               
        })           
})

function obtendoDadosUsuarioLogin(formulario){
    return {
        email: formulario.email.value,
        senha: formulario.senha.value
    }
}