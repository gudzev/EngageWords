export const score = JSON.parse(localStorage.getItem("score")) ||
{
    maxWinStreak: 0,
    correctChoices: 0,
    wrongChoices: 0,
}

export function saveScore()
{
    localStorage.setItem("score", JSON.stringify(score));
}

export function updateScore(crrentWinStreak)
{
    let maxWinStreak = document.querySelector(".score-max-winstreak");
    let correctChoices = document.querySelector(".score-correct-choices");
    let wrongChoices = document.querySelector(".score-wrong-choices");
    let currentWinStreak = document.querySelector(".score-current-winstreak");

    maxWinStreak.textContent = score.maxWinStreak;
    correctChoices.textContent = score.correctChoices;
    wrongChoices.textContent = score.wrongChoices;
    currentWinStreak.textContent = crrentWinStreak;

    saveScore();
}