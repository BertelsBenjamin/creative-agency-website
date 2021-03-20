const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});
