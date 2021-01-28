import React, { useEffect } from 'react'

//styles
import './Canvas.scss';
import { useCanvas } from "../../context/CanvasContext";

const Canvas = () => {
    const {
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
        colour,
        changeColour,
        width,
        changeWidth
    } = useCanvas();

    useEffect(() => {
        prepareCanvas();
    },[prepareCanvas]);

    useEffect(() => {
        changeColour()
    }, [colour, changeColour])

    useEffect(() => {
        changeWidth()
    },[width, changeWidth]);

    return (
       <canvas
        className="canvas" 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
       />
    )
}

export default Canvas
