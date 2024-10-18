document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner'); // Seleciona o banner de cookies
    const acceptButton = document.getElementById('accept-cookies'); // Seleciona o botão de aceitar
    const declineButton = document.getElementById('decline-cookies'); // Seleciona o botão de recusar

    // Verifica se o cookie já foi aceito
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block'; // Exibe o banner
        console.log('Banner de cookies exibido'); // Log para depuração
    } else {
        console.log('Cookies já aceitos ou recusados');
    }

    // Ação ao clicar no botão de aceitar
    acceptButton.addEventListener('click', function() {
        console.log('Botão Aceitar clicado'); // Log para depuração
        localStorage.setItem('cookiesAccepted', 'true'); // Armazena a aceitação
        cookieBanner.style.display = 'none'; // Oculta o banner
        alert('Cookies aceitos!'); // Alerta opcional para confirmação
    });

    // Ação ao clicar no botão de recusar
    declineButton.addEventListener('click', function() {
        console.log('Botão Recusar clicado'); // Log para depuração
        localStorage.setItem('cookiesAccepted', 'false'); // Armazena a recusa
        cookieBanner.style.display = 'none'; // Oculta o banner
        alert('Cookies recusados!'); // Alerta opcional para confirmação
    });
});
