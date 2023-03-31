$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#data-checkin").mask("00/00/0000");
  $("#data-checkout").mask("00/00/0000");

  $("#contato").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      'data-checkin': {
        required: true,
      },
     'data-checkout': {
        required: true,
      },
     mensagem: {
        required: true,
      }
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos!`);
      }
    },
  });
});

