let playerNm = window.prompt('Please enter your name: ')
window.alert('Welcome to my trivia game '+playerNm)
let playerScore = 0
var playAgain = true

while(playAgain === true){
    playGame()
    let playerChoice = window.prompt('Would you like to play again? Yes or No?')
    if (playerChoice == 'yes' || playerChoice == 'Yes'){
         playAgain = true
    } else {
         playAgain = true
        window.alert('Thank you for playing with me!')
    }
}
function playGame(){
    for(let i=0; i < questions.length; i++){
        let question = questions[i]
        let playerAnswer = window.prompt(question.text)
        if (playerAnswer == question.correctAnswer){
            playerScore = playerScore + 10
        }
    }
    window.alert('Your final score is: '+playerScore)
}

