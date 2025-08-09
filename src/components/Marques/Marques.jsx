import React from 'react';

import Adam from './adam.png';
import Look from './look.png';
import Marcot from './marcot.png';
import MMA from './mma.png';
import Fdcar from './fdcars.png';
import Immo from './immo.png';
import Decobois from './decobois.png';
import Ambus from './Ambus.png'
import "./Marques.css"
export const Marques = () => {
    // On stock dans la const images tout les données des imports 
    const images = [Adam, Look, Marcot, MMA, Fdcar, Immo, Decobois, Ambus];

    // On double le tableau pour que l’animation soit continue sans saut
    const sliderImages = [...images, ...images];

    return (
        <>
            <div className="slider-container">
                <div className="slider">
                    {/* on map sur le tableau slidesImages et on le décompose pour avec la Src et l'index */}
                    {sliderImages.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Marque ${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    );
};
