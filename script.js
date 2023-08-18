async function fetchJokes(category) {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/jokes?category=${category}')
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}

document.addEventListener('DOMContentLoaded' async function() {
    const jokesIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const jokes = await fetchJokes(jokesIds);
})