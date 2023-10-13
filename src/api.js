import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BASEURL}`
const apiKey = `${process.env.REACT_APP_APIKEY}`

// getMovieList get movie list
export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`)
    return movie.data.results
}

// searchMovie - menampilkan filter movie
export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${q}&page=1`)
    return search.data
}