document.addEventListener("DOMContentLoaded", () =>
{
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) =>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add("animate-fadein");
                observer.unobserve(entry.target);
            }
        })
        },
        {
            threshold: 0.1,
        });
        
        const animatedElements = document.querySelectorAll(".landing-heading, .landing-description");
        
        animatedElements.forEach((element) =>
        {
            observer.observe(element);
        })        
})