import React from 'react';
import {useState} from 'react';
import Grid from "./grid";
import Arrow from "./images/arrow.svg"
import RotateButton from './rotateButton';
import "./styles.css"
const Game = () =>{
    const [history, setHistory] = useState(  [Array(9).fill(null)]    );
    const [history1, setHistory1] = useState(  [Array(9).fill(null)]    );
    const [history2, setHistory2] = useState(  [Array(9).fill(null)]    );
    const [history3, setHistory3] = useState(  [Array(9).fill(null)]    );
    const [stepNumber, setStepNumber] = useState(0);
    const [whiteIsNext, setWhiteIsNext] = useState(true);
    const bw = whiteIsNext ? "White" : "Black";
    const handleClick = (i) => {
        const historyPoint = history.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        //return if won or occupied
        if (pieces[i]) return;
        //otherwise select the square
        pieces[i] = bw;
        setHistory([...historyPoint, pieces]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const handleClick1 = (i) => {
        const historyPoint = history1.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        //return if won or occupied
        if (pieces[i]) return;
        //otherwise select the square
        pieces[i] = bw;
        setHistory1([...historyPoint, pieces]);
        setHistory([...history, history.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const handleClick2 = (i) => {
        const historyPoint = history2.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        //return if won or occupied
        if (pieces[i]) return;
        //otherwise select the square
        pieces[i] = bw;
        setHistory2([...historyPoint, pieces]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const handleClick3 = (i) => {
        const historyPoint = history3.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        //return if won or occupied
        if (pieces[i]) return;
        //otherwise select the square
        pieces[i] = bw;
        setHistory3([...historyPoint, pieces]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }

    const clockwise = () => {
        const historyPoint = history.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[6])
        next.push(pieces[3])
        next.push(pieces[0])
        next.push(pieces[7])
        next.push(pieces[4])
        next.push(pieces[1])
        next.push(pieces[8])
        next.push(pieces[5])
        next.push(pieces[2])
        setHistory([...historyPoint,next])
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const clockwise1 = () => {
        const historyPoint = history1.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[6])
        next.push(pieces[3])
        next.push(pieces[0])
        next.push(pieces[7])
        next.push(pieces[4])
        next.push(pieces[1])
        next.push(pieces[8])
        next.push(pieces[5])
        next.push(pieces[2])
        setHistory1([...historyPoint,next])
        setHistory([...history, history.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const clockwise2 = () => {
        const historyPoint = history2.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[6])
        next.push(pieces[3])
        next.push(pieces[0])
        next.push(pieces[7])
        next.push(pieces[4])
        next.push(pieces[1])
        next.push(pieces[8])
        next.push(pieces[5])
        next.push(pieces[2])
        setHistory2([...historyPoint, next]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const clockwise3 = () => {
        const historyPoint = history3.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[6])
        next.push(pieces[3])
        next.push(pieces[0])
        next.push(pieces[7])
        next.push(pieces[4])
        next.push(pieces[1])
        next.push(pieces[8])
        next.push(pieces[5])
        next.push(pieces[2])
        setHistory3([...historyPoint, next]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    

    const cclockwise = () => {
        const historyPoint = history.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[2])
        next.push(pieces[5])
        next.push(pieces[8])
        next.push(pieces[1])
        next.push(pieces[4])
        next.push(pieces[7])
        next.push(pieces[0])
        next.push(pieces[3])
        next.push(pieces[6])
        setHistory([...historyPoint,next])
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const cclockwise1 = () => {
        const historyPoint = history1.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[2])
        next.push(pieces[5])
        next.push(pieces[8])
        next.push(pieces[1])
        next.push(pieces[4])
        next.push(pieces[7])
        next.push(pieces[0])
        next.push(pieces[3])
        next.push(pieces[6])
        setHistory1([...historyPoint,next])
        setHistory([...history, history.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const cclockwise2 = () => {
        const historyPoint = history2.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[2])
        next.push(pieces[5])
        next.push(pieces[8])
        next.push(pieces[1])
        next.push(pieces[4])
        next.push(pieces[7])
        next.push(pieces[0])
        next.push(pieces[3])
        next.push(pieces[6])
        setHistory2([...historyPoint, next]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setHistory3([...history3, history3.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }
    const cclockwise3 = () => {
        const historyPoint = history3.slice(0,stepNumber + 1);
        const current = historyPoint[stepNumber];
        const pieces = [...current];
        var next = [];
        next.push(pieces[2])
        next.push(pieces[5])
        next.push(pieces[8])
        next.push(pieces[1])
        next.push(pieces[4])
        next.push(pieces[7])
        next.push(pieces[0])
        next.push(pieces[3])
        next.push(pieces[6])
        setHistory3([...historyPoint, next]);
        setHistory1([...history1, history1.slice(-1)[0]]);
        setHistory2([...history2, history2.slice(-1)[0]]);
        setHistory([...history, history.slice(-1)[0]]);
        setStepNumber(historyPoint.length);
        setWhiteIsNext(!whiteIsNext);
    }

    const [rotationDirection, setRotationDirection] = useState(true); //True corresponds to clockwise



    return (
   		<>
            <div className="Current-Player">{bw}</div>
            <h3 className="Turn">Turn: {stepNumber}</h3>
            <div className="Pentago-Grid">

                <Grid pieces={history[stepNumber]} quad={1} onClick={handleClick} />  
                <Grid pieces={history1[stepNumber]} quad={2} onClick={handleClick1}/> 
                <Grid pieces={history2[stepNumber]} quad={3} onClick={handleClick2}/> 
                <Grid pieces={history3[stepNumber]} quad={4} onClick={handleClick3}/> 
                
                
            </div>
            <div className="btn-wrapper">
            <button className="Undo-Button" onClick={() => {
                    if (stepNumber > 0){
                    	setStepNumber(stepNumber - 1); 
                        setHistory([...history.slice(0, history.length - 1)])
                        setHistory1([...history1.slice(0, history1.length - 1)])
                        setHistory2([...history2.slice(0, history2.length - 1)])
                        setHistory3([...history3.slice(0, history3.length - 1)])
                    	setWhiteIsNext(!whiteIsNext);} 
                	}
                }>
                Undo
            </button>
            <button className="Switch-Button" onClick={() => {
                    setRotationDirection(!rotationDirection);
                }}>
                Switch
            </button>
           
                <div className="Rotate-Grid">
                    <RotateButton dir={rotationDirection} cclock={cclockwise} clock={clockwise}/>
                    <RotateButton dir={rotationDirection} cclock={cclockwise1} clock={clockwise1}/>
                    <RotateButton dir={rotationDirection} cclock={cclockwise2} clock={clockwise2}/>
                    <RotateButton dir={rotationDirection} cclock={cclockwise3} clock={clockwise3}/>
                    {/* <button className="Rotate-Button" dir={rotationDirection} cclock={cclockwise} clock={clockwise}><img className="clockArrow" src={Arrow} alt="Arrow"></img></button>
                    <button className="Rotate-Button" dir={rotationDirection} cclock={cclockwise1} clock={clockwise1}><img className="clockArrow" src={Arrow} alt="Arrow"></img></button>
                    <button className="Rotate-Button" dir={rotationDirection} cclock={cclockwise2} clock={clockwise2}><img className="clockArrow" src={Arrow} alt="Arrow"></img></button>
                    <button className="Rotate-Button" dir={rotationDirection} cclock={cclockwise3} clock={clockwise3}><img className="clockArrow" src={Arrow} alt="Arrow"></img></button> */}
                </div>
            </div>
            {/* <div className="Rotate-Grid">
            	<button className="Rotate-Button" onClick={clockwise2}>Bottom-Left Clockwise</button>
                <button className="Rotate-Button" onClick={cclockwise2}>Bottom-Left Counter-Clockwise</button>

                <button className="Rotate-Button" onClick={clockwise3}>Bottom-Right Clockwise</button>
                <button className="Rotate-Button" onClick={cclockwise3}>Bottom-Right Counter-Clockwise</button>
            </div> */}
            

        </>
    )
}
export default Game;



