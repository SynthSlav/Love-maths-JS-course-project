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

function runGame() {

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