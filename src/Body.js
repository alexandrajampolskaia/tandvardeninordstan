import React from "react";
import logo from "./logo.png";
import location from "./location.png"
import time2 from "./time2.png"
import PopupKontakt from './PopupKontakt'
import PopupHittaHit from './PopupHittaHit'
import PopupOppettider from './PopupOppettider'

export default function Body() {
  return (
    <div className="bodyGrid">
      <div className="bodyGridWithPic">
        <div className="opacityBoxInGrid">
          <img src={logo} className="toothLogo" alt="logo" />
          <p className="textLogo">TANDVÅRDEN I NORDSTAN</p>
        </div>
      </div>

      <div className="kontaktDiv">
	  <a href="tel:031150903" onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p class="telNum">031-15 09 03</p></a>
        {/* <p className="telNum">031-15 09 03</p> */}
        <p className="akutTextRubrik">KONTAKT</p>
        <p className="akutText">
		  För att komma i kontakt med oss går det bra att ringa och besöka oss under våra öppettider. Vi svarar även aktivt på mail.
        </p>
        {/* <button className="gridButton">Mer info</button> */}
		<PopupKontakt />
      </div>

      <div className="hittaHitDiv">
        <p><img src={location} className="locationLogo" alt="location" /></p>
        <p className="akutTextRubrik">HITTA HIT</p>
        <p className="akutText">
          Götgatan 14 <br/>
		  411 05 Göteborg
        </p>
        {/* <button className="gridButton">Boka tid</button> */}
		<PopupHittaHit />
      </div>

      <div className="openDiv">
	  <p><img src={time2} className="timeLogo" alt="time2" /></p>
	  <p className="akutTextRubrik">ÖPPETTIDER</p>
        <p className="akutText">
          Vi har öppet på vardagar och håller helger och storhelger stängt. På somrarna brukar vi även ta lite semester. <br/>
        </p>
        {/* <button className="gridButton">Kontakt</button> */}
		<PopupOppettider />
      </div>

    </div>
  );
}