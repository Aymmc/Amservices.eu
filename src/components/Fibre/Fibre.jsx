import React, { useEffect, useState } from 'react'
import FibreImg from './FibreImg.png'
import useInView from '../../Hook/UseInView';
import './Fibre.css'
const Fibre = () => {
    const [refLeft, inViewLeft] = useInView();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inViewLeft) {
            let start = 0;
            const end = 120; // objectif
            const duration = 2000; // durée en ms
            const startTime = performance.now();

            const animate = (time) => {
                const progress = Math.min((time - startTime) / duration, 1);
                const value = Math.floor(progress * end);
                setCount(value);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [inViewLeft]);


    return (
        <>
            <h2 className="title_materiel">
                Fibre Optique : La puissance de la connexion
            </h2>

            <article ref={refLeft}
                className={`section hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div>
                    <img className="section-img" src={FibreImg} alt="" />
                </div>
                <div className="section-desc">
                    <p>
                        En tant que fournisseur internet, AMServices gère votre connexion fibre optique de A à Z. Nous vous offrons une solution sur mesure, ultra-rapide et sans faille, pour propulser la productivité de votre entreprise.
                    </p>
                    <ul>
                        <li><span>Vitesse et performance</span> : Profitez d'un débit inégalé et garanti, idéal pour la visioconférence et le cloud.</li>
                        <li><span>Stabilité et fiabilité</span> : Pour une disponibilité maximale, nos routeurs haut de gamme basculent automatiquement vers la 4G en cas de coupure.</li>
                        <li><span>Support de A à Z</span> : Nous gérons l'ensemble de votre connexion, de l'installation à la maintenance, avec un service client de proximité et réactif.</li>
                    </ul>
                </div>
                <div className="compteur_fibre_client">
                    <h3>{count}+</h3>
                    <p>Clients satisfaits</p>
                </div>
            </article>


        </>
    )
}

export default Fibre