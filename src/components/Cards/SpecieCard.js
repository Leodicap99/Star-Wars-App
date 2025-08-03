import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";

function SpecieCard({specie}){
     const [people, setPeople] = useState([]);
     const [films, setFilms] = useState([]);
     const createdDate = specie?.created ? new Date(specie.created).toISOString().split('T')[0] : "N/A";
     const editedDate = specie?.edited ? new Date(specie.edited).toISOString().split('T')[0] : "N/A";
      useEffect(()=>{
        const fetchPilots = async() =>{
            let fetchedPeople = await fetchArrayOfResponses(specie.people || []);
            setPeople(fetchedPeople);
        }
        const fetchFilms = async() =>{
            let fetchedFilms = await fetchArrayOfResponses(specie.films || []);
            setFilms(fetchedFilms);
        }
        fetchFilms();
        fetchPilots();
      },[specie.people, specie.films])
      return (
        <div className="character-card">
        <p>
            <strong>Name:</strong> {specie.name}
        </p>
        <p>
            <strong>Height:</strong> {specie.classification}
        </p>
        <p>
            <strong>Mass:</strong> {specie.designation}
        </p>
        <p>
            <strong>Hair Color:</strong> {specie.average_height}
        </p>
        <p>
            <strong>Skin Color:</strong> {specie.skin_colors}
        </p>
        <p>
            <strong>Birth Year:</strong> {specie.hair_colors}
        </p>
        <p>
            <strong>Gender:</strong> {specie.eye_colors}
        </p>
        <p>
            <strong>Gender:</strong> {specie.average_lifespan}
        </p>
        <p>
            <strong>Gender:</strong> {specie.language}
        </p>
        <p>
            <strong>Starships:</strong> {people.map((person)=>{return person.name}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Starships:</strong> {films.map((film)=>{return film.title}).join(", ") || 'None'}
        </p>
        <p>
            <strong>Created:</strong> {createdDate}
        </p>
        <p>
            <strong>Edited:</strong> {editedDate}
        </p>
    </div>
      )
}
export default SpecieCard;