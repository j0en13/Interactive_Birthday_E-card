document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('birthday-form');
    const inputContainer = document.getElementById('input-container');
    const countdownContainer = document.getElementById('countdown-container');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const birthday = document.getElementById('birthday').value;

        if (!name) {
            errorMessage.textContent = "Please enter a valid name.";
            return;
        }

        if (!birthday) {
            errorMessage.textContent = "Please enter a valid date.";
            return;
        }

        const birthdayDate = new Date(birthday);
        const now = new Date();
        const currentYear = now.getFullYear();
        let nextBirthday = new Date(currentYear, birthdayDate.getMonth(), birthdayDate.getDate());

        if (nextBirthday < now) {
            nextBirthday.setFullYear(currentYear + 1);
        }

        if (now.getMonth() === birthdayDate.getMonth() && now.getDate() === birthdayDate.getDate()) {
            countdownContainer.style.display = 'block';
            inputContainer.style.display = 'none';
            document.getElementById('name-display').innerText = name;
            let countdown = 3;
            const interval = setInterval(function() {
                document.getElementById('days').innerText = '00';
                document.getElementById('hours').innerText = '00';
                document.getElementById('minutes').innerText = '00';
                document.getElementById('seconds').innerText = countdown;
                countdown--;
                if (countdown < 0) {
                    clearInterval(interval);
                    window.location.href = 'happy_birthday.html';
                }
            }, 1000);
            return;
        }

        inputContainer.style.display = 'none';
        countdownContainer.style.display = 'block';
        document.getElementById('name-display').innerText = name;

        function updateCountdown() {
            const now = new Date().getTime();
            const countDownDate = nextBirthday.getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = "HAPPY BIRTHDAY!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});
