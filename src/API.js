const ApiKey = "4edfec507e5263481f8e939ed0c4e2a2"
const baseUrl ='https://api.themoviedb.org/3/discover/movie?api_key='
const urlWithApiKey = baseUrl + ApiKey

const requests={
    ByPopularity:`${urlWithApiKey}&by=popularity.desc`,
    NetflixOriginalsWithNetwork: `${urlWithApiKey}&with_genres=213`,
    ActionMovies: `${urlWithApiKey}&with_genres=28`,
    ComedyMovies: `${urlWithApiKey}&with_genres=35`,
    HorrorMovies: `${urlWithApiKey}&with_genres=27`,
    RomanceMovies: `${urlWithApiKey}&with_genres=10749`,
    DocumentariesMovies: `${urlWithApiKey}&with_genres=99`,
    FamilyMovies: `${urlWithApiKey}&with_genres=10751`,

    ArabicMovies: `${urlWithApiKey}&with_genres=10749`,
    HollywoodMovies: `${urlWithApiKey}&with_genres=10749`,
    NewReleasesMovies: `${urlWithApiKey}&with_genres=10749`,
    DramaMovies: `${urlWithApiKey}&with_genres=10749`,
    KidsAndFamilyMovies: `${urlWithApiKey}&with_genres=10749`,
    AdventureMovies: `${urlWithApiKey}&with_genres=10749`,
    CrimeDramaMovies: `${urlWithApiKey}&with_genres=10749`,
}

export default requests