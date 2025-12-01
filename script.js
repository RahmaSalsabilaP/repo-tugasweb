const products = [
  { id:1, title:"Tote Leather Elegance", price:379000, img:"https://source.unsplash.com/400x400/?tote,bag", desc:"Tote kulit elegan, cocok untuk kerja & hangout." },
  { id:2, title:"Classic Crossbody", price:249000, img:"https://source.unsplash.com/400x400/?crossbody,bag", desc:"Tas selempang simpel, pas untuk sehari-hari." },
  { id:3, title:"Chic Clutch", price:149000, img:"https://source.unsplash.com/400x400/?clutch,bag", desc:"Clutch kecil elegan untuk pesta & acara formal." },
  { id:4, title:"City Backpack", price:319000, img:"https://source.unsplash.com/400x400/?backpack,bag", desc:"Backpack stylish untuk kuliah, kerja, atau jalan." },
  { id:5, title:"Mini Shoulder Bag", price:189000, img:"https://source.unsplash.com/400x400/?shoulder,bag", desc:"Tas kecil bahu dengan desain chic & modern." },
  { id:6, title:"Luxury Handbag", price:459000, img:"https://source.unsplash.com/400x400/?handbag,fashion", desc:"Handbag premium, cocok untuk gaya elegan." }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
let cart = [];

// render produk
if (productList) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="price">Rp ${p.price.toLocaleString()}</div>
        <button onclick="addToCart(${p.id})">Tambah ke Keranjang</button>
      </div>`;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((c, i) => {
    total += c.price;
    cartItems.innerHTML += `<div>${c.title} - Rp ${c.price.toLocaleString()} <button onclick="removeItem(${i})">❌</button></div>`;
  });
  totalPrice.textContent = "Rp " + total.toLocaleString();
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

// checkout
const btnCheckout = document.getElementById("btnCheckout");
if (btnCheckout) {
  btnCheckout.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Keranjang kosong!");
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
  });
}
