const openModal = () => {
  document.querySelector('.popup-modal').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}

document.querySelector('#closeModal').addEventListener('click', () => {
  document.querySelector('.popup-modal').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
});
