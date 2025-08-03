import { useEffect, useState } from "react";
import { fetchArrayOfResponses } from "../../utils/fetchArrayOfResponses";
import ShimmerCard from "../Shimmer/ShimmerCard";

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