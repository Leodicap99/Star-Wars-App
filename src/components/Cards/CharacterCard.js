import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";

function Character({ character }) {
  const [homeworld,setHomeworld] = useState("");
  const [films,setFilms] = useState([]);
  const [species,setSpecies] = useState([]);
  const [vehicles,setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const createdDate = new Date(character.created).toISOString().split('T')[0];
  const editedDate = new Date(character.edited).toISOString().split('T')[0]; 
  useEffect(()=>{
    const fetchHomeWorld = async() => {
        try {
            const response = await fetch(character.homeworld);
            const data = await response.json();
            setHomeworld(data.name);
        }catch(err){
            console.error("Error fetching homeworld:", err);
        }
    }
    const fetchFilms = async() => {
        let fetchedFilms = await fetchArrayOfResponses(character.films);
        setFilms(fetchedFilms);
    }
    const fetchSpecies = async() =>{
        let fetchedSpecies = await fetchArrayOfResponses(character.species);
        setSpecies(fetchedSpecies);
    }
    const fetchVehicles = async() =>{
        let fetchedVehicles = await fetchArrayOfResponses(character.vehicles);
        setVehicles(fetchedVehicles);
    }
    const fetchStarships = async() =>{
        let fetchedStarships = await fetchArrayOfResponses(character.starships);
        setStarships(fetchedStarships);
    }
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
    fetchFilms();
    fetchHomeWorld();

  },[character.homeworld, character.films, character.species, character.starships, character.vehicles])
return (
    <li className="character-card">
        <p>
            <strong>Name:</strong> {character.name}
        </p>
        <p>
            <strong>Height:</strong> {character.height}
        </p>
        <p>
            <strong>Mass:</strong> {character.mass}
        </p>
        <p>
            <strong>Hair Color:</strong> {character.hair_color}
        </p>
        <p>
            <strong>Skin Color:</strong> {character.skin_color}
        </p>
        <p>
            <strong>Birth Year:</strong> {character.birth_year}
        </p>
        <p>
            <strong>Gender:</strong> {character.gender}
        </p>
        <p>
            <strong>Homeworld:</strong> {homeworld}
        </p>
        <p>
            <strong>Films:</strong> {films.map((film)=>{return film.title}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Species:</strong> {species.map((specie)=>{return specie.name}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Vehicles:</strong> {vehicles.map((vehicle)=>{return vehicle.name}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Starships:</strong> {starships.map((starship)=>{return starship.name}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Created:</strong> {createdDate}
        </p>
        <p>
            <strong>Edited:</strong> {editedDate}
        </p>
    </li>
);
}
export default Character;
