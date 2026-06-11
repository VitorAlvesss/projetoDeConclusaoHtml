document.addEventListener("DOMContentLoaded", () =>{
    const nome = sessionStorage.getItem("nomeUsuario");
    if(nome != null){
        nomeDoUsuarioNaPagina(nome); 
        const perfil = document.getElementById("mudarNome");
        const cadastro = document.getElementById("linhaCadastro");
        perfil.classList.remove("esconder");
        cadastro.classList.add("esconder");
    }
});

function nomeDoUsuarioNaPagina(nome){
    const setandoNome = document.getElementById("mudarNome");
    setandoNome.textContent = "Olá, "+nome+"!" +" Acesse seu perfil aqui!";
}