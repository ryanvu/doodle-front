import React, { useState } from 'react'
import Canvas from '../../component/Canvas/Canvas';
import ColourSelect from '../../component/ColourSelect/ColourSelect';
import Slider from '../../component/Slider/Slider';
import { useCanvas } from '../../context/CanvasContext';
//styles
import './Upload.scss';

//img
import next from '../../assets/img/next.svg';
import UploadForm from '../../component/UploadForm/UploadForm';

const Upload = () => {
    const { clearCanvas, selectColour, colour, uploadCanvas, image } = useCanvas();
    const [ isDrawing, setIsDrawing ] = useState(true);

    const changeColour = (colour) => {
        console.log(colour)
        selectColour(colour)
    }

    const completeUpload = (caption) => {
        uploadCanvas(caption);
    }
    
    return (    
            <div className="upload">
                <div className="upload__container">
                    {!isDrawing && <img style={{transform: "rotate(180deg)"}}onClick={()=>{setIsDrawing(true)}}src={next} alt="next svg icon"/>}
                    <Canvas />
                    {isDrawing && 
                    <>
                    <div className="upload__right">
                        <ColourSelect changeColour={changeColour}/>
                        <div className="upload__selected" style={{background: `${colour}`}}/>
                        <button className="upload__btn" onClick={clearCanvas}>Clear</button>
                    </div>
                    <img onClick={()=>{setIsDrawing(false)}}src={next} alt="next svg icon"/>
                    </>}
                </div>
                {isDrawing && <Slider />}
                {!isDrawing && 
                <UploadForm handleClick={completeUpload}/>}

            </div>
    )
}

export default Upload
