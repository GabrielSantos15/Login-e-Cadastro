function verSenha(containerSenha) {
  const senhaInput = document.querySelector(`#${containerSenha} > input`);
  const senhaIcone = document.querySelector(`#${containerSenha} > i`);

  if (senhaInput.type == "password") {
    senhaInput.type = "text";
    senhaIcone.classList.remove("fa-eye-slash");
    senhaIcone.classList.add("fa-eye");
  } else {
    senhaInput.type = "password";
    senhaIcone.classList.remove("fa-eye");
    senhaIcone.classList.add("fa-eye-slash");
  }
}

document.querySelector("#criarConta span").addEventListener("click", () => {
  document.querySelector("#login").style.transform = "rotateY(-180deg)";
  document.querySelector("#cadastro").style.transform = "rotateY(0deg)";
});
document.querySelector("#entrarConta span").addEventListener("click", () => {
  document.querySelector("#login").style.transform = "rotateY(0deg)";
  document.querySelector("#cadastro").style.transform = "rotateY(180deg)";
});
