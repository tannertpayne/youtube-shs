const scriptURL = 'https://script.google.com/macros/s/AKfycbzi-TbwrSfnip1VCCobU3aKJcu8px-z0h6YISTPujOA_FhfbeERRq-hM7YuY-bC9v9yow/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your form has been submitted successfully.");
                form.reset(); // Reset the form after successful submission
            } else {
                alert("There was an issue with your submission.");
            }
        })
        .catch(error => console.error('Error!', error.message));
});