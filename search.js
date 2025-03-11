

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o comportamento padrão de envio de formulário
    const query = document.getElementById('searchQuery').value;
    if (query) {
        // Redireciona para a página de cards com a query como parâmetro na URL
        window.location.href = `./cards/cards.html?search=${encodeURIComponent(query)}`;
    }
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    const query = document.getElementById('searchBar').value;
    if (query) {
 
        window.location.href = `../cards/cards.html?search=${encodeURIComponent(query)}`;
    }
});

