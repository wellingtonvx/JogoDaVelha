let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let elemento;

//contador de jogadas

let player1 = 0;
let player2 = 0;


//verificando o modo de Jogo(2pt ou Ia)
for(let i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", function(){
        
        secondPlayer = this.getAttribute("id");
        

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout( ()=> {
            let container = document.querySelector('#container');

            container.classList.remove('hide')
        }, 300)
    })
}



//adicionando o evento de click nas boxes
for(let i = 0; i < boxes.length; i++){

    //evento de click dentro da caixa
    boxes[i].addEventListener("click", function() {
        
        elemento = checkPlayer(player1, player2);

        //verificando se tem algum nó 
        if(this.childNodes.length == 0){

            let clone = elemento.cloneNode(true);

                //inserindo o elemento cada vez que for clicado
                this.appendChild(clone);
        
        
                //computando as jogadas
        
                if(player1 == player2){
                    player1++;

                    if( secondPlayer == "ai-player"){
                       
                        //executando a jogada do player 2
                        computerPlayer();

                        player2++;
                
                    }

                }else{
                    player2++;
                }
            }
            
            

            checkWinCondition();
    })


}



//checando qual jogador vai jogar
function checkPlayer(player1, player2){

    if(player1 == player2){
        elemento = x;
    }else{
        elemento = o;
    }

    return elemento;

}



function checkWinCondition(){

    //pegando os valores de cada bloco
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");


    //conferindo a wincondition por linha

    //checando a Horizontal
    if( b1.childNodes.length >0 && b2.childNodes.length >0 && b3.childNodes.length >0){

        let b1Noelemento = b1.childNodes[0].className;
        let b2Noelemento = b2.childNodes[0].className;
        let b3Noelemento = b3.childNodes[0].className;

            if(b1Noelemento == 'x' && b2Noelemento == 'x' && b3Noelemento == 'x'){
                declarateWinner('x');
            }else if(b1Noelemento == 'o' && b2Noelemento == 'o' && b3Noelemento == 'o'){
                declarateWinner('o');
            }

    }



    if( b4.childNodes.length >0 && b5.childNodes.length >0 && b6.childNodes.length >0){

        let b4Noelemento = b4.childNodes[0].className;
        let b5Noelemento = b5.childNodes[0].className;
        let b6Noelemento = b6.childNodes[0].className;

            if(b4Noelemento == 'x' && b5Noelemento == 'x' && b6Noelemento == 'x'){
                declarateWinner('x');
            }else if(b4Noelemento == 'o' && b5Noelemento == 'o' && b6Noelemento == 'o'){
                declarateWinner('o');
            }

    }



    if( b7.childNodes.length >0 && b8.childNodes.length >0 && b9.childNodes.length >0){

        let b7Noelemento = b7.childNodes[0].className;
        let b8Noelemento = b8.childNodes[0].className;
        let b9Noelemento = b9.childNodes[0].className;

            if(b7Noelemento == 'x' && b8Noelemento == 'x' && b9Noelemento == 'x'){
                declarateWinner('x');
            }else if(b7Noelemento == 'o' && b8Noelemento == 'o' && b9Noelemento == 'o'){
                declarateWinner('o');
            }

    }




    //Checando a Vertical

    if( b1.childNodes.length >0 && b4.childNodes.length >0 && b7.childNodes.length >0){

        let b1Noelemento = b1.childNodes[0].className;
        let b4Noelemento = b4.childNodes[0].className;
        let b7Noelemento = b7.childNodes[0].className;

            if(b1Noelemento == 'x' && b4Noelemento == 'x' && b7Noelemento == 'x'){
                declarateWinner('x');
            }else if(b1Noelemento == 'o' && b4Noelemento == 'o' && b7Noelemento == 'o'){
                declarateWinner('o');
            }

    }




    if( b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0){

        let b2Noelemento = b2.childNodes[0].className;
        let b5Noelemento = b5.childNodes[0].className;
        let b8Noelemento = b8.childNodes[0].className;

            if(b2Noelemento == 'x' && b5Noelemento == 'x' && b8Noelemento == 'x'){
                declarateWinner('x');
            }else if(b2Noelemento == 'o' && b5Noelemento == 'o' && b8Noelemento == 'o'){
                declarateWinner('o');
            }

    }


    if( b3.childNodes.length >0 && b6.childNodes.length >0 && b9.childNodes.length >0){

        let b3Noelemento = b3.childNodes[0].className;
        let b6Noelemento = b6.childNodes[0].className;
        let b9Noelemento = b9.childNodes[0].className;

            if(b3Noelemento == 'x' && b6Noelemento == 'x' && b9Noelemento == 'x'){
                declarateWinner('x');
            }else if(b3Noelemento == 'o' && b6Noelemento == 'o' && b9Noelemento == 'o'){
                declarateWinner('o');
            }

    }





    //checando a Diagonal

    if( b1.childNodes.length >0 && b5.childNodes.length >0 && b9.childNodes.length >0){

        let b1Noelemento = b1.childNodes[0].className;
        let b5Noelemento = b5.childNodes[0].className;
        let b9Noelemento = b9.childNodes[0].className;

            if(b1Noelemento == 'x' && b5Noelemento == 'x' && b9Noelemento == 'x'){
                declarateWinner('x');
            }else if(b1Noelemento == 'o' && b5Noelemento == 'o' && b9Noelemento == 'o'){
                declarateWinner('o');
            }

    }


    if( b3.childNodes.length >0 && b5.childNodes.length >0 && b7.childNodes.length >0){

        let b3Noelemento = b3.childNodes[0].className;
        let b5Noelemento = b5.childNodes[0].className;
        let b7Noelemento = b7.childNodes[0].className;

            if(b3Noelemento == 'x' && b5Noelemento == 'x' && b7Noelemento == 'x'){
                declarateWinner('x');
            }else if(b3Noelemento == 'o' && b5Noelemento == 'o' && b7Noelemento == 'o'){
                declarateWinner('o');
           }
    }



    //Verificando quando da velha
    let contador = 0;

    for ( let i = 0; i < boxes.length; i++){

         if(boxes[i].childNodes[0] != undefined){
            contador++
         }
            
    }

    if(contador == 9){
        declarateWinner("deu velha");
    }

}







//Limpando o Jogo, declarando o vencedor e atualizando o placar
function declarateWinner(winner){

    let scoreX = document.querySelector('#scoreboard-1');
    let scoreO = document.querySelector('#scoreboard-2');

    let msg = "" ;

    if (winner == 'x'){

        scoreX.textContent = parseInt(scoreX.textContent) +1;
        msg = "O jogador 1 ganhou!"

    }else if(winner == 'o'){

        scoreO.textContent = parseInt(scoreO.textContent) +1;
        msg = "O jogador 2 ganhou!"
    }else{
        msg = "Deu Velha!!"
    }


    messageText.innerHTML = msg;

    messageContainer.classList.remove("hide");


    //escondendo a Mensagem
    setTimeout(()=>{
        messageContainer.classList.add('hide');
    },3000)


    //Zerando as Jogadas
    player1 = 0;
    player2 = 0;

    //removendo os elementos de dentro do Jogo

    let boxToRemove = document.querySelectorAll('.box div');

    for(let i = 0; i < boxToRemove.length; i++){
        boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
    }

}


//fazendo a CPU jogar
function computerPlayer(){

    let cloneO = o.cloneNode(true);
    let contador = 0;
    let preenchido = 0;


    for(let i = 0; i< boxes.length;i++){

        let randonNumber = Math.floor(Math.random() * 3);
        
        //verificando se os espaços estão vazios para preenchelos
        if(boxes[i].childNodes[0] == undefined){
            if(randonNumber <= 1){
                boxes[i].appendChild(cloneO);
                contador++;
                break;
            }
        }else{
            preenchido++;
        }
        
    }

    if(contador == 0 && preenchido < 9){
        computerPlayer();
    }

}
