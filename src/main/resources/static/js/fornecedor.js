// fornecedor.js

document.addEventListener("DOMContentLoaded", function () {
  const editarButtons = document.querySelectorAll(".btn-editar");

  editarButtons.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const linha = botao.closest("tr");
      const colunas = linha.querySelectorAll("td");

      // Preencher os inputs do formulário com os dados da linha
      document.getElementById("nome").value = colunas[0].innerText;
      document.getElementById("apelido").value = colunas[1].innerText;
      document.getElementById("telefone").value = colunas[2].innerText;
      document.getElementById("telemovel").value = colunas[3].innerText;
      document.getElementById("morada").value = colunas[4].innerText;
      document.getElementById("codpostal").value = colunas[5].innerText;
      document.getElementById("regiao").value = colunas[6].innerText;

      // Abrir o modal (se ainda não estiver com data-bs-toggle/data-bs-target)
      const modal = new bootstrap.Modal(document.getElementById('modalCadastro'));
      modal.show();
    });
  });
});


