import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import EntityList from "./EntityList";
import VehicleCard from "../Cards/VehicleCard";
import Character from "../Cards/CharacterCard";
import Planet from "../Cards/PlanetCard";
import Starship from "../Cards/StarshipCard";
import SpecieCard from "../Cards/SpecieCard";
import LoadingScreen from "../Shimmer/LoadingScreen";

function Movie(){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const movieUrl = searchParams.get('url');
    const [movie,setMovie] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const createdDate = movie?.created ? new Date(movie.created).toISOString().split('T')[0] : "N/A";
    const editedDate = movie?.edited ? new Date(movie.edited).toISOString().split('T')[0] : "N/A";
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(movieUrl);
                const data = await response.json();
                setMovie(data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[movieUrl]);
    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
        <div className="movie-container">
            <button className="back-button" onClick={() => {
                navigate('/');
            }}>Back to Movies</button>
            <h1>{movie.title}</h1>
            <p><strong>Episode:</strong> {movie.episode_id}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Producer:</strong> {movie.producer}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>  
            <p><strong>Created:</strong> {createdDate}</p>
            <p><strong>Edited:</strong> {editedDate}</p>  
            </div>
            <EntityList 
                title="Characters"
                urls={movie.characters}
                renderItem={(character)=> <Character character={character} key={character.url}/>}
            />
            <EntityList 
                title="Planets"
                urls={movie.planets}
                renderItem={(planet)=> <Planet planet={planet} key={planet.url}/>}
            />
             <EntityList 
                title="Starships"
                urls={movie.starships}
                renderItem={(starship)=> <Starship starship={starship} key={starship.url}/>}
            />
            <EntityList 
                title="Species"
                urls={movie.species}
                renderItem={(specie)=> <SpecieCard specie={specie} key={specie.url}/>}
            />
            <EntityList 
                title="Vehicles"
                urls={movie.vehicles}
                renderItem={(vehicle)=> <VehicleCard vehicle={vehicle} key={vehicle.url}/>}
            />
        </>
        
    );
}
export default Movie;