document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    const message = document.getElementById('message').value.trim();

    // Número de telefone fixo desejado (alterar para o número de sua escolha)
    const phoneNumber = '51998694371'; // Exemplo: 55 + DDD + número do WhatsApp

    // Verifica se a mensagem não está vazia
    if (message) {
        // Codifica a mensagem para ser usada em uma URL
        const encodedMessage = encodeURIComponent(message);

        // Cria o link do WhatsApp com o número fixo e a mensagem personalizada
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Exibe uma mensagem de redirecionamento
        document.getElementById('redirectMessage').textContent = "Você será redirecionado para o WhatsApp...";

        // Redireciona para o WhatsApp com a mensagem e número predefinidos
        window.location.href = whatsappUrl;
    } else {
        document.getElementById('redirectMessage').textContent = "Por favor, digite uma mensagem.";
    }
});
