// ==========================================================================
// DOM PEDRO II CONECTA - SCRIPT.JS
// Projetos de Programação e Robótica
// Escola Estadual D. Pedro II - Janiópolis/PR
// ==========================================================================


const projetos = [


{
id:1,

titulo:"LED 8x8 - Mandando uma Mensagem",

categoria:"robotica",

tagTexto:"Arduino / Matriz LED 8x8",

descricao:
"Projeto desenvolvido pelos estudantes utilizando matriz de LED 8x8 para criação de mensagens luminosas através da programação e eletrônica.",


imagemCapa:
"https://img.youtube.com/vi/Mmzw3JbQkEM/hqdefault.jpg",


youtubeUrl:
"https://youtube.com/shorts/Mmzw3JbQkEM",


tutorialUrl:
"https://aluno.escoladigital.pr.gov.br/sites/alunos/arquivos_restritos/files/documento/2023-04/aula16_como_estou_me_sentindo_ef_m2.pdf"


},



{
id:2,

titulo:"Carrinho Seguidor de Linha",

categoria:"robotica",

tagTexto:"Robótica / Arduino",

descricao:
"Projeto utilizando sensores infravermelhos para desenvolver um carrinho autônomo capaz de seguir trajetos.",


imagemCapa:
"https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",


youtubeUrl:"#",

tutorialUrl:"#"


},




{
id:3,

titulo:"Automação Residencial",

categoria:"iot",

tagTexto:"IoT / Programação",

descricao:
"Projeto envolvendo sensores e automação para controle inteligente de dispositivos.",


imagemCapa:
"https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",


youtubeUrl:"#",

tutorialUrl:"#"


}



];




// ================= CARREGAR PROJETOS =================


function carregarProjetos(filtro="todos"){


const grid =
document.getElementById("grid-projetos");


if(!grid)return;



grid.innerHTML="";



const lista = filtro==="todos"

?
projetos

:

projetos.filter(
projeto=>projeto.categoria===filtro
);




lista.forEach(projeto=>{



const card = `


<div class="card">



<div class="capa-container">


<img 

src="${projeto.imagemCapa}"

alt="${projeto.titulo}"

class="capa-projeto">



<div class="play-overlay">

<span>
▶ Ver Projeto
</span>

</div>


</div>




<div class="card-body">


<h3>

${projeto.titulo}

</h3>



<p>

${projeto.descricao}

</p>


</div>






<div class="botoes-projeto">


<a

href="${projeto.youtubeUrl}"

target="_blank"

class="btn-youtube">


▶ YouTube


</a>




<a

href="${projeto.tutorialUrl}"

target="_blank"

class="btn-tutorial">


🔧 Tutorial


</a>



</div>






<div class="card-footer">


<span class="tag">

${projeto.tagTexto}

</span>


</div>




</div>



`;



grid.innerHTML += card;



});



}







// ================= FILTROS =================


function filtrarProjetos(categoria){



const botoes =
document.querySelectorAll(".btn-filtro");



botoes.forEach(botao=>{

botao.classList.remove("ativo");

});



event.target.classList.add("ativo");



carregarProjetos(categoria);



}







// ================= INICIAR SITE =================



document.addEventListener(
"DOMContentLoaded",

()=>{

carregarProjetos();

}

);