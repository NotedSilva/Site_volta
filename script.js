document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    // Evita o envio do formulário tradicional
    event.preventDefault();

    // Exibe a mensagem de sucesso
    document.querySelector('.success-message').style.display = 'block';

    // Limpa o valor do campo de email após o envio (opcional)
    document.getElementById('newsletterForm').reset();
  });
});

