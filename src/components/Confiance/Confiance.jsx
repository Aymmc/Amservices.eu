// SubMenuInformatique.jsx
import React from "react";
import './Confiance.css'
import { Marques } from "../Marques/Marques";

const Confiance = () => {
    return (
        <>
            <div className="Confiance">
                <div className="Confiance_Desc">
                    <h3>Nos références</h3>
                    <p>Ils nous font confiance...Pourquoi pas vous ?</p>
                </div>
                <Marques />
            </div>
        </>
    );
};

export default Confiance;