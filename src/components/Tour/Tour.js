import React from "react";
import "./tour.scss";

const Tour = ({ tour, removeTour }) => {
  const { id, city, img, name, info } = tour;
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="tour image" />
        <span>
          <i className="fas fa-window-close" />
        </span>
      </div>

      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span className="close-btn">
            <i class="fas fa-caret-square-down"></i>
          </span>
        </h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;
