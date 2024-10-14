 // Video elements and controls
 const player = document.querySelector('video');
 const title = document.querySelector('.index-banner');
 const playButton = document.querySelector('.play-button');

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

 // Video event listeners
 player.addEventListener("play", playing);
 player.addEventListener("pause", paused);
 playButton.addEventListener('click', playVideo);

 // GSAP and ScrollToPlugin registration
 gsap.registerPlugin(ScrollToPlugin);

 // Shortcut boxes functionality
 document.querySelectorAll(".shortcut-box").forEach((box, index) => {
     box.addEventListener("click", () => {
         let targetId;

         switch (index) {
             case 0:
                 targetId = "#industry-night-spotlight"; 
                 break;
             case 1:
                 targetId = "#idp-spotlight"; 
                 break;
             case 2:
                 targetId = "#testim-border-top"; 
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





 


