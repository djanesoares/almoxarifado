document.addEventListener("DOMContentLoaded", function () {
  const inputFoto = document.getElementById("foto");
  const preview = document.getElementById("preview-foto");
  const nomeArquivo = document.getElementById("nome-arquivo");
  const btnRemover = document.getElementById("remover-foto");

  if (inputFoto && preview && nomeArquivo && btnRemover) {
    inputFoto.addEventListener("change", function (event) {
      const file = event.target.files[0];

      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Por favor, selecione uma imagem válida.");
          inputFoto.value = "";
          return;
        }

        if (file.size > 2 * 1024 * 1024) {
          alert("A imagem deve ter no máximo 2MB.");
          inputFoto.value = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
          nomeArquivo.textContent = file.name;
          btnRemover.classList.remove("d-none");
        };
        reader.readAsDataURL(file);
      }
    });

    btnRemover.addEventListener("click", function () {
      inputFoto.value = "";
      preview.src = "#";
      preview.style.display = "none";
      nomeArquivo.textContent = "";
      btnRemover.classList.add("d-none");
    });
  }
});


