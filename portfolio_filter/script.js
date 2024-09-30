let categoryButtons = document.querySelectorAll('.portfolio-categories button');
let portfolioItems = document.querySelectorAll('.portfolio-single-item');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    portfolioItems.forEach((item) => {
      item.style.display = 'none';
    });

    let selectedCategory = button.getAttribute('data-category');

    if (selectedCategory === 'all') {
      portfolioItems.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      portfolioItems.forEach((item) => {
        if (item.getAttribute('data-category').includes(selectedCategory)) {
          item.style.display = 'block';
        }
      });
    }
  });
});
