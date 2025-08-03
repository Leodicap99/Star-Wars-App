import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";
import ShimmerCard from "../Shimmer/ShimmerCard";
/**
 * A reusable React component for fetching and displaying a list of entities.
 * It provides functionality to toggle between cards depending on the card needed
 * to be displayed.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title displayed above the entity list.
 * @param {string[]} props.urls - An array of URLs to fetch the entities from.
 * @param {function} props.renderItem - A function to render each entity in the list.
 * @returns {JSX.Element} The rendered EntityList component.
 */
function EntityList({title ,urls, renderItem}){
    const [showAll, setShowAll] = useState(false);
    const [visibleItems,setVisibleItems] = useState([]);
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchAllEntities = async() => {
            try{
            const fetchedItems = await fetchArrayOfResponses(urls || []);
            setItems(fetchedItems);
            }catch(err){
                console.error('Error',err);
            }finally{
                setLoading(false);
            }
        }
        fetchAllEntities();
    }, [urls]);
    useEffect(()=>{
        if(!showAll){
            setVisibleItems(items.slice(0, 3))
        }else{
            setVisibleItems(items);
        }
    },[showAll, items])
    function handleShowMore() {
        setShowAll(!showAll);
    }
    if(loading){
        return <ShimmerCard />
    }
    return (
        <div className="character-description">
            <h2>{title}</h2>
        <div className="entity-list-container">
            {visibleItems.map((entity) => renderItem(entity))}
            <button className="show-more" onClick={handleShowMore}>
                {showAll ? "Show Less" : "Show More"}
            </button>
        </div>
        </div>
    )
}
export default EntityList;