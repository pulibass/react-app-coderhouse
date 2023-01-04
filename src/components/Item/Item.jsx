import ButtonSeeMore from '../ButtonSeeMore/ButtonSeeMore';
import './item.scss';
import React from 'react';
import { useState } from 'react';

export default function ItemList({ id, image, name, value, details }) {


    const [buttonChange, setButtonChange] = useState("Corazon");
    const button = () => {
        if (buttonChange === "Corazon") {
            setButtonChange('Click')
        } else {
            setButtonChange("Corazon");
        }
    };



    return (

        <div className="containerCard">
            <div key={id} className="card">
                <div className="corazonContainer">
                    <button onClick={button} className={buttonChange}>❤</button>
                </div>
                <div className="containerImgText">

                    <div className="titleCard">
                        <h2>{name}</h2>
                    </div>
                    <div className="imgCard">
                        <img src={image} alt={name} />
                    </div>
                </div>
                <div className="containerDetailsCard">
                    <div className="price">
                        <h3>${value}</h3>
                    </div>
                    <div className="description">
                        <h4>{details}</h4>
                    </div>
                    <div className="buttonSeeMoreCard">
                        <ButtonSeeMore />
                    </div>
                </div>
            </div>
        </div>
    )
}