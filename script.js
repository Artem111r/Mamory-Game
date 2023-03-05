

const cardArray = [
{ name: 'fries',        img: 'images/fries.png',       },
{ name: 'cheeseburger', img: 'images/cheeseburger.png',},
{ name: 'hotdog',       img: 'images/hotdog.png',      },
{ name: 'ice-cream',    img: 'images/ice-cream.png',   },
{ name: 'milkshake',    img: 'images/milkshake.png',   },
{ name: 'pizza',        img: 'images/pizza.png',       },
{ name: 'fries',        img: 'images/fries.png',       },
{ name: 'cheeseburger', img: 'images/cheeseburger.png',},
{ name: 'hotdog',       img: 'images/hotdog.png',      },
{ name: 'ice-cream',    img: 'images/ice-cream.png',   },
{ name: 'milkshake',    img: 'images/milkshake.png',   },
{ name: 'pizza',        img: 'images/pizza.png',       },
]


cardArray.sort(()=> 0.5 - Math.random());
let displayGrid = document.querySelector('#grid')
let displayResult = document.querySelector('#result')
let displayAttempt = document.querySelector('#resultAttempt')
let GameOver = document.querySelector('.GameOver')

let chosenCards = []
let chosenCardsIds = []
let cardWon = []
let wrongChosenCards = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
    let cardBlank = document.createElement('img')
    cardBlank.setAttribute('src', 'images/blank.png')
    cardBlank.setAttribute('blank-id', i)
    displayGrid.appendChild(cardBlank)
    cardBlank.addEventListener('click', flipCard)
  }
}
createBoard()

function flipCard(){
    let cardBlankId = this.getAttribute('blank-id')
    this.setAttribute('src', cardArray[cardBlankId].img)
    chosenCards.push(cardArray[cardBlankId].name)
    chosenCardsIds.push(cardBlankId)
    if(chosenCards.length == 2){
        setTimeout(cardMatch, 500)
    }
}                      

function cardMatch(){
    let cardIMGs = document.querySelectorAll('img')
    const oneId = chosenCardsIds[0]
    const twoId = chosenCardsIds[1]
    if(chosenCards[0] !== chosenCards[1]){
        wrongChosenCards.push(chosenCards)
        console.log(wrongChosenCards)
    }
    
    if(oneId === twoId){
        alert('You have cliked the same image! Do not cheat please')
        cardIMGs[oneId].setAttribute('src', 'images/blank.png')
        cardIMGs[twoId].setAttribute('src', 'images/blank.png')
        
    }

    if(chosenCards[0] === chosenCards[1] & oneId !== twoId){
        // alert('Congratulate, you found match cards!')
        cardIMGs[chosenCardsIds[0]].setAttribute('src', 'images/white.png')
        cardIMGs[chosenCardsIds[1]].setAttribute('src', 'images/white.png')
        cardIMGs[chosenCardsIds[0]].removeEventListener('click', flipCard)
        cardIMGs[chosenCardsIds[1]].removeEventListener('click', flipCard)
        cardWon.push(chosenCards)
        
    }else{
        cardIMGs[oneId].setAttribute('src', 'images/blank.png')
        cardIMGs[twoId].setAttribute('src', 'images/blank.png')
        
    }

     displayResult.innerHTML = cardWon.length
     displayAttempt.innerHTML = wrongChosenCards.length
     chosenCards = []
     chosenCardsIds = []

     if(cardWon.length == cardArray.length/2){
       GameOver.innerHTML = 'GAME OVER'
     }
}