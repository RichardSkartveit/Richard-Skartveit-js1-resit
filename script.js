async function fetchJokes(jokeIds) {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/jokes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching jokes:', error);
        
    }
}

document.addEventListener('DOMContentLoaded', async function() {

    const jokeIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

    const jokes = await fetchJokes(jokeIds);
    
    const jokesListDiv = document.getElementById('jokesList');

    function displayJokes(filteredJokes) {
        jokesListDiv.innerHTML = '';
        
        filteredJokes.forEach(joke => {
            const jokeDiv = document.createElement('div');
            jokeDiv.innerHTML = `
                <h2>${joke.setup}</h2>
                <p>Type: ${joke.type}</p>
                <a href="joke.html?id=${joke.id}">View Punchline</a>
                <hr>
            `;
            jokesListDiv.appendChild(jokeDiv);
        });
    }

    
    displayJokes(jokes);

    const filterGeneralButton = document.getElementById('filterGeneral');
    const filterProgrammingButton = document.getElementById('filterProgramming');

    filterGeneralButton.addEventListener('click', function() {
        const generalJokes = jokes.filter(joke => joke.type === 'general');
        displayJokes(generalJokes);
    });

    filterProgrammingButton.addEventListener('click', function() {
        const programmingJokes = jokes.filter(joke => joke.type === 'programming');
        displayJokes(programmingJokes);
    });
});