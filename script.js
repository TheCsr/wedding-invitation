document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('weddingForm');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(event) {
            // 1. Prevent the form from truly submitting (reloading the page)
            event.preventDefault();

            // 2. Here is where you would normally send the form data to a server.
            // But since this is a simple static site, we just celebrate!
            
            // Collect the data to show what was submitted (good for debugging)
            const formData = new FormData(rsvpForm);
            const formObj = {};
            formData.forEach((value, key) => formObj[key] = value);
            console.log('Form data captured:', formObj);

            // 3. Clear the form (optional)
            rsvpForm.reset();

            // 4. Redirect to the celebration page!
            window.location.href = 'celebration.html';
        });
    }
});