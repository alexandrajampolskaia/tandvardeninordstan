import React, { useState } from "react";
import FadeEffect from './FadeEffect'

 
const MoviePopUp = ({ item }) => {
const [show, setShow] = useState(false);

  return (
	  <div>
    <FadeEffect show={show}>
      <div className="popUpModal" onClick={() => setShow(show => !show)}>
        <div className="popUpDiv">
		<div className="popUpX" onClick={() => setShow(show => show)}> x </div>
		  </div>
        </div>
	</FadeEffect> 
	<p className="headerItems" onClick={() => setShow(show => !show)}>Öppettider</p>
	</div>
  );
};

export default MoviePopUp;