import React from "react";

const Piece = ({value, onClick}) => {
    const style = value!=null ? (value + "-Piece") : "Piece";
    
	return(
		<div className={style} onClick={onClick}></div>
	)
}
export default Piece;