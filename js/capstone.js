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
            start: "top 50% ", // Start the animation when the top of the section is at 80% of the viewport height
            end: "top 30%", // End the animation when the top of the section reaches 30% of the viewport height
            scrub: true, // Smoothly animate as you scroll
            pin: true, // Pin the section
            pinSpacing: true, // Allow space to be added for the pinned element
            markers: true // Enable markers for debugging
        }
    });
});
