const { Script } = require("vm")

document.addEventListener("DOMContentLoaded", function() {
    // Validação de Pesquisa
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        if (searchInput.value.trim() === "") {
            alert("Por favor, insira um termo de busca.");
        } else {
          
        }
    });

    // Funcionalidade para Copiar Cupom
    const copyButtons = document.querySelectorAll(".btn-copiar");

    copyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const couponCode = button.getAttribute("data-cupom");
            if (couponCode) {
                navigator.clipboard.writeText(couponCode).then(() => {
                    alert("Cupom copiado para a área de transferência!");
                }).catch(err => {
                    alert("Não foi possível copiar o cupom.");
                });
            } else {
                alert("Nenhum cupom disponível para este produto.");
            }
        });
    });

    // Verificação de Links Quebrados
    const productLinks = document.querySelectorAll(".btn-comprar");

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const url = link.getAttribute("href");
            if (!url || url === "#") {
                event.preventDefault();
                alert("Este link está quebrado ou não disponível no momento.");
            }
        });
    });
});