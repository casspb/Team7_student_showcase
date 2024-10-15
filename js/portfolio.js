(() => {
   //seperated to have easier acess to the class list array
  
  const portfolioContainer = document.getElementById('portfolioContainer');
  
    const studentNames = [ "Diego Rodriguez-Ramos",
      "Kayla Cooper",
      "Ramona Lozon",
      "Qingdong Chen",
      "Taylor Khan",
      "Cassidy Pelacek-Boutilier",
      "Isaac Bilyea",
      "Ezra Carriere",
      "Shauraya Salwan",
      "Rebin Reji Vazhavilayil",
      "Divij Saddul",
      "Kyuri Park",
      "Nikolai Meijer",
      "Xaviere Hanbury",
      "Amari Buck",
      "Thaseekaran Sivaskaran",
      "Meet Amrutbhai Parmar",
      "Justin Rian Reyes",
      "Alisher Yantizhanov",
      "Parvesh Thakur",
      "Meghan Damen",
      "Saif Amjad Omar Abu-Sa'ad",
      "Bozhi Zhang",
      "Qiao-Yi Chu",
      "Sashoye Maxwell",
      "Dina Bondarchuk",
      "Wisdom Utenwojo Okutepa",
      "Bernardo Jr. Macapagal",
      "Ezekiel John Celis",
      "Katrina Macadams",
      "Ali El Maniary",
      "Lok Ting Tina Yam",
      "Thi Thanh Thuong Nguyen",
      "Jenifer Quelali Evangelista",
      "Rodrigo Nobre Do Nascimento",
      "Milana Gabbassova",
      "Izel Esteban Cardenas Ramos",
      "Bryle Flores,Timothy",
      "Loi Pan Sit",
      "Napas Polchai",
      "Akamjot Singh",
      "Emmanuel Opadele",
      "Shon Sojan",
      "Ishan Mehra Ishan Mehra",
      "Shiyon Biju Varghese",
      "Jashan Kumar",
      "Meetinder Singh Dhaliwal",
      "Harnoorpreet Kaur",
      "Apapat Juntarattanakamol",
      "Sydney Bandarra",
      "Osarieme Ogbeide",
      "Tanya Mae Huertas",
      "Carlos Andres Cano Menendez",
      "Kamana Bishokarma",
      "King Yin Sham",
      "Tapshveer Benipal",
      "Dixie Marie Laput",
      "Faizan Khan",
      "Keith Lie",
      "Henrique Gamborgi Menezes",
      "Natchanon Mahaittidon",
      "Wing Lam Stephanie Chan",
      "Yi Ting Lai",
      "Sheldon Gohetia",
      "Joyal Gregory",
      "Sukhbhag Singh Sidhu",
      "Het Shah",
      "Lav Pareshkumar Patel",
      "Simon Dasilva",
      "Wimarsha Heshan Jayasinghe Jayasinghe Mudalige",
      "Gia Khang Ho",
      "Kristina Bendzsel"
  ];
  
  studentNames.forEach(student => {
    // Create a new div for each portfolio box
    const portfolioBox = document.createElement('div');
    portfolioBox.classList.add('portfolio-box', 'col-span-2', 'm-col-span-3'); // Each box spans 2 columns
    portfolioBox.innerHTML = `<p>${student}</p>`; // Add the student's name
  
    // Append the portfolio box to the container so that the portfolio box becomes part of the container and adds it to the DOM and becomes visable
    portfolioContainer.appendChild(portfolioBox);
  });
  
  
  })();
  