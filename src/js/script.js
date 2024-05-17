(function () {
  const form = document.querySelector('[data-form]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (isValid) {
      alert('Реєстрація успішна');
    } else {
      const errorMessage = document.createElement('div');
      const container = document.querySelector('.contsiner');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Будь ласка, заповніть усі поля';
      errorMessage.style.textAlign = 'center';
      container.appendChild(errorMessage);
    }
  });
}());
