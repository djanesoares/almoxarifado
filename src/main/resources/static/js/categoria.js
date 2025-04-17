document.addEventListener("DOMContentLoaded", function () {
  // Pega todos os botões de editar (com a classe btn-editar)
  const editarButtons = document.querySelectorAll(".btn-editar");

  // Adiciona um ouvinte de evento para cada botão de editar
  editarButtons.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const linha = botao.closest("tr");  // Encontra a linha da tabela clicada
      const colunas = linha.querySelectorAll("td");  // Pega as colunas da linha

      // Preenche os campos do formulário do modal com os valores da tabela
      document.getElementById("data").value = colunas[0].innerText.trim();        // Preencher Data
      document.getElementById("nome").value = colunas[2].innerText.trim();        // Preencher Nome Categoria
      document.getElementById("observacoes").value = colunas[3].innerText.trim();  // Preencher Observações

      // Abre o modal
      const modal = new bootstrap.Modal(document.getElementById('modalCadastro'));
      modal.show();
    });
  });
});


// js/fornecedor.js
$(document).ready(function () {
  $('#tabelaFornecedor').DataTable({
    language: {
      "lengthMenu": "Mostrar _MENU_ registros por página",
      "zeroRecords": "Nenhum resultado encontrado",
      "info": "Mostrando página _PAGE_ de _PAGES_",
      "infoEmpty": "Nenhum registro disponível",
      "infoFiltered": "(filtrado de _MAX_ registros no total)",
      "search": "Pesquisar:",
      "paginate": {
        "first": "Primeira",
        "last": "Última",
        "next": "Próxima",
        "previous": "Anterior"
      }
    }
  });
});
