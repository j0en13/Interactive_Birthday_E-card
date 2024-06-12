document.getElementById('birthday-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const birthday = document.getElementById('birthday').value;

    if (!name) {
        document.getElementById('error-message').textContent = "Please enter a valid name.";
        return;
    }

    if (!birthday) {
        document.getElementById('error-message').textContent = "Please enter a valid date.";
        return;
    }

    const url = `countdown.html?name=${encodeURIComponent(name)}&birthday=${encodeURIComponent(birthday)}`;
    window.location.href = url;
});
