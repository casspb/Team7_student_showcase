
document.addEventListener('DOMContentLoaded', () => {
        const player = document.querySelector('video');
        const title = document.querySelector('.index-banner');
        const playButton = document.querySelector('.play-button');
        const burgerButton = document.querySelector('.burger-button');
        const burgerMenu = document.querySelector('.burger-menu');
        const portfolioContainer = document.getElementById('portfolioContainer');

        

        const studentNames = [ "Rodriguez-Ramos,Diego",
                "Cooper,Kayla",
                "Lozon,Ramona",
                "Chen,Qingdong",
                "Khan,Taylor",
                "Pelacek-Boutilier,Cassidy",
                "Bilyea,Isaac",
                "Carriere,Ezra",
                "Salwan,Shauraya",
                "Reji Vazhavilayil,Rebin",
                "Saddul,Divij",
                "Park,Kyuri",
                "Meijer,Nikolai",
                "Hanbury,Xaviere",
                "Buck,Amari",
                "Sivaskaran,Thaseekaran",
                "Parmar,Meet Amrutbhai",
                "Reyes,Justin Rian",
                "Yantizhanov,Alisher",
                "Thakur,Parvesh",
                "Damen,Meghan",
                "Amjad Omar Abu-Sa'ad,Saif",
                "Zhang,Bozhi",
                "Chu,Qiao-Yi",
                "Maxwell,Sashoye",
                "Bondarchuk,Dina",
                "Okutepa,Wisdom Utenwojo",
                "Macapagal,Bernardo Jr.",
                "Celis,Ezekiel John",
                "Macadams,Katrina",
                "El Maniary,Ali",
                "Yam,Lok Ting Tina",
                "Nguyen,Thi Thanh Thuong",
                "Quelali Evangelista,Jenifer",
                "Nobre Do Nascimento,Rodrigo",
                "Gabbassova,Milana",
                "Cardenas Ramos,Izel Esteban",
                "Flores,Timothy Bryle",
                "Sit,Loi Pan",
                "Polchai,Napas",
                "Singh,Akamjot",
                "Opadele,Emmanuel",
                "Sojan,Shon",
                "Ishan Mehra,Ishan Mehra",
                "Biju Varghese,Shiyon",
                "Jashan Kumar,Jashan Kumar",
                "Dhaliwal,Meetinder Singh",
                "Harnoorpreet Kaur,Harnoorpreet Kaur",
                "Juntarattanakamol,Apapat",
                "Bandarra,Sydney",
                "Ogbeide,Osarieme",
                "Huertas,Tanya Mae",
                "Cano Menendez,Carlos Andres",
                "Bishokarma,Kamana",
                "Sham,King Yin",
                "Benipal,Tapshveer",
                "Laput,Dixie Marie",
                "Faizan Khan,Faizan Khan",
                "Lie,Keith",
                "Gamborgi Menezes,Henrique",
                "Mahaittidon,Natchanon",
                "Chan,Wing Lam Stephanie",
                "Lai,Yi Ting",
                "Gohetia,Sheldon",
                "Gregory,Joyal",
                "Sidhu,Sukhbhag Singh",
                "Shah,Het",
                "Patel,Lav Pareshkumar",
                "Dasilva,Simon",
                "Jayasinghe Mudalige,Wimarsha Heshan Jayasinghe",
                "Ho,Gia Khang",
                "Bendzsel,Kristina"
            ];
        

            studentNames.forEach(student => {
                // Create a new div for each portfolio box
                const portfolioBox = document.createElement('div');
                portfolioBox.classList.add('portfolio-box', 'col-span-2', 'm-col-span-3'); // Each box spans 2 columns
                portfolioBox.innerHTML = `<p>${student}</p>`; // Add the student's name
        
                // Append the portfolio box to the container
                portfolioContainer.appendChild(portfolioBox);
            });

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

        //function burgerChecked() {
         // burgerMenu.style.left = '0px';//
        //} //

        player.addEventListener("play", playing);
        player.addEventListener("pause", paused);
        playButton.addEventListener('click', playVideo);
        //burgerButton.addEventListener('click', toggleBurgerMenu); //
});