import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";

function VehicleCard({vehicle}){
     const [pilots, setPilots] = useState([]);
     const createdDate = vehicle?.created ? new Date(vehicle.created).toISOString().split('T')[0] : "N/A";
     const editedDate = vehicle?.edited ? new Date(vehicle.edited).toISOString().split('T')[0] : "N/A";
      useEffect(()=>{
        const fetchPilots = async() =>{
            let fetchedPilots = await fetchArrayOfResponses(vehicle.pilots || []);
            setPilots(fetchedPilots);
        }
        fetchPilots();
      },[vehicle.pilots])
      return (
        <div className="character-card">
        <p>
            <strong>Name:</strong> {vehicle.name}
        </p>
        <p>
            <strong>Height:</strong> {vehicle.model}
        </p>
        <p>
            <strong>Mass:</strong> {vehicle.manufacturer}
        </p>
        <p>
            <strong>Hair Color:</strong> {vehicle.cost_in_credits}
        </p>
        <p>
            <strong>Skin Color:</strong> {vehicle.length}
        </p>
        <p>
            <strong>Birth Year:</strong> {vehicle.max_atmosphering_speed}
        </p>
        <p>
            <strong>Gender:</strong> {vehicle.crew}
        </p>
        <p>
            <strong>Gender:</strong> {vehicle.passengers}
        </p>
        <p>
            <strong>Gender:</strong> {vehicle.cargo_capacity}
        </p>
        <p>
            <strong>Gender:</strong> {vehicle.consumables}
        </p>
        <p>
            <strong>Gender:</strong> {vehicle.vehicle_class}
        </p>
        <p>
            <strong>Starships:</strong> {pilots.map((pilot)=>{return pilot.name}).join(", ") || 'None'}
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
export default VehicleCard;