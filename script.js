const livros = [
  { titulo: "Android Básico", tema: "Tecnologia", quantidade: 10, disponivel: true, valor: 59.90 },
  { titulo: "Kotlin Avançado", tema: "Tecnologia", quantidade: 5, disponivel: true, valor: 79.90 },
  { titulo: "Romance Brasil", tema: "Romance", quantidade: 0, disponivel: false, valor: 39.90 }
];

let carrinho = [];

// Mostrar telas
function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => t.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Listar livros
function carregarLivros(lista = livros) {
  const ul = document.getElementById("listaLivros");
  ul.innerHTML = "";

  lista.forEach((livro, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${livro.titulo}</b><br>
      Tema: ${livro.tema} <br>
      Quantidade: ${livro.quantidade} <br>
      Disponível: ${livro.disponivel ? "Sim" : "Não"} <br>
      Valor: R$ ${livro.valor} <br>
      <button onclick="adicionarCarrinho(${index})">Adicionar ao Carrinho</button>
    `;

    ul.appendChild(li);
  });
}

// Filtro
function filtrar() {
  const texto = document.getElementById("filtro").value.toLowerCase();

  const filtrados = livros.filter(l =>
    l.tema.toLowerCase().includes(texto)
  );

  carregarLivros(filtrados);
}

// Carrinho
function adicionarCarrinho(index) {
  carrinho.push(livros[index]);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const ul = document.getElementById("itensCarrinho");
  ul.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.titulo} - R$ ${item.valor}`;
    ul.appendChild(li);
  });
}

// Email
function enviarEmail() {
  window.location.href = "mailto:contato@email.com?subject=Compra de livros";
}

// WhatsApp
function abrirWhats() {
  window.open("https://wa.me/5599999999999", "_blank");
}

// Inicializar
carregarLivros();