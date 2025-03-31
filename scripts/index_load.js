window.onload = () => 
{
    const wrapper = document.querySelector(".wrapper");

    if(wrapper) 
    {
        wrapper.remove();
    }
};

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
        
        const animatedElements = document.querySelectorAll(".landing-heading, .landing-description, .btn-play, .feature, .faq-li");
        
        animatedElements.forEach((element) =>
        {
            observer.observe(element);
        })        
})