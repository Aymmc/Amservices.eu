import React from 'react'
import TelephonePortable from './TelephonePortable.png'
import TelephoneFixe from './TelephoneFixe.png'
import useCountUp from '../../Hook/useCountUp'; // Ton hook compteur
import './style.css'
import useInView from '../../Hook/UseInView';
import Enveloppe_Data from './Enveloppe_Data.png'
import Forfait_bloqué from './Forfait_bloqué.png'
import Forfait_Orange from './Forfait_Orange.png'


const Materiel_Et_Equipement = () => {
    const clients1 = useCountUp(400, 2000); // monte jusqu'à 400 en 2 secondes
    const clients2 = useCountUp(350, 2000); // monte jusqu'à 350 en 2 secondes
    const lignes = useCountUp(8, 2000)
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="section-title">
                Telephonie Mobile
            </h2>


            <article ref={refLeft} className={` hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div><img src={Forfait_Orange} alt="" />
                    <h4>Forfait 100% Orange</h4>
                    <p>Le forfait utilise les antennes orange  </p>
                </div>
                <div>
                    <img src={Enveloppe_Data} alt="" />
                    <h4>Enveloppe data Europe </h4>
                    <p>Le forfait est utilisable partout en Europe Geographique. </p></div>
                <div>
                    <img src={Forfait_bloqué} alt="" />
                    <h4>Forfait bloqué </h4>
                    <p>Impossible d'avoir un hors forfait. </p>
                </div>
            </article>


        </>
    )
}

export default Materiel_Et_Equipement