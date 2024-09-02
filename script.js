// JavaScript for calculating the alcohol addiction score

function calculateScore() {
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            score += parseInt(question.value, 10);
        }
    }

    let resultMessage;
    if (score >= 30) {
        resultMessage = "High level of alcohol addiction. Please seek professional help.";
    } else if (score >= 15) {
        resultMessage = "Moderate level of alcohol addiction. Consider reducing your alcohol consumption and seeking support.";
    } else {
        resultMessage = "Low level of alcohol addiction. Maintain a healthy lifestyle.";
    }

    document.getElementById("result").textContent = resultMessage;
}
