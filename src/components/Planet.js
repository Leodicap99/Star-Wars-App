import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../utils/fetchArrayOfResponses";

function Planet( {planet}){

    const [films,setFilms] = useState([]);
    const [residents,setResidents] = useState([]);
    const createdDate = planet?.created ? new Date(planet.created).toISOString().split('T')[0] : "N/A";
const editedDate = planet?.edited ? new Date(planet.edited).toISOString().split('T')[0] : "N/A";
    useEffect(()=>{
        const fetchFilms = async() => {
                let fetchedFilms = await fetchArrayOfResponses(planet?.films || []);
                setFilms(fetchedFilms);
        }
        const fetchResidents = async() => {
            let fetchedSpecies = await fetchArrayOfResponses(planet?.residents || []);
            setResidents(fetchedSpecies);
        }
        fetchResidents();
        fetchFilms();
    }
    , [planet]);
    return (
        <div className="character-card">
            <p>
                <strong>Name:</strong> {planet.name}
            </p>
            <p>
                <strong>Rotation Period:</strong> {planet.rotation_period}
            </p>
            <p>
                <strong>Orbital Period:</strong> {planet.orbital_period}
            </p>
            <p>
                <strong>Diameter:</strong> {planet.diameter}
            </p>
            <p>
                <strong>Climate:</strong> {planet.climate}
            </p>
            <p>
                <strong>Gravity:</strong> {planet.gravity}
            </p>
            <p>
                <strong>Surface Water:</strong> {planet.surface_water}
            </p>
            <p>
                <strong>Terrain:</strong> {planet.terrain}
            </p>
            <p>
                <strong>Films:</strong> {films.map((film)=>{return film.title}).join(", ") || 'None'}
            </p>
            <p>
                <strong>Residents:</strong> {residents.map((resident)=>{return resident.name}).join(", ") || 'None'}
            </p>
            <p>
                <strong>Created:</strong> {createdDate}
            </p>
            <p>
                <strong>Edited:</strong> {editedDate}
            </p>
            </div>
    );
}
export default Planet