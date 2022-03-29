const submit = document.querySelector('.submit'),
      text = document.querySelector('.text');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem(text.value, true);
});