document.addEventListener("DOMContentLoaded", () => {
    const nome = sessionStorage.getItem("nomeUsuario");
    if(nome != null){
        const perfis = document.querySelectorAll(".mudarNome");
        const cadastros = document.querySelectorAll(".linhaCadastro");

        perfis.forEach(perfil => {
            perfil.textContent = "Olá, " + nome + "! Acesse seu perfil aqui!";
            perfil.classList.remove("esconder");
        });

        cadastros.forEach(cadastro => {
            cadastro.classList.add("esconder");
        });
    }
});