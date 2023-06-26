const projectCards = [
    {
        image: '/images/sun.jpg',
        cardTitle: 'Dancing',
        cardDetail: ' Dance on music and enjoy live show full of your favourite songs.'
    },
    {
        image: '/images/sun.jpg',
        cardTitle: 'Dancing',
        cardDetail: ' Dance on music and enjoy live show full of your favourite songs.'
    },
    {
        image: '/images/sun.jpg',
        cardTitle: 'Dancing',
        cardDetail: ' Dance on music and enjoy live show full of your favourite songs.'
    },
    {
        image: '/images/sun.jpg',
        cardTitle: 'Dancing',
        cardDetail: ' Dance on music and enjoy live show full of your favourite songs.'
    },
];

const card = document.querySelector('#allcardS');

for (let i = 0; i < projectCards.length; i += 1) {
    card.innerHTML += `<div class="Card">
                          <i class="fas fa-music col-1 col-md-auto"></i>
                          <h5>${projectCards[i].cardTitle}</h5>
                         <p>
                             ${projectCards[i].cardDetail}
                         </p>
                        </div>`;
};

const singers = [
    {
        singerImage: 'images/sun.jpg',
        singerName: 'Arjit Singh',
        singerTitle: "He is very good singer he have almost released 300 songs",
        singerDetail: 'Benkler has relased more than 300 songs, and he only sing in hindi language.'
    },
    {
        singerImage: 'images/sun.jpg',
        singerName: 'Arjit Singh',
        singerTitle: "He is very good singer he have almost released 300 songs",
        singerDetail: 'Benkler has relased more than 300 songs, and he only sing in hindi language.'
    },
    {
        singerImage: 'images/sun.jpg',
        singerName: 'Arjit Singh',
        singerTitle: "He is very good singer he have almost released 300 songs",
        singerDetail: 'Benkler has relased more than 300 songs, and he only sing in hindi language.'
    },
    {
        singerImage: 'images/sun.jpg',
        singerName: 'Arjit Singh',
        singerTitle: "He is very good singer he have almost released 300 songs",
        singerDetail: 'Benkler has relased more than 300 songs, and he only sing in hindi language.'
    },
];

function createSingerCard() {
    console.log("hellow");
    const guest = document.getElementById('guest-list');
    for (let i = 0; i < singers.length; i += 1) {
        guest.innerHTML += `<div class="singer">
                            <img src="images/singer1.png" alt="">
                            <div class="singer-details">
                               <h3>${singers[i].singerName}</h3>
                               <h4>${singers[i].singerTitle}</h4>
                               <p>${singers[i].singerDetail}</p>
                           </div>`
    }
    document.getElementById('seeMore').style.display = 'none';
}

document.getElementById('seeMore').addEventListener('click', createSingerCard);