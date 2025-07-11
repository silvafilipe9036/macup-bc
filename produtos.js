const produtos = [
  {
    nome: "MacBook Pro 2011 (com defeito)",
    preco: "R$ 350",
    status: "Para retirada de peças",
    imagem: "https://via.placeholder.com/300x200?text=Macbook+2011",
    link: "https://wa.me/5547992273420?text=Tenho+interesse+no+MacBook+Pro+2011"
  },
  {
    nome: "MacBook Air 2011 (imagem falhando)",
    preco: "R$ 400",
    status: "Precisa revisão de imagem",
    imagem: "https://via.placeholder.com/300x200?text=Macbook+Air+2011",
    link: "https://wa.me/5547992273420?text=Tenho+interesse+no+MacBook+Air+2011"
  },
  {
    nome: "MacBook Late 2008 (não liga)",
    preco: "R$ 250",
    status: "Não liga, com carregador",
    imagem: "https://via.placeholder.com/300x200?text=Macbook+2008",
    link: "https://wa.me/5547992273420?text=Tenho+interesse+no+MacBook+2008"
  }
];

const container = document.getElementById("produtos");

produtos.forEach((produto) => {
  container.innerHTML += `
    <div class="bg-white shadow p-4 rounded-lg">
      <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover mb-4 rounded" />
      <h2 class="text-xl font-semibold">${produto.nome}</h2>
      <p class="text-green-600 font-bold">${produto.preco}</p>
      <p class="text-sm text-gray-500 mb-4">${produto.status}</p>
      <a href="${produto.link}" target="_blank" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Falar no WhatsApp
      </a>
    </div>
  `;
});
