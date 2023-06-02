// Variáveis para obter informação dos campos e botão de enviar
var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var telefoneInput = document.getElementById('contato_cliente');
var textAreaInput = document.getElementById('texto');
var enviarBotao = document.getElementById('enviar');

// Evento para escutar campos do form
nomeInput.addEventListener('input', validarForm);
emailInput.addEventListener('input', validarForm);
telefoneInput.addEventListener('input', validarForm);
textAreaInput.addEventListener('input', validarForm);

// Validação dos campos para verificar se todos estão preenchidos
function validarForm() {
  if (nomeInput.value.trim() !== '' && emailInput.value.trim() !== '' && telefoneInput.value.trim() !== '' && textAreaInput.value.trim() !== '') {
    enviarBotao.disabled = false;
  } else {
    enviarBotao.disabled = true;
  }
}

//Emissão de alerta quando form ser enviado
enviarBotao.addEventListener('click', function(event) {
  event.preventDefault();
  alert('O formulário foi enviado com sucesso!');
});