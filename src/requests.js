const ApiKey = "4edfec507e5263481f8e939ed0c4e2a2"
const baseUrl ='https://api.themoviedb.org/3/discover/movie?api_key='
const urlWithApiKey = baseUrl + ApiKey

const requests={
    fetchByPopularity:`${urlWithApiKey}&by=popularity.desc`,
    fetchNetflixOriginalsWithNetwork: `${urlWithApiKey}&with_genres=213`,
    fetchActionMovies: `${urlWithApiKey}&with_genres=28`,
    fetchComedyMovies: `${urlWithApiKey}&with_genres=35`,
    fetchHorrorMovies: `${urlWithApiKey}&with_genres=27`,
    fetchRomanceMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchDocumentariesMovies: `${urlWithApiKey}&with_genres=99`,
    fetchFamilyMovies: `${urlWithApiKey}&with_genres=10751`,

    fetchArabicMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchHollywoodMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchNewReleasesMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchDramaMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchKidsAndFamilyMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchAdventureMovies: `${urlWithApiKey}&with_genres=10749`,
    fetchCrimeDramaMovies: `${urlWithApiKey}&with_genres=10749`,
}

export default requests;