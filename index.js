function startCountdown() {
            // Set the date and time of the wedding (YYYY-MM-DDTHH:MM:SS)
            const weddingDate = new Date("2026-07-18T14:00:00").getTime(); 

            // Get DOM elements
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            const messageEl = document.getElementById('wedding-message');
            const dateMessageEl = document.getElementById('date-message'); 
            const countdownContainer = document.getElementById('countdown-container');
            
            let interval; // Variable to hold the setInterval ID, scoped to this function.

            // Inner function to calculate and update the display
            function updateDisplay() {
                const now = new Date().getTime();
                const distance = weddingDate - now;

                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                    // When the countdown is finished
                    clearInterval(interval);
                    
                    // Set to '00' for final display
                    daysEl.textContent = '00';
                    hoursEl.textContent = '00';
                    minutesEl.textContent = '00';
                    secondsEl.textContent = '00';
                    
                    // Show the celebratory message and hide the countdown elements
                    messageEl.classList.remove('hidden');
                    dateMessageEl.classList.add('hidden'); 
                    countdownContainer.classList.add('hidden');

                } else {
                    // Update the elements, padding with '0'
                    daysEl.textContent = days.toString().padStart(2, '0');
                    hoursEl.textContent = hours.toString().padStart(2, '0');
                    minutesEl.textContent = minutes.toString().padStart(2, '0');
                    secondsEl.textContent = seconds.toString().padStart(2, '0');
                }
            }

            // Run the inner function immediately to show correct initial values
            updateDisplay();

            // Set the interval to run the inner function every 1 second
            interval = setInterval(updateDisplay, 1000);
        }
        
        // Execute the single main function to start the countdown
        startCountdown();
                function handleRsvp(event) {
            event.preventDefault(); // Prevent actual form submission
            
            const name = document.getElementById('name').value;
            const messageBox = document.getElementById('rsvp-message');
            
            if (name) {
                const response = document.querySelector('input[name="attendance"]:checked').value;
                
                let successMessage = `Thank you, ${name}! Your RSVP has been received.`;
                let bgColor = 'bg-green-100';
                let textColor = 'text-green-700';

                if (response === 'declining') {
                    successMessage = `Thank you, ${name}. We are sorry you can't make it, but appreciate you letting us know.`;
                    bgColor = 'bg-yellow-100';
                    textColor = 'text-yellow-700';
                }

                messageBox.innerHTML = successMessage;
                messageBox.className = `mt-4 p-3 ${bgColor} ${textColor} rounded-lg font-medium`;
                messageBox.style.display = 'block';

                // Optional: Clear form after submission
                // event.target.reset();

            } else {
                messageBox.innerHTML = 'Please enter your full name.';
                messageBox.className = 'mt-4 p-3 bg-red-100 text-red-700 rounded-lg font-medium';
                messageBox.style.display = 'block';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

