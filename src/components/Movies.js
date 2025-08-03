import { useEffect, useState } from "react";
import MovieTable from "./MovieTable";
import './Movies.css';
function Movies(){
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await fetch('https://swapi.info/api/films');
                const data = await response.json();
                setMovies(data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return (
        <div className="movies-page">
            <h1 className="star-wars-heading">Star Wars Movies</h1>
             <div className="movies-container">
                <MovieTable movies={movies} loading={loading} />
            </div>
        </div>
    )
}
export default Movies;