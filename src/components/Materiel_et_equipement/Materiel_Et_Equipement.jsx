import React from 'react';
import AnimatedSection from '../../Hook/Block';
import Forfait_Orange from './Forfait_Orange.png';
import Enveloppe_Data from './Enveloppe_Data.png';
import Forfait_bloqué from './Forfait_bloqué.png';
import Huit_Lignes from "./8_Lignes.png"
import Pro_Modifiable from './Pro_Modifiable.png'
import useCountUp from '../../Hook/useCountUp'
import Astreinte from './Astrainte.png'
const Materiel_Et_Equipement = () => {
    const clients1 = useCountUp(400, 2000); // monte jusqu'à 400 en 2 secondes
    const clients2 = useCountUp(350, 2000); // monte jusqu'à 350 en 2 secondes
    return (
        <>
            <AnimatedSection
                sectionTitle="Téléphonie Mobile"
                direction="left"
                items={[
                    {
                        img: Forfait_Orange,
                        alt: "Forfait Orange",
                        title: "Forfait 100% Orange",
                        text: "Le forfait utilise les antennes Orange."
                    },
                    {
                        img: Enveloppe_Data,
                        alt: "Enveloppe Data Europe",
                        title: "Enveloppe data Europe",
                        text: "Le forfait est utilisable partout en Europe géographique."
                    },
                    {
                        img: Forfait_bloqué,
                        alt: "Forfait bloqué",
                        title: "Forfait bloqué",
                        text: "Impossible d'avoir un hors forfait."
                    }
                ]}
                count={clients1}
                countLabel="Clients satisfaits"
            />

            <AnimatedSection
                sectionTitle="Téléphonie Fixe"
                direction="right"
                items={[
                    {
                        img: Huit_Lignes,
                        alt: "Huit_Lignes",
                        title: "Jusqu'a 8 lignes simultanées",
                        text: "8 appels en même temps, 0 client oublié. AM Services, toujours joignable."
                    },
                    {
                        img: Pro_Modifiable,
                        alt: "Un Standard pro 100% personnalisable.",
                        title: "Un Standard pro 100% personnalisable.",
                        text: "De la TPE au centre d’appels, une solution téléphonique unique et performante"
                    },
                    {
                        img: Astreinte,
                        alt: "Astreinte et dépannage 24/7",
                        title: "Astreinte et dépannage 24/7",
                        text: "Téléphonie fiable avec support 24/7 et intervention rapide sur site."
                    }
                ]}
                count={clients2}
                countLabel="Clients satisfaits"
            />
        </>

    );
};

export default Materiel_Et_Equipement;
