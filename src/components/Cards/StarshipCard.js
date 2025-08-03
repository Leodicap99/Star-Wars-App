import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";

function Starship({starship}){
      const [films,setFilms] = useState([]);
        const [pilots,setPilots] = useState([]);
        const createdDate = starship?.created ? new Date(starship.created).toISOString().split('T')[0] : "N/A";
    const editedDate = starship?.edited ? new Date(starship.edited).toISOString().split('T')[0] : "N/A";
        useEffect(()=>{
            const fetchFilms = async() => {
                    let fetchedFilms = await fetchArrayOfResponses(starship?.films || []);
                    setFilms(fetchedFilms);
            }
            const fetchPilots = async() => {
                let fetchedPilots = await fetchArrayOfResponses(starship?.pilots || []);
                setPilots(fetchedPilots);
            }
            fetchPilots();
            fetchFilms();
        }
        , [starship]);
        return (
            <div className="character-card">
                <p>
                    <strong>Name:</strong> {starship?.name}
                </p>
                <p>
                    <strong>Rotation Period:</strong> {starship?.model}
                </p>
                <p>
                    <strong>Orbital Period:</strong> {starship?.manufacturer}
                </p>
                <p>
                    <strong>Diameter:</strong> {starship?.cost_in_credits}
                </p>
                <p>
                    <strong>Climate:</strong> {starship?.length}
                </p>
                <p>
                    <strong>Gravity:</strong> {starship?.max_atmosphering_speed}
                </p>
                <p>
                    <strong>Surface Water:</strong> {starship?.crew}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.passengers}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.cargo_capacity}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.consumables}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.hyperdrive_rating}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.MGLT}
                </p>
                <p>
                    <strong>Terrain:</strong> {starship?.starship_class}
                </p>
                <p>
                    <strong>Films:</strong> {films.map((film)=>{return film.title}).join(", ") || 'None'}
                </p>
                <p>
                    <strong>Residents:</strong> {pilots.map((pilot)=>{return pilot.name}).join(", ") || 'None'}
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
export default Starship;