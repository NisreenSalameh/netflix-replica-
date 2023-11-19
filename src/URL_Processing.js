import "./API"

   const [movies, setMovies] = useState([]) 
    const getMovies = () =>{
        
        fetch(requests.fetchActionMovies)
        .then(res => res.json())
        .then(json => setMovies(json.results))
    }

    useEffect(() =>{ 
        getMovies()
    },[])