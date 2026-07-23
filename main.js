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
    youtubeUrl: "https://youtube.com/shorts/Mmzw3JbQkEM"
  },
  {
    id: 2,
    titulo: "Carrinho Seguidor de Linha",
    categoria: "robotica",
    tagTexto: "Robótica / Arduino",
    descricao: "Projeto de robótica com sensores infravermelhos para navegação autônoma em pistas.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    titulo: "Automação Residencial",
    categoria: "iot",
    tagTexto: "IoT / Programação",
    descricao: "Controle de iluminação e sensores de presença acionados por código e conexão sem fio.",
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
    const cardHTML = `
      <a href="${projeto.youtubeUrl}" target="_blank" class="card-link">
        <div class="card">
          <div class="capa-container">
            <div class="play-icon">▶</div>
            <span>Clique para abrir no YouTube</span>
          </div>

          <div class="card-body">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
          </div>

          <div class="card-footer">
            <span class="tag">${projeto.tagTexto}</span>
            <span class="btn-assistir">Ver no YouTube ↗</span>
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
  if (window.event && window.event.target) {
    window.event.target.classList.add('ativo');
  }

  carregarProjetos(categoria);
}

// Carrega os projetos assim que a página é aberta
document.addEventListener('DOMContentLoaded', () => {
  carregarProjetos();
});