$(document).ready(function () {
  // Abrir modal para nova entrada
  $('[data-bs-target="#modalCadastro"]').on('click', function () {
    $('#modalCadastro form')[0].reset();
    $('#preview-foto').attr('src', 'img/logoCaixa.png');
    $('#nome-arquivo').text('');
    $('#remover-foto').addClass('d-none');
  });

  // Preencher modal com dados ao clicar em Editar
  $('#tabelaSaidas').on('click', '.btn-editar', function () {
    const linha = $(this).closest('tr');
    const colunas = linha.find('td');

    $('#data').val(colunas.eq(0).text());
    $('#quantidade').val(colunas.eq(1).text());
    $('#referencia').val(colunas.eq(2).text());
    $('#produto').val(colunas.eq(3).text());
    $('#tipo').val(colunas.eq(4).text());
    $('#responsavel').val(colunas.eq(5).text());
    $('#empresa').val(colunas.eq(6).text());
    $('#observacoes').val(colunas.eq(7).text());

    const modal = new bootstrap.Modal(document.getElementById('modalCadastro'));
    modal.show();
  });

  // Salvar produto
  $('.modal-footer .btn-success').on('click', function (e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Saída salva com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalCadastro'));
    modal.hide();
  });
});

$(document).ready(function () {
  $('#tabelaSaidas').DataTable({
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
