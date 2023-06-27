const projectCards = [
  {
    image: "images/music.png",
    cardTitle: 'Music Night',
    cardDetail: ' Enjoy live show full of your favourite songs.',
  },
  {
    image: "images/dance.png",
    cardTitle: 'Dancing',
    cardDetail: ' Dance on music and enjoy live show full of your favourite songs.',
  },
  {
    image: "images/collab.png",
    cardTitle: 'Collaboration',
    cardDetail: 'You will get a chance to collaborate with singers.',
  },
  {
    image: "images/videoconference.png",
    cardTitle: 'Meetup',
    cardDetail: 'You will get a chance to meet with your favoratie singers.',
  },
];

const card = document.querySelector('#allcardS');

for (let i = 0; i < projectCards.length; i += 1) {
  card.innerHTML += `<div class="Card">
                          <img src="${projectCards[i].image}">
                          <h5>${projectCards[i].cardTitle}</h5>
                         <p>
                             ${projectCards[i].cardDetail}
                         </p>
                        </div>`;
}

const singers = [
  {
    singerImage: 'images/neha.jpg',
    singerName: 'Neha Singh',
    singerTitle: 'Neha is very good singer he have almost released 300 songs',
    singerDetail: 'Neha has relased more than 300 songs, and he only sing in hindi language.',
  },
  {
    singerImage: 'images/diljeet.jpeg',
    singerName: 'Arjit Singh',
    singerTitle: 'He is very good singer he have almost released 300 songs',
    singerDetail: 'Benkler has relased more than 300 songs, and he only sing in hindi language.',
  },
  {
    singerImage: 'images/arjit.jpeg',
    singerName: 'Daljeet Singh',
    singerTitle: 'He is very good singer he have almost released 300 songs',
    singerDetail: 'Daljeet has relased more than 300 songs, and he only sing in hindi language.',
  },
  {
    singerImage: 'images/sunidhi.jpg',
    singerName: 'sunidhi Singh',
    singerTitle: 'sunidhi is very good singer he have almost released 300 songs',
    singerDetail: 'Sunidhi has relased more than 300 songs, and he only sing in hindi language.',
  },
  {
    singerImage: 'images/shreya.jpg',
    singerName: 'Shreya Singh',
    singerTitle: 'shreya is very good singer he have almost released 300 songs',
    singerDetail: 'shreya has relased more than 300 songs, and he only sing in hindi language.',
  },
  {
    singerImage: 'images/sonu.jpg',
    singerName: 'sonu nigham',
    singerTitle: 'He is very good singer he have almost released 300 songs',
    singerDetail: 'sonu has relased more than 300 songs, and he only sing in hindi language.',
  },
];

function createSingerCard() {
  const guest = document.getElementById('guest-list');
  for (let i = 0; i < singers.length; i += 1) {
    guest.innerHTML += `<div class="singer">
                            <img src="${singers[i].singerImage}" alt="">
                            <div class="singer-details">
                               <h3>${singers[i].singerName}</h3>
                               <h4>${singers[i].singerTitle}</h4>
                               <p>${singers[i].singerDetail}</p>
                           </div>`;
  }
  document.getElementById('seeMore').style.display = 'none';
}

createSingerCard();

// document.getElementById('seeMore').addEventListener('click', createSingerCard);

//  mobile menu click button

const hamburger = document.getElementById('hamburger');
const list = document.getElementById('hamburger-list');
const hideElements = document.querySelectorAll('.container, .program, .guests');
hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  list.style.display = 'flex';
  document.getElementById('cancelBtn').style.display = 'block';
  for (let i = 0; i < hideElements.length; i += 1) {
    hideElements[i].style.display = 'none';
  }
});

// cancel button functionality

document.getElementById('cancelBtn').addEventListener('click', () => {
  hamburger.style.display = 'block';
  list.style.display = 'none';
  document.getElementById('cancelBtn').style.display = 'none';
  for (let i = 0; i < hideElements.length; i += 1) {
    hideElements[i].style.display = '';
  }
});
