
/* START SCAN */
(function () {
    "use strict";

    var startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.onclick = function () {
            document.getElementById("welcomeScreen").style.display = "none";
            document.getElementById("questionScreen").style.display = "block";
        };
    }

}());


/* PASSWORD */
function unlockBirthday() {

    var password = document.getElementById("birthdayPassword").value;

    if (password === "2112005") {

        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("passwordError").textContent = "";

    } else {

        document.getElementById("passwordError").textContent =
            "Oops! Wrong password, try again";

    }
}


/* MOVE BETWEEN QUESTIONS */
function goToQuestion(current, next) {

    document.getElementById("question" + current).style.display = "none";
    document.getElementById("question" + next).style.display = "block";

}


/* QUESTION ANSWERS */
function checkAnswer(isCorrect, questionNumber) {
    
    var feedbackId = questionNumber === 3 ? "answerFeedback" : "answerFeedback" + questionNumber;
    var buttonId = questionNumber === 3 ? "nextButton" : "nextButton" + questionNumber;

    var feedback = document.getElementById(feedbackId);
    var nextButton = document.getElementById(buttonId);

    if (!feedback || !nextButton) {
        return;
    }

    if (isCorrect) {
        feedback.textContent = "Eh elshtara de ya 3slityy";
        feedback.style.color = "#9b6b9b";
        nextButton.style.display = "block";
    } else {
        feedback.textContent = "rkez ya sokr";
        feedback.style.color = "#c46b85";
    }
}


/* MOVE TO FINAL REPORT */
function goToReport() {

    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("reportScreen").style.display = "block";

}


/* LAST SURPRISE */
function showLastSurprise() {

    var surprise = document.getElementById("lastSurprise");

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
