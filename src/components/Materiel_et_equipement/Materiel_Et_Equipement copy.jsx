import React from 'react'
import TelephonePortable from './TelephonePortable.png'
import TelephoneFixe from './TelephoneFixe.png'
import useCountUp from '../../Hook/useCountUp'; // Ton hook compteur
import './style.css'
import useInView from '../../Hook/UseInView';
const Materiel_Et_Equipement = () => {
    const clients1 = useCountUp(400, 2000); // monte jusqu'à 400 en 2 secondes
    const clients2 = useCountUp(350, 2000); // monte jusqu'à 350 en 2 secondes
    const lignes = useCountUp(8, 2000)
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="section-title">
                Materiel et Equipement
            </h2>


            <article ref={refLeft} className={`section hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div>
                    <img className="section-img" src={TelephonePortable} alt="Photo de présentation de la gamme Mobile" />
                </div>
                <div className="section-desc">
                    <p>Pour votre entreprise et vos équipes en déplacement, nous gérons l'ensemble de votre flotte de téléphones mobiles et de forfaits, de A à Z.
                    </p>
                    <ul>
                        <li><span>Gestion de flotte</span> : Nous prenons en charge la totalité de vos équipements pour vous permettre de vous concentrer sur votre activité.</li>
                        <li><span>Forfaits sur mesure</span> : Des forfaits adaptés aux besoins de votre entreprise et de vos équipes, de la simple communication aux applications métiers les plus exigeantes.</li>
                        <li><span>Support de proximité</span> : Notre équipe est à votre disposition pour vous accompagner de l'installation à la maintenance, pour un service client réactif.</li>
                    </ul>
                </div>
                <div className="compteur_fibre_client">
                    <h3>{clients1}+</h3>
                    <p>Clients satisfaits</p>
                </div>
            </article>
            {/* <article ref={refRight}
                className={`section section-reverse section-container-small hidden-block ${inViewRight ? "animate-right" : ""}`}>
             
              <div>
                    <img className="section-img" src={TelephoneFixe} alt="Photo de présentation de la gamme Téléphones fixes" />
                </div>
                <div className="section-desc">
                    <p>
                        Pour votre bureau, simplifiez votre téléphonie avec nos téléphones fixes professionnels. Nous gérons l'installation et la configuration de votre système VoIP pour répondre à tous vos besoins de communication.
                    </p>
                    <ul>
                        <li><span>Simplicité</span> : Un système de téléphonie professionnelle clé en main pour votre entreprise.</li>
                        <li><span>Installation et configuration</span> : Nous gérons l'ensemble de votre solution VoIP, de A à Z.</li>
                        <li><span>Solutions sur mesure</span> : Des fonctionnalités adaptées à tous vos besoins de communication.</li>
                    </ul>
                </div>
                <div>
                    <div className="compteur_fibre_client">
                        <h3>{clients2}+</h3>
                        <p>Clients satisfaits</p>
                    </div>
                    <div className="compteur_fibre_client">
                        <h3>{lignes}</h3>
                        <p>Lignes Simultanées</p>
                    </div>
                </div>
            </article> */}


        </>
    )
}

export default Materiel_Et_Equipement