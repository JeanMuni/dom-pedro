// ==========================================================================
// DOM PEDRO II CONECTA - LÓGICA INTERATIVA (script.js)
// Escola Estadual D. Pedro II - Janiópolis/PR (NRE Goioerê)
// ==========================================================================

// 1. Dados dos Projetos (Facilita adicionar novos projetos no futuro)
const projetos = [
  {
    id: 1,
    titulo: "Carrinho Seguidor de Linha",
    categoria: "robotica",
    tagTexto: "Robótica / Arduino",
    descricao: "Projeto de robótica com sensores infravermelhos para navegação autônoma em pistas.",
    detalhes: "Desenvolvido com plataforma Arduino Uno, ponte H L298N e sensores ópticos. Os alunos programaram a lógica em C++ para ajuste de velocidade e curva automática."
  },
  {
    id: 2,
    titulo: "Automação Residencial",
    categoria: "iot",
    tagTexto: "IoT / Programação",
    descricao: "Controle de iluminação e sensores de presença acionados por código e conexão sem fio.",
    detalhes: "Utiliza a placa ESP32 com módulo Wi-Fi. Permite acionar lâmpadas através de uma página web simples criada pela própria turma."
  },
  {
    id: 3,
    titulo: "Braço Robótico Articulado",
    categoria: "maker",
    tagTexto: "Engenharia / Maker",
    descricao: "Montagem física e programação de servomotores para manipulação de pequenos objetos.",
    detalhes: "Estrutura cortada em acrílico/MDF com 4 servomotores SG90, controlados via potenciômetros e rotinas gravadas em código."
  }
];

// 2. Função para Renderizar os Cards no HTML
function carregarProjetos(filtro = 'todos') {
  const containerGrid = document.getElementById('grid-projetos');
  if (!containerGrid) return;

  containerGrid.innerHTML = '';

  const projetosFiltrados = filtro === 'todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === filtro);

  projetosFiltrados.forEach(projeto => {
    const cardHTML = `
      <div class="card" onclick="abrirDetalhes(${projeto.id})">
        <div class="card-body">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </div>
        <div class="card-footer">
          <span class="tag">${projeto.tagTexto}</span>
          <button class="btn-detalhes">Ver Mais +</button>
        </div>
      </div>
    `;
    containerGrid.innerHTML += cardHTML;
  });
}

// 3. Função para Filtrar Categoria
function filtrarProjetos(categoria) {
  // Atualiza classe ativa dos botões
  const botoes = document.querySelectorAll('.btn-filtro');
  botoes.forEach(btn => btn.classList.remove('ativo'));
  event.target.classList.add('ativo');

  carregarProjetos(categoria);
}

// 4. Modal de Detalhes do Projeto
function abrirDetalhes(id) {
  const projeto = projetos.find(p => p.id === id);
  if (!projeto) return;

  alert(`🚀 PROJETO: ${projeto.titulo}\n\n${projeto.detalhes}`);
}

// Inicializa a página carregando todos os projetos
document.addEventListener('DOMContentLoaded', () => {
  carregarProjetos();
});