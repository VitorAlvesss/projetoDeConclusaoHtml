
const btnBuscarTodos = document.getElementById("btnBuscar");
const corpoTabela = document.getElementById("corpoTabela");

function listarUsuarios() {
    corpoTabela.innerHTML = "";
    fetch(`${BASE_URL}usuarios`)
        .then(response => response.json())
        .then(dados => {
            dados.forEach(usuario => {
                corpoTabela.appendChild(criaLinhaUsuario(usuario));
            });
        });      
};


btnBuscarTodos.addEventListener("click", () => {
    listarUsuarios();
});