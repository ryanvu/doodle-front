import React from 'react'
import { useCanvas } from '../../context/CanvasContext'; 

import './Slider.scss';

const Slider = () => {

    const { width, setWidth } = useCanvas();

    const changeWidth = (e) => {
        setWidth(e.target.value);
    }
    return (
        <div className="slider">
            <label htmlFor="strokeWidth">Stroke Width: {width}</label>
            <div className="slider__input-wrap">
                <input className="slider__input" type="range" min={0} max={100} value={width} onChange={changeWidth}/>
            </div>
        </div>
    )
}

export default Slider
