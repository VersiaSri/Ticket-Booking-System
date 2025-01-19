document.getElementById("sendButton").addEventListener("click", sendMessage);

function sendMessage() {
    // Get the values of the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled out
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
        // Show the notification bar
        var notificationBar = document.getElementById("notificationBar");
        notificationBar.style.display = "block";

        // Hide the notification bar after 3 seconds
        setTimeout(function() {
            notificationBar.style.display = "none";
        }, 3000);

        // Optionally, clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Please fill out all fields.");
    }
}

    
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function () {
            // Hide all main sections (movies, sports, events)
            const sectionsToHide = document.querySelectorAll('.recommended-movies, .recommended-events, .recommended-sports, .offers, .contact');
            sectionsToHide.forEach(section => section.style.display = 'none');

            // Create a new container to display the selected card's details
            const selectedCardDetails = document.createElement('div');
            selectedCardDetails.className = 'selected-card-details';

            // Create the structure for the event image and details (name, description, form)
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'details';

            // Create the event image container and append it
            const eventImage = document.createElement('div');
            eventImage.className = 'event-image';
            eventImage.innerHTML = `<img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}">`;
            detailsContainer.appendChild(eventImage);

            // Create the event info section (name, description, form) and append it
            const eventInfo = document.createElement('div');
            eventInfo.className = 'event-info';
            eventInfo.innerHTML = `
                <h3>${card.querySelector('h3').textContent}</h3>
                <p>${card.querySelector('.details p').textContent}</p>
                ${card.querySelector('.details form').outerHTML}
            `;
            detailsContainer.appendChild(eventInfo);

            // Append the details container to the selectedCardDetails
            selectedCardDetails.appendChild(detailsContainer);

            // Create a Back button to return to the main sections
            const backButton = document.createElement('button');
            backButton.textContent = 'Back to All Sections';
            backButton.style.marginTop = '20px';
            backButton.addEventListener('click', function () {
                // Remove the selected card details and show the main sections
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');
            });
            selectedCardDetails.appendChild(backButton);

            // Append the selected card details to the body
            document.body.appendChild(selectedCardDetails);

            // Handle form submission for booking
            const form = selectedCardDetails.querySelector('form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // Get the number of seats booked
                const seats = form.querySelector('#seats').value;

                // Calculate the total amount
                const totalAmount = seats * 200;

                // Remove the selected card details and return to the normal page
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');

                // Show notification with booked seats and total amount after a short delay
                setTimeout(function () {
                    showLargeNotification(seats, totalAmount);
                }, 200); // Small delay to allow the page to reset

                // Clear the form after booking
                form.reset();
            });
        });
    });

    function showLargeNotification(seats, amount) {
        // Create a large notification element
        const notification = document.createElement('div');
        notification.className = 'large-notification';
        notification.innerHTML = `You have booked ${seats} seat(s) for ₹${amount}.`;

        // Style the large notification
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.padding = '20px 40px';
        notification.style.backgroundColor = '#FF5722';
        notification.style.color = 'white';
        notification.style.borderRadius = '10px';
        notification.style.fontSize = '18px';
        notification.style.fontWeight = 'bold';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';

        // Append the large notification to the body
        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(function () {
            notification.remove();
        }, 5000);
    }
});

   
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function () {
            // Hide all main sections (movies, sports, events)
            const sectionsToHide = document.querySelectorAll('.recommended-movies, .recommended-events, .recommended-sports, .offers, .contact');
            sectionsToHide.forEach(section => section.style.display = 'none');

            // Create a new container to display the selected card's details
            const selectedCardDetails = document.createElement('div');
            selectedCardDetails.className = 'selected-card-details';

            // Create the structure for the movie image and details (name, description, form)
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'details';

            // Create the movie image container and append it
            const movieImage = document.createElement('div');
            movieImage.className = 'movie-image';
            movieImage.innerHTML = `<img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}">`;
            detailsContainer.appendChild(movieImage);

            // Create the movie info section (name, description, form) and append it
            const movieInfo = document.createElement('div');
            movieInfo.className = 'movie-info';
            movieInfo.innerHTML = `
                <h3>${card.querySelector('h3').textContent}</h3>
                <p>${card.querySelector('.details p').textContent}</p>
                ${card.querySelector('.details form').outerHTML}
            `;
            detailsContainer.appendChild(movieInfo);

            // Append the details container to the selectedCardDetails
            selectedCardDetails.appendChild(detailsContainer);

            // Create a Back button to return to the main sections
            const backButton = document.createElement('button');
            backButton.textContent = 'Back to All Sections';
            backButton.style.marginTop = '20px';
            backButton.addEventListener('click', function () {
                // Remove the selected card details and show the main sections
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');
            });
            selectedCardDetails.appendChild(backButton);

            // Append the selected card details to the body
            document.body.appendChild(selectedCardDetails);

            // Handle form submission for booking
            const form = selectedCardDetails.querySelector('form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // Get the number of seats booked
                const seats = form.querySelector('#seats').value;

                // Calculate the total amount
                const totalAmount = seats * 200; // Assuming ₹200 per seat

                // Collect card details and phone number
                const phoneNumber = form.querySelector('#phone').value;
                const cardDetails = form.querySelector('#card-details').value;

                // Remove the selected card details and return to the normal page
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');

                // Show notification with booked seats and amount after a short delay
                setTimeout(function () {
                    showLargeNotification(seats, totalAmount);
                }, 200); // Small delay to allow the page to reset

                // Clear the form after booking
                form.reset();
            });
        });
    });

    function showLargeNotification(seats, amount) {
        // Create a large notification element
        const notification = document.createElement('div');
        notification.className = 'large-notification';
        notification.innerHTML = `You have booked ${seats} seat(s) for ₹${amount}.`;

        // Style the large notification
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.padding = '20px 40px';
        notification.style.backgroundColor = '#FF5722';
        notification.style.color = 'white';
        notification.style.borderRadius = '10px';
        notification.style.fontSize = '18px';
        notification.style.fontWeight = 'bold';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';

        // Append the large notification to the body
        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(function () {
            notification.remove();
        }, 5000);
    }
});

  
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sport-card').forEach(card => {
        card.addEventListener('click', function () {
            // Hide all main sections (movies, sports, events)
            const sectionsToHide = document.querySelectorAll('.recommended-movies, .recommended-events, .recommended-sports, .offers, .contact');
            sectionsToHide.forEach(section => section.style.display = 'none');

            // Create a new container to display the selected card's details
            const selectedCardDetails = document.createElement('div');
            selectedCardDetails.className = 'selected-card-details';

            // Create the structure for the sport image and details (name, description, form)
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'details';

            // Create the sport image container and append it
            const sportImage = document.createElement('div');
            sportImage.className = 'sport-image';
            sportImage.innerHTML = `<img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}">`;
            detailsContainer.appendChild(sportImage);

            // Create the sport info section (name, description, form) and append it
            const sportInfo = document.createElement('div');
            sportInfo.className = 'sport-info';
            sportInfo.innerHTML = `
                <h3>${card.querySelector('h3').textContent}</h3>
                <p>${card.querySelector('.details p').textContent}</p>
                ${card.querySelector('.details form').outerHTML}
            `;
            detailsContainer.appendChild(sportInfo);

            // Append the details container to the selectedCardDetails
            selectedCardDetails.appendChild(detailsContainer);

            // Create a Back button to return to the main sections
            const backButton = document.createElement('button');
            backButton.textContent = 'Back to All Sections';
            backButton.style.marginTop = '20px';
            backButton.addEventListener('click', function () {
                // Remove the selected card details and show the main sections
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');
            });
            selectedCardDetails.appendChild(backButton);

            // Append the selected card details to the body
            document.body.appendChild(selectedCardDetails);

            // Handle form submission for booking
            const form = selectedCardDetails.querySelector('form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // Get the number of tickets booked
                const tickets = form.querySelector('#tickets').value;

                // Calculate the total amount
                const totalAmount = tickets * 300;  // Assuming each ticket costs 300

                // Remove the selected card details and return to the normal page
                selectedCardDetails.remove();
                sectionsToHide.forEach(section => section.style.display = 'block');

                // Show notification with booked tickets and total amount after a short delay
                setTimeout(function () {
                    showLargeNotification(tickets, totalAmount);
                }, 200); // Small delay to allow the page to reset

                // Clear the form after booking
                form.reset();
            });
        });
    });

    function showLargeNotification(tickets, amount) {
        // Create a large notification element
        const notification = document.createElement('div');
        notification.className = 'large-notification';
        notification.innerHTML = `You have booked ${tickets} ticket(s) for ₹${amount}.`;

        // Style the large notification
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.padding = '20px 40px';
        notification.style.backgroundColor = '#FF5722';
        notification.style.color = 'white';
        notification.style.borderRadius = '10px';
        notification.style.fontSize = '18px';
        notification.style.fontWeight = 'bold';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';

        // Append the large notification to the body
        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(function () {
            notification.remove();
        }, 5000);
    }
});
let isSignedIn = false; // Variable to track sign-in status

function toggleSignIn() {
    const signInButton = document.getElementById("sign-in-btn");
    const signInModal = document.getElementById("sign-in-modal");

    // If not signed in, show the modal
    if (!isSignedIn) {
        signInModal.style.display = "block"; // Show modal
    } else {
        // If signed in, just hide the modal and do nothing to the button
        signInModal.style.display = "none"; // Close modal
    }
}

function handleSignIn(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Normally you would authenticate via an API
    console.log("Username:", username);
    console.log("Password:", password);

    // Simulating successful sign-in
    alert("Successfully signed in!");

    // After sign-in, update button text and track sign-in status
    const signInButton = document.getElementById("sign-in-btn");
    signInButton.textContent = "Sign Out"; // Change button to "Sign Out"
    isSignedIn = true; // Set sign-in status to true

    toggleSignIn(); // Close the modal
}
