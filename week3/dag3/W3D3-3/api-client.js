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

