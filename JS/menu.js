const userIcon = document.querySelector('#user-icon');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', () => {
  document.querySelector('#user-icon').classList.toggle('hidden')
  document.querySelector('#user-access').classList.toggle('hidden')
  document.querySelector('.navbar').classList.toggle('hidden')
})