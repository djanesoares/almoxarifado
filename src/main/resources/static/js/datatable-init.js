// js/datatable-init.js
$(document).ready(function () {
  $('table').each(function () {
    $(this).DataTable({
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
});
