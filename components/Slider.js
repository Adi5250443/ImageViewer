import React from "react";
import { useState } from "react";
import Viewerbox from "./Viewerbox";
import data from "../data/images.json";

const Slider = () => {
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (item) => {
    setClickedImg(item.link);
  };

  return (
    <div>
      {clickedImg && <Viewerbox clickedImg={clickedImg} />}
      
      <div className="card-group m-2">
        {data.data.map((item) => (
          <div className="card ">
            <div className="row">
              <img
                src={item.link}
                alt="not found"
                onClick={() => handleClick(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
