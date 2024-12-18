function abrirMenu() {
    var botao = document.getElementById("botaoMenu");
    var menu = document.getElementById("menu");

    botao.classList.add("hidden");

    menu.style.display = "block";
}

window.onclick = function(event) {
    var botao = document.getElementById("botaoMenu");
    var menu = document.getElementById("menu");

    if (!event.target.matches('#botaoMenu') && !event.target.matches('#menu') && !event.target.matches('#menu a')) {

        if (menu.style.display === "block") {
            menu.style.display = "none";
            botao.classList.remove("hidden");
        }
    }
}

