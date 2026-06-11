
function excluirUsuario(id) {
    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        listarUsuarios();
    });


}