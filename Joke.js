const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const jokeId = urlParams.get('id');

async function fetchJokeDetails() {
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/jokes/${jokeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching joke details:', error);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const jokeId = urlParams.get('id');

    const joke = await fetchJokeDetails(jokeId); // Fetch joke details

    const jokeDetailsDiv = document.getElementById('jokeDetails');
    jokeDetailsDiv.innerHTML = `
        <h2>${joke.setup}</h2>
        <p>Type: ${joke.type}</p>
    `;

    const punchlineDiv = document.getElementById('punchline');
    punchlineDiv.innerText = joke.punchline;

    document.getElementById('revealButton').addEventListener('click', () => {
        punchlineDiv.classList.remove('hidden'); // Remove the "hidden" class
    });
});

async function fetchJokeDetails(jokeId) {
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/jokes/${jokeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching joke details:', error);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const punchlineDiv = document.getElementById('punchline');

    revealButton.addEventListener('click', function() {
        punchlineDiv.classList.remove('hidden'); 
    });
});