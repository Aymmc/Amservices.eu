// src/components/AnimatedSection.jsx
import React from 'react';
import useInView from '../Hook/UseInView';
import '../components/Materiel_et_equipement/style.css';

const AnimatedSection = ({ sectionTitle, direction, items, count, countLabel }) => {
    return (
        <>
            <h2 className="section-title">{sectionTitle}</h2>

            <article className={`hidden-block ${direction === "left" ? "animate-left" : "animate-right"}`}>
                {items.map(({ img, alt, title, text }, i) => (
                    <div key={i}>
                        <img src={img} alt={alt} />
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                ))}

                {/* Affichage du compteur si count est défini */}
                {count !== undefined && (
                    <div className="compteur_fibre_client">
                        <h3>{count}+</h3>
                        <p>{countLabel}</p>
                    </div>
                )}
            </article>
        </>
    );
};


export default AnimatedSection;
