import { words } from "../data/words.js";

const gameDiv = document.querySelector(".game-container");

playGame();

function playGame()
{
    const randomWord = words[0];
    gameDiv.innerHTML = randomWord.generateQuestionHTML();

    document.querySelectorAll(".word-meaning").forEach((word) =>
        {
            word.addEventListener("click", () =>
            {
                let englishWord = document.querySelector(".english-word").textContent;
                let attemptSerbianWord = word.textContent;
                let correctSerbianWord = undefined;
        
                let correctWord = words.find(word => word.englishWord === englishWord)
        
                if(correctWord)
                {
                    correctSerbianWord = correctWord.serbianMeaning;
                }
        
                console.log(correctSerbianWord);
        
                if(correctSerbianWord == attemptSerbianWord)
                {
                    playGame();
                }
                else
                {
                    // ako niej tacna rec izabrana
                }
            });
        })
}