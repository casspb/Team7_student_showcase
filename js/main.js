 
 (() => {
 const player = document.querySelector('video');
 const title = document.querySelector('.index-banner');
 const playButton = document.querySelector('.play-button');
 const timelineElements = document.querySelectorAll('.timeline');
 const timeline = gsap.timeline({ paused: true });
 let scrollContainer = document.querySelector(".stdnt-work-gallery");
 let backBtn = document.querySelector('#back-button');
 let forwardBtn = document.querySelector('#forward-button');
 let firstImage = document.querySelector('.stdnt-work-gallery img');

 // Functions to control video play/pause visibility
 function playing() {
     player.style.visibility = 'visible';
     title.style.visibility = 'hidden';
 }

 function paused() {
     title.style.visibility = 'visible';
     player.style.visibility = 'hidden';
 }

 function playVideo() {
     player.play();
 }

 // Gallery funtions //

 function getImageWidth() {
    return firstImage.offsetWidth + 20;
}

function backButton() {
scrollContainer.scrollLeft -= getImageWidth();
}

function forwardButton() {
    scrollContainer.scrollLeft += getImageWidth();
    }


 // Video event listeners for main page video
 player.addEventListener("play", playing);
 player.addEventListener("pause", paused);
 playButton.addEventListener('click', playVideo);
 
 //gallery event listeners for buttons
 backBtn.addEventListener("click", backButton);
forwardBtn.addEventListener("click", forwardButton);

 // scroll to function for divs at top of index.html
 gsap.registerPlugin(ScrollToPlugin);

 document.querySelectorAll(".shortcut-box").forEach((box, index) => {
     box.addEventListener("click", () => {
         let targetId;

         // a switch statment makes it so the clicked box can they be assigned the appropriate target ID so that way once the scroll to is set, it will already have somewhere to go
         switch (index) {
             case 0:
                 targetId = "#industry-night-spotlight"; 
                 break;
             case 1:
                 targetId = "#idp-spotlight"; 
                 break;
             case 2:
                 targetId = ".testimonial-spotlight"; 
                 break;
             case 3:
                 targetId = ".dev-title"; 
                 break;
             default:
                 return; 
         }

         gsap.to(window, {
             duration: 1,
             scrollTo: {
                 y: targetId,
                 offsetY: 20 
             }
         });
     });
 });

 function animateTimelines() {
    timeline.from(timelineElements, {
        duration: 1,
        x: -100, 
        opacity: 0,
        stagger: 0.2, 
        ease: "power2.out",
    });
    // this checks if an elements is visible before it will play the timeline animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.play(); 
                observer.disconnect(); 
            }
        });
    });
// this checks if there are any of the timline elements to observe
    if (timelineElements.length) {
        observer.observe(timelineElements[0]);
    }
}

// Checks the  screen size and trigger animation so that the animation is only on desktop layout
function checkScreenSize() {
    if (window.innerWidth >= 1200) {
        animateTimelines();
    }
}

document.addEventListener("DOMContentLoaded", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

})();