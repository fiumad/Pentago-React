import React from 'react';
import Piece from './piece'

const Grid = ({pieces, onClick}) => (
    <div>
     {pieces.map((piece, i) => (
    	<Piece key={i} value={piece} onClick={() => onClick(i)} />
    ))}
 	</div>
)
export default Grid;