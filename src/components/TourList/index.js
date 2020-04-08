import React, { useState } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    console.log(id);
  };
  return (
    <section className="tourlist">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default TourList;
