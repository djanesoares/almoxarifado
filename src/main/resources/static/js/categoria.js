$(document).on('click', '.btn-editar', function () {
  // Pega a linha (tr) do botão clicado
  var linha = $(this).closest('tr');

  // Coleta os dados das colunas (td)
  var data = linha.find('td:eq(0)').text().trim();
  var codigo = linha.find('td:eq(1)').text().trim();
  var nome = linha.find('td:eq(2)').text().trim();
  var obs = linha.find('td:eq(3)').text().trim();

  // Preenche os campos da modal com os valores
  $('#data').val(data);
  $('#codigo').val(codigo);
  $('#nome').val(nome);
  $('#observacoes').val(obs);

  // Muda o título do modal se quiser
  $('#modalCadastroLabel').text('Editar Categoria');
});



// js/categoria.js
$(document).ready(function () {
  $('#tabelaCategorias').DataTable({
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
