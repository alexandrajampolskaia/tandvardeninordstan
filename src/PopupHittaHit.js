import React, { useState } from "react";
import FadeEffect from './FadeEffect'
import map from "./map.png";
 
const MoviePopUp = ({ item }) => {
const [show, setShow] = useState(false);

  return (
	  <div>
    <FadeEffect show={show}>
      <div className="popUpModal" onClick={() => setShow(show => !show)}>
        <div className="popUpDiv">
		<div className="popUpX" onClick={() => setShow(show => show)}> x </div>
		<br/> <div className="mapText">Kliniken är belägen inne i köpcentret Nordstan på 4e våningen. <br/> Hiss och entre finnes mellan Glasskiosken och Synoptik (mittemot Telenor). <br/><br/>
		  <img src={map} className="mapPic" alt="map" />
		  </div>
		  </div>
        </div>
	</FadeEffect> 
	<button className="gridButton" onClick={() => setShow(show => !show)}> Mer info </button>
	</div>
  );
};

export default MoviePopUp;