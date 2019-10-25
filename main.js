// Two players
// Press button  (button:.addEventlistener)
// Should select X or o
// Return what user selected

const topOne = document.querySelector('#topOne')
const topTwo = document.querySelector('#topTwo')
const topThree = document.querySelector('#topThree')
const midOne = document.querySelector('#midOne')
const midTwo = document.querySelector('#midTwo')
const midThree = document.querySelector('#midThree')
const bottomOne = document.querySelector('#bottomOne')
const bottomTwo = document.querySelector('#bottomTwo')
const bottomThree = document.querySelector('#bottomThree')
const userChoice = document.querySelectorAll('.userChoice');

const game = {
  clickCount: 1,
  icon: 'x',
  changePlayer: function (){
      if(this.clickCount%2 === 0){
        this.icon ='x'
      }else{
        this.icon ='o'
      }
      this.clickCount++
  },
  alertWinner: function(){
    alert (`${this.icon} is a winner`)
  },
  checkResults: function(){
    // row
  if (topOne.textContent === topTwo.textContent && topTwo.textContent === topThree.textContent && topOne.textContent !== ""){
    this.alertWinner()
    location.reload();

  } else if (midOne.textContent === midTwo.textContent && midTwo.textContent === midThree.textContent && midOne.textContent !== ""){
    this.alertWinner()
    location.reload();

  } else if (bottomOne.textContent === bottomTwo.textContent && bottomTwo.textContent === bottomThree.textContent && bottomOne.textContent !== ""){
    this.alertWinner()
    location.reload();

  }  else if (topOne.textContent === midOne.textContent && midOne.textContent === bottomOne.textContent && topOne.textContent !== ""){
    this.alertWinner()
    location.reload();

  }else if (topTwo.textContent === midTwo.textContent && topTwo.textContent === bottomTwo.textContent && topTwo.textContent !== ""){
    this.alertWinner();
    location.reload();

  }else if (topThree.textContent === midThree.textContent && topThree.textContent === bottomThree.textContent && topThree.textContent !== ""){
      this.alertWinner();
      location.reload();

  }
    // across
  else if (topOne.textContent === midTwo.textContent && midTwo.textContent === bottomThree.textContent && topOne.textContent !== ""){
    this.alertWinner();
    location.reload();

  }
  else if (topThree.textContent === midTwo.textContent && midTwo.textContent === bottomOne.textContent && topThree.textContent !== ""){
    this.alertWinner();
    location.reload();

  }
  }
}

  userChoice.forEach(el =>{
    el.addEventListener('click',function (){
      if(this.textContent=== ""){
      game.changePlayer()
      const work = document.createTextNode(game.icon)
      this.appendChild(work)
      game.checkResults()
    }
  })
})
