async function fetchMovie() {
    const movieName = 'Joker'
    const url = `https://imdb236.p.rapidapi.com/imdb/autocomplete?query=${movieName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '094e122978msh508c65e68430d85p1cd1e9jsn50821c63b5c6',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        
        if(!response.ok){
            throw new Error("could not fetch resource")
        }
        const data = await response.json();
        console.log(data); // Log the entire response data to see its structure
        // data contains all the data for our movie
        
    } catch (error) {
        console.error(error);
    }
}

fetchMovie();