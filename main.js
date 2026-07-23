// ==========================================================================
// DOM PEDRO II CONECTA - LÓGICA DO SITE (script.js)
// Escola Estadual D. Pedro II - Janiópolis/PR
// ==========================================================================

const projetos = [
  {
    id: 1,
    titulo: "Matriz de LED 8x8: Como estou me sentindo?",
    categoria: "robotica",
    tagTexto: "Arduino / SEED-PR",
    descricao: "Projeto com matriz de LED 8x8 programado pelos alunos da E.E. D. Pedro II para exibir emojis e expressões.",
    // Capa da thumbnail oficial do Shorts no YouTube
    imagemCapa: "https://img.youtube.com/vi/Mmzw3JbQkEM/hqdefault.jpg",
    // Link direto para o vídeo no YouTube
    youtubeUrl: "https://youtube.com/shorts/Mmzw3JbQkEM"
  },
  {
    id: 2,
    titulo: "Carrinho Seguidor de Linha",
    categoria: "robotica",
    tagTexto: "Robótica / Arduino",
    descricao: "Projeto de robótica com sensores infravermelhos para navegação autônoma em pistas.",
    imagemCapa: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    titulo: "Automação Residencial",
    categoria: "iot",
    tagTexto: "IoT / Programação",
    descricao: "Controle de iluminação e sensores de presença acionados por código e conexão sem fio.",
    imagemCapa: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

function carregarProjetos(filtro = 'todos') {
  const containerGrid = document.getElementById('grid-projetos');
  if (!containerGrid) return;

  containerGrid.innerHTML = '';

  const projetosFiltrados = filtro === 'todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === filtro);

  projetosFiltrados.forEach(projeto => {
    // Aqui transformamos todo o quadradinho (card) num link direto para o YouTube
    const cardHTML = `
      <a href="${projeto.youtubeUrl}" target="_blank" class="card-link">
        <div class="card">
          <div class="capa-container">
            <img src="${projeto.imagemCapa}" alt="${projeto.titulo}" class="capa-projeto">
            <div class="play-overlay">
              <span>▶ Assistir no YouTube</span>
            </div>
          </div>

          <div class="card-body">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
          </div>

          <div class="card-footer">
            <span class="tag">${projeto.tagTexto}</span>
          </div>
        </div>
      </a>
    `;
    containerGrid.innerHTML += cardHTML;
  });
}

function filtrarProjetos(categoria) {
  const botoes = document.querySelectorAll('.btn-filtro');
  botoes.forEach(btn => btn.classList.remove('ativo'));
  if (event && event.target) {
    event.target.classList.add('ativo');
  }

  carregarProjetos(categoria);
}

document.addEventListener('DOMContentLoaded', () => {
  carregarProjetos();
});