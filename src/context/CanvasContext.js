import React, { useContext, useRef, useState, useCallback } from 'react';
import axios from 'axios';

const CanvasContext = React.createContext();

export const useCanvas = () => useContext(CanvasContext);

export const CanvasProvider = ({ children }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [colour, selectColour] = useState("#000000");
    const [width, setWidth] = useState(5);
    const [image, setImage] = useState(null);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const prepareCanvas = useCallback(() => {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth * 0.5;
            canvas.height = window.innerHeight * 0.5;
            canvas.style.width = `${canvas.width / 2}px`
            canvas.style.height = `${canvas.height / 2}px`

            const context = canvas.getContext("2d");
            context.scale(2,2);
            context.lineCap = "round";
            context.strokeStyle = "black";
            context.lineWidth = 5;
            contextRef.current = context;
        },[]);
        
    

    const changeColour = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.strokeStyle = colour;
    }

    const changeWidth = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.lineWidth = width;
    }

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const uploadCanvas = (caption) => {
        const canvas = canvasRef.current;
        const canvasUrl = canvas.toDataURL('image/png', 1);
        
        axios.post(`http://localhost:5000/upload`,{img: canvasUrl, caption})
        .then(result => {
            console.log(result);
            setImage(result.data.img);
        })
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    const value = {
        changeColour,
        selectColour,
        colour,
        width,
        setWidth,
        changeWidth,
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        uploadCanvas,
        draw,
        image
    }

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasContext
