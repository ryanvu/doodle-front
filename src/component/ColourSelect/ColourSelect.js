import React from 'react';
import './ColourSelect.scss';

const ColourSelect = ({changeColour}) => {
    return (
        <div className="color">
            <div className="color-card">
                <div className="color-box"style={{background: "black"}}onClick={()=>{changeColour("black")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "blue"}}onClick={()=>{changeColour("blue")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "green"}}onClick={()=>{changeColour("green")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "yellow"}}onClick={()=>{changeColour("yellow")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "orange"}}onClick={()=>{changeColour("orange")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "red"}}onClick={()=>{changeColour("red")}}/>
            </div>
            
            <div className="color-card">
                <div className="color-box"style={{background: "purple"}}onClick={()=>{changeColour("purple")}}/>
            </div>
            <div className="color-card">
                <div className="color-box"style={{background: "pink"}}onClick={()=>{changeColour("pink")}}/>
            </div>
        </div>
    )
}

export default ColourSelect
