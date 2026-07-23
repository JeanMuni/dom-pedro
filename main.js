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
    descricao: "Projeto baseado na Aula 16 do material de Robótica da SEED-PR. Os alunos programaram uma matriz de LED 8x8 para desenhar e exibir como estão se sentindo.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Mmzw3JbQkEM", 
    youtubeUrlOriginal: "https://youtube.com/shorts/Mmzw3JbQkEM",
    tutorialUrl: "https://aluno.escoladigital.pr.gov.br/sites/alunos/arquivos_restritos/files/documento/2023-04/aula16_como_estou_me_sentindo_ef_m2.pdf"
  },
  {
    id: 2,
    titulo: "Carrinho Seguidor de Linha",
    categoria: "robotica",
    tagTexto: "Robótica / Arduino",
    descricao: "Projeto de robótica com sensores infravermelhos para navegação autônoma em pistas.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    youtubeUrlOriginal: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tutorialUrl: "#"
  },
  {
    id: 3,
    titulo: "Automação Residencial",
    categoria: "iot",
    tagTexto: "IoT / Programação",
    descricao: "Controle de iluminação e sensores de presença acionados por código e conexão sem fio.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    youtubeUrlOriginal: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tutorialUrl: "#"
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
    // Verifica se o projeto tem tutorial em PDF vinculado
    const botaoTutorialHTML = projeto.tutorialUrl !== "#" 
      ? `<a href="${projeto.tutorialUrl}" target="_blank" class="btn-tutorial">📄 Aula em PDF ↗</a>` 
      : '';

    const cardHTML = `
      <div class="card">
        <div class="video-container">
          <iframe 
            src="${projeto.youtubeEmbedUrl}" 
            title="${projeto.titulo}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <div class="card-body">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </div>

        <div class="card-footer">
          <span class="tag">${projeto.tagTexto}</span>
          <div class="card-links">
            <a href="${projeto.youtubeUrlOriginal}" target="_blank" class="btn-youtube">▶ Ver no YouTube</a>
            ${botaoTutorialHTML}
          </div>
        </div>
      </div>
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