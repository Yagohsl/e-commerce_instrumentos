document.addEventListener("DOMContentLoaded", function () {
    const priceFilters = document.querySelectorAll(".price-filter");
    const checkboxes = document.querySelectorAll(".form-check-input[type='checkbox']");
    const products = document.querySelectorAll(".card");

    // Adiciona eventos para os filtros
    priceFilters.forEach(filter => filter.addEventListener("change", filterProducts));
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterProducts));

    function filterProducts() {
        const selectedRange = document.querySelector(".price-filter:checked")?.value.split("-").map(Number) || [];
        const minPrice = selectedRange[0] || 0;
        const maxPrice = selectedRange[1] || Infinity;

        const selectedBrands = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.trim());

        products.forEach(product => {
            const priceText = product.querySelector(".card-text").innerText;
            const price = parseFloat(priceText.replace("R$", "").replace(".", "").replace(",", "."));

            const title = product.querySelector(".card-title").textContent;

            const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(brand => title.includes(brand));
            const matchesPrice = price >= minPrice && price <= maxPrice;

            if (matchesBrand && matchesPrice) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category");
    const cards = document.querySelectorAll(".card");

    categories.forEach(category => {
        category.addEventListener("click", function (e) {
            e.preventDefault(); // Impede a navegação padrão

            const selectedCategory = category.textContent.trim().toLowerCase();

            cards.forEach(card => {
                const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();

                // Se o título contém a categoria selecionada, mostra o card; senão, esconde
                if (cardTitle.includes(selectedCategory)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});


//LIMPA FILTRO

document.querySelector(".clean-filter").addEventListener("click", function () {
    // Desmarca todos os checkboxes e radio buttons
    document.querySelectorAll(".form-check-input").forEach(input => input.checked = false);

    // Exibe todos os produtos novamente
    document.querySelectorAll(".card").forEach(card => card.style.display = "flex");
});

document.querySelector(".clean-filter").addEventListener("click", function () {
    // Recarrega a página
    location.reload();
});
// Função para pegar o parâmetro 'search' da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Pega o valor da pesquisa da URL
const searchQuery = getQueryParam('search');

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar"); // Captura a barra de pesquisa
    const productCards = document.querySelectorAll(".card"); // Captura todos os produtos

    // Função para filtrar os produtos
    function filterProducts(searchTerm) {
        searchTerm = searchTerm.toLowerCase(); // Transforma a entrada do usuário em minúsculas
        productCards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase(); // Captura o título do produto
            if (title.includes(searchTerm)) {
                card.style.display = "flex"; // Mostra os produtos que correspondem
            } else {
                card.style.display = "none"; // Esconde os produtos que não correspondem
            }
        });
    }

    // Se houver um valor de pesquisa na URL, preenche o campo e já aplica o filtro
    if (searchQuery) {
        searchBar.value = searchQuery;
        filterProducts(searchQuery); // Aplica a filtragem imediatamente ao carregar a página
    }

    // Adiciona o evento de input para filtrar enquanto o usuário digita
    searchBar.addEventListener("input", function () {
        filterProducts(searchBar.value);
    });
});
