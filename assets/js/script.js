document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You've clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You've clicked ${gameType}`);
            }
        })
    }
})
    /**
     * The main game "loop", called when the script is first loaded
     * and after the users's answer has been processed.
     */

function runGame() {

    // Create 2 random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswers () {

}

function calculateCorrectAnswer() {

}

function incrementScore () {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}