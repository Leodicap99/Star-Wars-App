// src/components/ShimmerCard.jsx
import "./ShimmerCard.css";

function ShimmerCard() {
    return (
      <div className="character-description">
        <h2 className="star-wars-heading">Loading...</h2>
        <div className="entity-list-container">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="character-card shimmer-card" key={i}>
              <div className="shimmer-line title"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line extra"></div> {/* New line for added height */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default ShimmerCard;
