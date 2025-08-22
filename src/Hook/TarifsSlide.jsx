// src/components/TarifsSlide.jsx
import React from "react";
import "./TarifSlide.css";

const TarifsSlide = ({ sectionTitle, tarifs, buttonLabel, openTarifs, setOpenTarifs }) => {
    return (
        <>
            <div className="tarif-button-container">
                <button className="tarif-button" onClick={() => setOpenTarifs(true)}>
                    {buttonLabel}
                </button>
            </div>

            <div className={`tarif-slide ${openTarifs ? "open" : ""}`}>
                <div className="tarif-header">
                    <h2>{sectionTitle}</h2>
                    <button className="close-btn" onClick={() => setOpenTarifs(false)}>
                        ✖
                    </button>
                </div>

                <div className="tarif-grid">
                    {tarifs.map(({ title, description, price }, i) => (
                        <div key={i} className="tarif-item">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <strong>{price}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TarifsSlide;
