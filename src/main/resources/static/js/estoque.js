$(document).on('click', '.btn-editar', function () {
  var linha = $(this).closest('tr');

  // Pega os dados da linha
  var data = linha.find('td:eq(0)').text().trim();
  var codigo = linha.find('td:eq(1)').text().trim();
  var nome = linha.find('td:eq(2)').text().trim();
  var cat = linha.find('td:eq(3)').text().trim();
  var ref = linha.find('td:eq(4)').text().trim();
  var qtd = linha.find('td:eq(5)').text().trim();
  var fornecedor = linha.find('td:eq(6)').text().trim();

  // Preenche os campos da modal
  $('#data').val(data);
  $('#codigo').val(codigo);
  $('#nome').val(nome);
  $('#categoria').val(cat);
  $('#referencia').val(ref);
  $('#quantidade').val(qtd);
  $('#fornecedor').val(fornecedor);

  // Atualiza título da modal
  $('#modalCadastroLabel').text('Editar Produto');

  // Abre a modal
  var modal = new bootstrap.Modal(document.getElementById('modalCadastro'));
  modal.show();
});




// js/estoque.js
$(document).ready(function () {
  $('#tabelaEstoque').DataTable({
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
