$(document).ready(function () {
  // Abrir modal para novo cadastro
  $('[data-bs-target="#modalCadastro"]').on('click', function () {
    $('#modalCadastro form')[0].reset();
    $('#preview-foto').attr('src', 'img/logoCaixa.png');
    $('#nome-arquivo').text('');
    $('#remover-foto').addClass('d-none');
  });

  // Preencher modal com dados ao clicar em Editar
  $('#tabelaProdutos').on('click', '.btn-editar', function () {
    const linha = $(this).closest('tr');
    const colunas = linha.find('td');

    $('#data').val(colunas.eq(0).text());
    $('#produto').val(colunas.eq(2).text());
    $('#fornecedor').val(colunas.eq(6).text());
    $('#quantidade').val(colunas.eq(5).text());

    const modal = new bootstrap.Modal(document.getElementById('modalCadastro'));
    modal.show();
  });

  // Salvar produto
  $('.modal-footer .btn-success').on('click', function (e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Produto salvo com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalCadastro'));
    modal.hide();
  });
});
