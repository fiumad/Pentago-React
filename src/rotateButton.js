import React from "react";
import Arrow from "./images/arrow.svg"

const RotateButton = ({dir, cclock, clock }) => {
    const style = dir ? "clockArrow" : "cclockArrow";
    const chooseClick = dir ? clock : cclock;
	return(
		<button className="Rotate-Button" onClick={chooseClick}>
            <img className={style} alt="arrow" src={Arrow}></img>
        </button>
	)
}
export default RotateButton;