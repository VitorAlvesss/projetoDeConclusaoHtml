function criaLinhaUsuario(usuario) {
    var tr = document.createElement("tr");
    tr.dataset.id = usuario.id;

    var tdNome = document.createElement("td");
    tdNome.textContent = usuario.nome;

    var tdEmail = document.createElement("td");
    tdEmail.textContent = usuario.email;

    var tdAcoes = document.createElement("td");

    var btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";

    btnExcluir.classList.add("botaoExcluir");

    btnExcluir.addEventListener("click", () => {
        excluirUsuario(tr.dataset.id);
    });


    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";

    btnEditar.addEventListener("click", () => {
        modal.dataset.id = tr.dataset.id;
        document.getElementById("nomeModal").value = usuario.nome;
        document.getElementById("emailModal").value = usuario.email;
        modal.showModal();
    });

    tdAcoes.appendChild(btnExcluir);
    tdAcoes.appendChild(btnEditar);

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAcoes);

    return tr;
}