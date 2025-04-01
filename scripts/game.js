import { words, Word} from "../data/words.js";
import { score, updateScore} from "./score.js";

const gameDiv = document.querySelector(".game-container");

let currentWinStreak = 0;

playGame();

function playGame()
{
    const randomWord = words[0];
    gameDiv.innerHTML = randomWord.generateQuestionHTML();

    let currentWinStreakSpan = document.querySelector(".score-current-winstreak");
    currentWinStreakSpan.innerHTML = currentWinStreak;

    document.querySelectorAll(".word-meaning").forEach((word) =>
        {
            word.addEventListener("click", () =>
            {
                let englishWord = document.querySelector(".english-word").textContent;
                let attemptSerbianWord = word.textContent;
                let correctSerbianWord = undefined;

                let correctWord = words.find(word => word.englishWord.trim() === englishWord.trim())
        
                if(correctWord)
                {
                    correctSerbianWord = correctWord.serbianMeaning;
                }
        
                if(correctSerbianWord == attemptSerbianWord)
                {
                    if(!(Word.availableWords.length > 4))
                    {
                        console.log("you have won!!!");
                    }

                    Word.availableWords.splice(correctWord, 1);
                    console.log(Word.availableWords.length + ' ' + "words remaining to get guessed...");

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
                    currentWinStreak = 0;
                    score.wrongChoices++;
                    updateScore(currentWinStreak);
                }
            });
        })
}