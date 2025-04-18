document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const mensagemErro = document.getElementById("mensagemErro");

  // Remover classes de erro
  usuario.classList.remove("is-invalid");
  senha.classList.remove("is-invalid");
  mensagemErro.textContent = "";

  // Verificação simples
  if (!usuario.value) {
    usuario.classList.add("is-invalid");
    return;
  }

  if (!senha.value) {
    senha.classList.add("is-invalid");
    return;
  }

  if (usuario.value === "admin" && senha.value === "1234") {
    mensagemErro.style.color = "green";
    mensagemErro.textContent = "Login bem-sucedido!";
    // Redirecionamento opcional:
    // window.location.href = "painel.html";
  } else {
    mensagemErro.style.color = "red";
    mensagemErro.textContent = "Usuário ou senha incorretos.";
  }
});

document.getElementById("toggleSenha").addEventListener("click", function () {
  const senha = document.getElementById("senha");
  senha.type = senha.type === "password" ? "text" : "password";
});
