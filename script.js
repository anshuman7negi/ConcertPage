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
