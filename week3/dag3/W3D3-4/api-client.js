const API_KEY = "0a7e5dbe920e7cc38baf72e431701e94";

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const result = await fetch(apiUrl, { method: "GET" });
        console.log("The result of getData function:", result);
        const data = await result.json();
        console.log("The data in getData function:", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const movieID = "tt0395495";

const getMovieTitel = async () => {
    const apiUrl2 = `https://api.themoviedb.org/3/find/${movieID}?api_key=${API_KEY}&external_source=imdb_id`;
    try {
        const result = await fetch(apiUrl2, { method: "GET" });
        console.log("The result of getMovieTitel function:", result);
        const data = await result.json();
        console.log("The data in getMovieTitel function:", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getTopRated = async () => {
    const apiUrl3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    try {
        const result = await fetch(apiUrl3, { method: "GET" });
        console.log("The result of getTopRated function:", result);
        const data = await result.json();
        console.log("The data in getTopRated function:", data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
