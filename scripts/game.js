import { words, Word} from "../data/words.js";
import { score, updateScore, resetScore} from "./score.js";

const gameDiv = document.querySelector(".game-container");

let currentWinStreak = 0;

playGame();

function playGame()
{
    const randomWord = words[0];
    gameDiv.innerHTML = randomWord.generateQuestionHTML();

    let currentWinStreakSpan = document.querySelector(".score-current-winstreak");
    let resetBtn = document.querySelector(".reset-btn");
    currentWinStreakSpan.innerHTML = currentWinStreak;

    resetBtn.addEventListener("click", () =>
    {
            currentWinStreak = 0;
            currentWinStreakSpan.innerHTML = currentWinStreak;
            resetScore();
    });

    document.querySelectorAll(".word-meaning").forEach((word) =>
        {
            word.addEventListener("click", () =>
            {
                let englishWord = document.querySelector(".english-word");
                let attemptSerbianWord = word.textContent;
                let correctSerbianWord = undefined;

                let correctWord = words.find(word => word.englishWord.trim() === englishWord.textContent.trim())
        
                if(correctWord)
                {
                    correctSerbianWord = correctWord.serbianMeaning;
                }
        
                if(correctSerbianWord == attemptSerbianWord)
                {
                    if(!(Word.availableWords.length > 4))
                    {
                        Word.currentWordId = 0;
                        Word.availableWords = words.map(w => new Word(w.englishWord, w.serbianMeaning, w.additionalMeaning));
                        console.log("Pošto ste pogodili sve reči, lista reči je ažurirana.");
                    }

                    Word.availableWords.splice(Word.availableWords.indexOf(correctWord), 1);

                    currentWinStreak++;
                    score.correctChoices++;

                    if(currentWinStreak > score.maxWinStreak)
                    {
                        score.maxWinStreak = currentWinStreak;
                    }

                    updateScore(currentWinStreak);
                    playGame();
                }
                else
                {
                    englishWord.classList.add("shake");

                    setTimeout(() =>
                    {
                        englishWord.classList.remove("shake");
                    }, 300);

                    currentWinStreak = 0;
                    score.wrongChoices++;
                    updateScore(currentWinStreak);
                }
            });
        })
}