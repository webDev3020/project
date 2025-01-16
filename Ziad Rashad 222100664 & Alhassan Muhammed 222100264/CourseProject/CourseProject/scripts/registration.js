function handleFormSubmission(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    } 
    if (firstName && lastName && email && password) {
        window.location.href = 'thanks.html';
    } else {
        alert('Please fill out all fields');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');    
    form.addEventListener('submit', handleFormSubmission);
});
