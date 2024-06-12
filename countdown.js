document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const birthday = urlParams.get('birthday');

    if (!name || !birthday) {
        document.body.innerHTML = "<h1>Invalid parameters. Please go back and try again.</h1>";
        return;
    }

    document.getElementById('name-display').innerText = name;

    const birthdayDate = new Date(birthday);
    const now = new Date();
    let age = now.getFullYear() - birthdayDate.getFullYear();
    const isBirthday = now.getMonth() === birthdayDate.getMonth() && now.getDate() === birthdayDate.getDate();

    if (now < new Date(now.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate())) {
        age--;
    }

    document.getElementById('age-display').innerText = age;

    let countdown = 3; // Always start countdown with 3 seconds

    function updateCountdown() {
        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = `happy_birthday.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;
            return;
        }

        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = countdown;
        countdown--;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
