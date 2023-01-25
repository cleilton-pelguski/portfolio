/*---------------------------------------------------------------*/
/*----------------------SCRIPT DRAGGABLECARDS--------------------*/
/*---------------------------------------------------------------*/
function log(message){
    console.log('> ' + message)
}

/*app*/
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card =>{
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart (){
    log('CARD: Start dragging')
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add( 'is-dragging')
}

function drag (){
    log('CARD: Is dragging')
}

function dragend (){
    log('CARD: Stop dragging')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove( 'is-dragging')
}

/* Local onde vou soltar os cartões / place where we will drop cards*/
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    /*log('DROPZONE: Enter in Zone')*/
}
function dragover(){
    // this = dropzone
    /*log('DROPZONE: Over')*/
    this.classList.add('over')

    // get dragging card / pegando o cartão que está sendo movido
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}
function dragleave(){
    /*log('DROPZONE: Leave')*/
    this.classList.remove('over')
}
function drop(){
    /*log('DROPZONE: Dropped')*/
    this.classList.remove('over')
}
/*---------------------------------------------------------------*/
/*-------------------FIM SCRIPT DRAGGABLECARDS-------------------*/
/*---------------------------------------------------------------*/


// A importância da Sintaxe: é a maneira correta de se escrever o código.
// Toda Linguagem tem,

// Comentários
/* 
Comentário maior
em duas linhas
*/

/*------------------------------------------------------------*/
/*--------------------------STRING----------------------------*/
/*------------------------------------------------------------*/

//Cadeia de Caracteres

//"" Aspas duplas
//'' Aspas Simples
//`` template literals ou template strings


console.log('Cleilton') // vai ser mostrado no navegador
console.log("Cleilton")
console.log("'Cleilton'") //permite colocar aspas simples dentro de aspas duplas
console.log('"Cleilton"') //permite colocar aspas duplas dentro de aspas simples

/*------------------------------------------------------------*/
/*--------------------------STRING----------------------------*/
/*------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/*--------------------------null vs undefined----------------------------*/
/*-----------------------------------------------------------------------*/

/* undefined
indefinido

/* null
    - nulo
    - objeto que não possui conteúdo/nada dentro
    - diferente de indefinido
*/
console.log(null === undefined)


/*-----------------------------------------------------------------------*/
/*--------------------------fim null vs undefined------------------------*/
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/*------------------------------object-----------------------------------*/
/*-----------------------------------------------------------------------*/

/*
  Objeto
  - propriedade / atributos - todo objeto tem propriedade, na programação são atributos. (ex: caixa tem 40cm de altura por 20cm de largura e peso de 300g)
  - funcionalidade / métodos

  { propriedade: "valor" } - no js
*/

console.log({
    name: "Cleilton",
    idade: 23,
    andar: function(){
        console.log('andar')
    }
})


/*-----------------------------------------------------------------------*/
/*----------------------------fim object---------------------------------*/
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/*------------------------------Array------------------------------------*/
/*-----------------------------------------------------------------------*/

/*
  Array (vetores)
  - lista
  - agrupamento de dados

  ["Ovos", "Leite", "Cleilton", 36, 35, 1]
*/

console.log([
 "Ovos",
 "Leite",
 "Café",
]
)


/*-----------------------------------------------------------------------*/
/*----------------------------fim Array----------------------------------*/
/*-----------------------------------------------------------------------*/



console.log('bem Vindos ao Javascript')



/*-----------------------------------------------------------------------*/
/*----------------------------SLIDER IMG---------------------------------*/
/*-----------------------------------------------------------------------*/



document.querySelector("#items")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    }
    else{
        event.target.scrollBy(-300, 0)
    }
})


/*-----------------------------------------------------------------------*/
/*---------------------------FIM SLIDER IMG------------------------------*/
/*-----------------------------------------------------------------------*/