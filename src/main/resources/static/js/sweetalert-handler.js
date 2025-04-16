// Alerta de sucesso e fechamento de modal
$(document).ready(function () {
  $('.modal-footer .btn-success').on('click', function (e) {
    e.preventDefault();

    // Mostra alerta
    Swal.fire({
      icon: 'success',
      title: 'Produto cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        // Fecha a modal DEPOIS que o alerta some
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalCadastro'));
        if (modal) modal.hide();
      }
    });
  });
});
