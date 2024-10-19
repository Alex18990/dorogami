// Initialize EmailJS with your User ID
(function() {
    emailjs.init('fNuAdlUMgU9xuDM87'); // Replace with your EmailJS User ID
})();

// Function to send the form data using EmailJS
function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to send
    const templateParams = {
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    

    // Send the email using EmailJS
    emailjs.send('service_8ahhjbg', 'template_0zz8ior', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
}
