document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const age = urlParams.get('age');

    if (!name || !age) {
        document.body.innerHTML = "<h1>Invalid parameters. Please go back and try again.</h1>";
        return;
    }

    document.getElementById('name-display').innerText = name;
    document.getElementById('age-display').innerText = age;
})

document.getElementById('view-card-button').addEventListener('click', function() {
    window.location.href = 'card.html';
});

document.addEventListener('DOMContentLoaded', (event) => {
    const birthdaySong = document.getElementById('birthday-song');
    birthdaySong.play().catch(error => {
        console.log('Autoplay was prevented. Click anywhere to play the song.');
        document.body.addEventListener('click', () => {
            birthdaySong.play();
        }, { once: true }); 
    });
});