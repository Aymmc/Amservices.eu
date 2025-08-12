import React from 'react';
import "./Infogerance.css";
import AnimatedSection from '../../Hook/Block';
import useCountUp from '../../Hook/useCountUp'
import Flexibilite from './Flexibilite.png'
import Protection from './Protection.png'
import Update from './Update.png'
const Infogerance = () => {
    const clients1 = useCountUp(500, 2000); // monte jusqu'à 400 en 2 secondes
    return (
        <>
            <AnimatedSection
                sectionTitle="Infogérance & Maintenance"
                direction="left"
                items={[
                    {
                        img: Update,
                        alt: "Mises à jour et optimisation",
                        title: "Mises à jour et optimisation",
                        text: "On assure les mises à jour logicielles pour garantir performance et sécurité."
                    },
                    {
                        img: Protection,
                        alt: "Protection",
                        title: "Sécurité renforcée",
                        text: "Nous protégeons votre système contre les menaces numériques (virus, ransomwares, etc.)."
                    },
                    {
                        img: Flexibilite,
                        alt: "Flexibilité",
                        title: "Flexibilité",
                        text: "Nous résolvons les pannes matérielles et logicielles."
                    }
                ]}
                count={clients1}
                countLabel="Clients satisfaits"
            />

        </>
    );
}

export default Infogerance;
