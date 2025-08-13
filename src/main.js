// Simple animation for form submit
const forms = document.querySelectorAll('.notify-form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    // e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input.value.trim()) {
      form.querySelector('button').textContent = 'Thank you!';
      form.querySelector('button').disabled = true;
      form.querySelector('button').style.background = '#b7c7a3';
      setTimeout(() => {
        form.querySelector('button').textContent = 'Notify Me';
        form.querySelector('button').disabled = false;
        form.querySelector('button').style.background = '';
        input.value = '';
      }, 2500);
    }
  });
});
