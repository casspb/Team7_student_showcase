(() => {
    //seperated for easier access to spefici animation on page
gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('.student-work');

sections.forEach((section) => {
    gsap.from(section, {
        opacity: 0, 
        y: 70, 
        duration: 1, 
        ease: "power1.out", 
        scrollTrigger: {
            trigger: section,
            start: "top 50% ", 
            end: "top 30%", 
            scrub: true, 
            pin: true, 
            pinSpacing: true, 
        }
    });
});
})();