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
  }
];

function carregarProjetos() {
  const containerGrid = document.getElementById('grid-projetos');
  if (!containerGrid) return;

  containerGrid.innerHTML = '';

  projetos.forEach(projeto => {
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

// Executa a função assim que o HTML terminar de carregar
document.addEventListener('DOMContentLoaded', carregarProjetos);