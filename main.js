projetosFiltrados.forEach(projeto => {
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