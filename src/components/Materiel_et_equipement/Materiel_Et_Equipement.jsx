import React, { useState } from 'react';
import AnimatedSection from '../../Hook/Block';
import Forfait_Orange from './Forfait_Orange.png';
import Enveloppe_Data from './Enveloppe_Data.png';
import Forfait_bloqué from './Forfait_bloqué.png';
import Huit_Lignes from "./8_Lignes.png";
import Optimisation from './Optimisaton_cout.png';
import Pro_Modifiable from './Pro_Modifiable.png';
import Interoperabilite from "./Interopérabilite.png";
import Astreinte from './Astrainte.png';
import useCountUp from '../../Hook/useCountUp';
import Experience from './Experience.png';
import TarifsSlide from '../../Hook/TarifsSlide';

const Materiel_Et_Equipement = () => {
    const clients1 = useCountUp(400, 2000);
    const clients2 = useCountUp(350, 2000);

    // état séparé pour chaque slide
    const [openTarifs, setOpenTarifs] = useState({ fixe: false, mobile: false });

    return (
        <>
            {/* === TELEPHONIE FIXE === */}
            <AnimatedSection
                sectionTitle="Téléphonie Fixe"
                direction="right"
                items={[
                    { img: Huit_Lignes, alt: "Huit_Lignes", title: "Jusqu'a 8 lignes simultanées", text: "Jusqu'a 8 appels par poste pour un service de qualité." },
                    { img: Pro_Modifiable, alt: "Standard Pro", title: "Un Standard pro 100% personnalisable", text: "De la TPE au centre d’appels, une solution téléphonique unique et performante" },
                    { img: Astreinte, alt: "Astreinte", title: "Astreinte et dépannage 24/7", text: "Téléphonie fiable avec support 24/7 et intervention rapide sur site." }
                ]}
                count={clients2}
                countLabel="Clients satisfaits"
                openTarifs={openTarifs.fixe}
            />

            <AnimatedSection
                direction="right"
                items={[
                    { img: Optimisation, alt: "Optimisation des coûts", title: "Optimisation des coûts", text: "Réduction des frais d'infrastructure, facturation claire et adaptée à la consommation." },
                    { img: Interoperabilite, alt: "Interopérabilité", title: "Interopérabilité et intégration", text: "Compatibilité avec outils métiers (CRM, ERP, Microsoft Teams, etc.) pour gagner en productivité." },
                    { img: Experience, alt: "Expérience client", title: "Expérience client améliorée", text: "File d'attente intelligente, statistiques d'appels, routage pour répondre plus vite et mieux aux appels." }
                ]}
                count={clients2}
                countLabel="Clients satisfaits"
                openTarifs={openTarifs.fixe}
            />

            <TarifsSlide
                buttonLabel="Voir nos tarifs Fixe"
                sectionTitle="Nos forfaits Fixe"
                tarifs={[{ title: "1 lignes", description: "Prix pour un poste", price: "25,00€HT/mois" }]}
                openTarifs={openTarifs.fixe}
                setOpenTarifs={(val) => setOpenTarifs(prev => ({ ...prev, fixe: val }))}
            />

            {/* === TELEPHONIE MOBILE === */}
            <AnimatedSection
                sectionTitle="Téléphonie Mobile"
                direction="left"
                items={[
                    { img: Forfait_Orange, alt: "Forfait Orange", title: "Forfait 100% Orange", text: "Forfait mobile sur le réseau d'Orange, pour une connexion stable." },
                    { img: Enveloppe_Data, alt: "Data Europe", title: "Enveloppe data Europe", text: "Le forfait est utilisable partout en Europe géographique/Royaume-Uni." },
                    { img: Forfait_bloqué, alt: "Forfait bloqué", title: "Forfait bloqué", text: "Maîtrise totale : le forfait data est garanti sans hors forfait." }
                ]}
                count={clients1}
                countLabel="Clients satisfaits"
                openTarifs={openTarifs.mobile}
            />

            <TarifsSlide
                buttonLabel="Voir nos tarifs mobiles"
                sectionTitle="Nos forfaits mobiles"
                tarifs={[
                    { title: "1 GB", description: "Appels/SMS illimités", price: "7,90€HT/mois" },
                    { title: "3 GB", description: "Appels/SMS illimités", price: "9,90€HT/mois" },
                    { title: "5 GB", description: "Appels/SMS illimités", price: "10,90€HT/mois" },
                    { title: "10 GB", description: "Appels/SMS illimités", price: "12,90€HT/mois" },
                    { title: "20 GB", description: "Appels/SMS illimités", price: "14,90€HT/mois" },
                    { title: "50 GB", description: "Appels/SMS illimités", price: "19,90€HT/mois" },
                    { title: "100 GB", description: "Appels/SMS illimités", price: "29,90€HT/mois" },
                ]}
                openTarifs={openTarifs.mobile}
                setOpenTarifs={(val) => setOpenTarifs(prev => ({ ...prev, mobile: val }))}
            />
        </>
    );
};

export default Materiel_Et_Equipement;
