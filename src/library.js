// import "./js/modal-create-markup.js";
// import "./js/modal-open-close.js";
// its me
function setAddToQueueListener() {
  const addToQueueButtons = document.querySelectorAll('[data-add-to-queue]');

  addToQueueButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filmId = button.getAttribute('data-add-to-queue');
      const dataToSave = JSON.stringify([filmId]);
      
      localStorage.setItem('Queue', dataToSave);
    });
  });
}
localStorage.getItem('Queue');
const filmsAsString = localStorage.getItem('Queue');
const filmsIds = JSON.parse(filmsAsString);
filmsIds.forEach(id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8378c884a6341b6bb6a7cfb362550079`);
});
localStorage.setItem('Queue', ' ');