const expandButtons = document.querySelectorAll(".fa-sort-desc");
const answers = document.querySelectorAll(".answer");
const faqPage = document.querySelector(".faq-page");

expandButtons.forEach((btn, index) =>
{
    btn.addEventListener("click", () =>
    {
        answers[index].classList.toggle("hidden");
    });
})