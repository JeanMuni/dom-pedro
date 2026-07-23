// ======================================
// MENU MOBILE E INTERAÇÃO DO SITE
// Colégio Estadual Dom Pedro II
// ======================================



// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================


const elementos = document.querySelectorAll(
    ".card, section h2, section p"
);


function aparecerAoScroll(){

    elementos.forEach(elemento => {

        const posicao = elemento.getBoundingClientRect().top;

        const alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){

            elemento.classList.add("mostrar");

        }

    });

}


window.addEventListener(
    "scroll",
    aparecerAoScroll
);






// ===============================
// EFEITO NO MENU AO ROLAR
// ===============================


const header = document.querySelector("header");


window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,10,25,0.95)";

    }

    else{

        header.style.background =
        "rgba(5,15,35,0.65)";

    }


});







// ===============================
// PARTÍCULAS TECNOLÓGICAS
// FUNDO ESTILO ROBÓTICA
// ===============================



const canvas = document.createElement("canvas");

canvas.id="particulas";


document.body.appendChild(canvas);



const ctx = canvas.getContext("2d");


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let particulas=[];



class Particula{


constructor(){

this.x =
Math.random()*canvas.width;


this.y =
Math.random()*canvas.height;


this.tamanho =
Math.random()*3+1;


this.velocidadeX =
(Math.random()-0.5);


this.velocidadeY =
(Math.random()-0.5);


}



desenhar(){


ctx.beginPath();


ctx.arc(
this.x,
this.y,
this.tamanho,
0,
Math.PI*2
);


ctx.fillStyle =
"#00d9ff";


ctx.fill();



}



mover(){


this.x += this.velocidadeX;

this.y += this.velocidadeY;



if(
this.x < 0 ||
this.x > canvas.width
){

this.velocidadeX *= -1;

}



if(
this.y < 0 ||
this.y > canvas.height
){

this.velocidadeY *= -1;

}



}



}





for(let i=0;i<100;i++){

particulas.push(
new Particula()
);

}




function animarParticulas(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particulas.forEach(
particula=>{


particula.desenhar();

particula.mover();


});


requestAnimationFrame(
animarParticulas
);


}



animarParticulas();






// ===============================
// AJUSTAR TELA
// ===============================


window.addEventListener(
"resize",
()=>{


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;


});







// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================



const topo =
document.createElement("button");


topo.innerHTML="⬆";


topo.id="topo";


document.body.appendChild(topo);



topo.onclick=function(){


window.scrollTo({

top:0,

behavior:"smooth"

});


};



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){

topo.style.display="block";

}

else{

topo.style.display="none";

}


});







console.log(
"Site Colégio Dom Pedro II carregado 🚀"
);