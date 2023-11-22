import { useLocation, useParams } from 'react-router-dom'
import './Movie.css'
import { useState, useEffect } from 'react';

export default function Movie(props){
    // const title = useParams();
    // console.log(title)
    const location = useLocation();
    // const {title} = location.state
    // const [t, setT] = useState(null);

    // useEffect(()=>{
    //     console.log(location.state)
    //     if(location.state){
    //         setT(location.state.title);
    //         console.log(title)
    //     }
    // },[])

    // console.log('ttt', title)

    // const [movieState, setMovieState] = useState({
    //     title: '',
    //     imgUrl: '',
    //   });

    const {type} = useParams();
    // console.log(type)
    console.log(useLocation().state.movie.title);
    // const stateParamVal = useLocation().state.stateParam;

    // console.log(stateParamVal);
    
    //   useEffect(() => {
    //     const fetchInfo = () =>{
    //         console.log('ls',location)
    //         if (location.state) {
    //             console.log('ls',location.state)
    //           setMovieState({
    //             title: location.state.title,
    //             imgUrl: location.state.imgUrl          
    //           });
    //         }
    //     };
    //     fetchInfo();
    //   }, []);

    //   console.log(movieState)


    return(
        <div className="hii">
            Movie
        </div>
    )
}