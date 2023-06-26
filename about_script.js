const hamburger = document.getElementById('hamburger');
const list = document.getElementById('hamburger-list');
const hideElements = document.querySelectorAll('.container, .about-music, .about-past, .partners');
hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  list.style.display = 'flex';
  document.getElementById('cancelBtn').style.display = 'block';
  for (let i = 0; i < hideElements.length; i += 1) {
    hideElements[i].style.display = 'none';
  }
});

// cancel button functionality

document.getElementById('cancelBtn').addEventListener('click',()=>{
  hamburger.style.display='block';
  list.style.display = 'none';
  document.getElementById('cancelBtn').style.display = 'none';
  for (let i = 0; i < hideElements.length; i += 1) {
    hideElements[i].style.display = '';
  }
  
});