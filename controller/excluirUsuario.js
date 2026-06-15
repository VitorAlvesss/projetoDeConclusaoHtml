
function excluirUsuario(id) {
    fetch(`${BASE_URL}usuarios/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        listarUsuarios();
    });


}