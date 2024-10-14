gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('.student-work');

sections.forEach((section) => {
    gsap.from(section, {
        opacity: 0, // Start with 0 opacity
        y: 70, // Slight upward slide (adjust as needed)
        duration: 1, // Duration for the fade-in effect
        ease: "power1.out", // Easing for a smooth transition
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
