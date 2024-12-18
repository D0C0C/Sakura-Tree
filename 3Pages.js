function PesquisarLinks() {
    const filtro = document.getElementById('searchInput').value.toLowerCase();
    const itens = document.querySelectorAll('.item-catalogo');
    itens.forEach(function(item) {
        const nomeSite = item.getAttribute('data-link').toLowerCase();
        if (nomeSite.includes(filtro)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}