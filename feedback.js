document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
 
    // Simple validation
    if (!name || !email || !rating) {
        alert('Please fill in all required fields!');
        return;
    }
 
    // Display thank-you message
    document.getElementById('thank-you-message').style.display = 'block';
 
    // Optionally, reset the form
    document.getElementById('feedback-form').reset();
});