//navbar ao rolar

// Detecta o evento de scroll
window.onscroll = function() {
    toggleNavbarBackground();
  };
  
  function toggleNavbarBackground() {
    const navbar = document.querySelector(".navbar");
  
    // Verifica a posição do scroll da página
    if (window.pageYOffset > 250) {
      navbar.classList.add("scrolled");  // Adiciona a classe quando rolar
    } else {
      navbar.classList.remove("scrolled");  // Remove a classe quando voltar ao topo
    }
  }
  


// Função para abrir o menu
function openMenu() {
    document.getElementById("menu").style.right = "0";
  }
  
  // Função para fechar o menu
  function closeMenu() {
    document.getElementById("menu").style.right = "-400px";
  }

  //CARRINHO
  let cart = []; // Carrinho de compras


// Função para adicionar produto ao carrinho
function addToCart(productName, productPrice, productImage) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice , image: productImage});

  // Atualiza a lista de produtos no carrinho
  updateCart();
}

// Função para atualizar o carrinho na tela
function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  // Limpar itens existentes no carrinho
  cartItemsContainer.innerHTML = '';

  // Atualiza os itens do carrinho
  cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `<div class="display-flex"><img src="${item.image}" width= "30%" style="border-radius: 10px; padding-left:5px; padding-right:10px; padding-bottom:10px; "> ${item.name}<br>
      
        R$ ${item.price.toFixed(2)}</div>
      `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Atualiza o preço total
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  totalPriceElement.innerHTML = `Total: R$ ${totalPrice.toFixed(2)}`;
}

// Iniciar o dropdown manualmente via JS
var dropdownElement = document.getElementById('navbarDropdown');
var dropdown = new bootstrap.Dropdown(dropdownElement);
dropdown.show(); // Para forçar o dropdown a abrir
