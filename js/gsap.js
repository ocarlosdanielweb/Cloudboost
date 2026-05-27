 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
    const scrolls = document.querySelectorAll('.scroll-bottom, .scroll-top, .scroll-left, .scroll-right');
    scrolls.forEach(scroll => {
        ScrollTrigger.create({
            trigger: scroll,
            endTrigger: "body",
            start: "top 80%",
            toggleClass: "ativo",
        });
    });
});