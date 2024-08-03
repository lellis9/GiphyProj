async function searchGiphy() {
    const apiKey = 'HCnkqg4gNzBrevMZMYrUfKlpWb1vsAK8';
    const searchTerm = document.getElementById('search-term').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.data);
    } catch (error) {
        console.error('Error fetching data from Giphy API', error);
    }
}

function displayResults(gifs) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.className = 'gif';
        resultsDiv.appendChild(img);
    });
}