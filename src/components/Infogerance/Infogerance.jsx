import React from 'react';
import "./Infogerance.css";
import AnimatedSection from '../../Hook/Block';
import useCountUp from '../../Hook/useCountUp';
import Flexibilite from './Flexibilite.png';
import Protection from './Protection.png';
import Update from './Update.png';
import TarifsSlide from '../../Hook/TarifsSlide';

const Infogerance = ({ openTarifs, setOpenTarifs }) => {
    const clients1 = useCountUp(500, 2000);

    return (
        <>
            <AnimatedSection
                sectionTitle="Infogérance & Maintenance"
                direction="left"
                items={[
                    { img: Update, alt: "Mises à jour et optimisation", title: "Mises à jour et optimisation", text: "Nous assurons les mises à jour logicielles pour garantir la performance et la sécurité." },
                    { img: Protection, alt: "Protection", title: "Sécurité renforcée", text: "Grâce à notre supervision, nous bloquons les menaces avant qu'elles ne causent de dégâts." },
                    { img: Flexibilite, alt: "Flexibilité", title: "Surveillance centralisée", text: "Une surveillance proactive garantissant fiabilité, disponibilité et protection renforcée." }
                ]}
                count={clients1}
                countLabel="Clients satisfaits"
                openTarifs={openTarifs} // ajoute .with-tarifs si open
            />

            <TarifsSlide
                buttonLabel="Voir nos tarifs"
                sectionTitle="Nos antivirus"
                tarifs={[
                    { title: "Pack Sentinel", description: "Protection des endpoints, défense contre les menaces avancées, chiffrement complet du disque, gestion centralisée", price: "4,90€ HT" },
                    { title: "Vigilant", description: "Sentinel + RG System : assurez la continuité de vos activités grâce à une supervision, une sauvegarde et une sécurité centralisées, simples et fiables.", price: "7,49€ HT" },
                    { title: "Shield", description: "Vigilant + Sauvegarde 5 Go cloud : sauvegardez vos fichiers en toute sécurité grâce à un cryptage de pointe et une double sauvegarde.", price: "14,99€ HT" },
                    { title: "Fortress", description: "Shield + EPR : l'EPR offre une sécurité avancée, détectant et bloquant les menaces les plus sophistiquées et inconnues, bien au-delà d'un simple antivirus.", price: "19,95€ HT" },
                    { title: "Fortress +", description: "Fortress + Anti-SPAM", price: "29,00€ HT" },
                ]}
                openTarifs={openTarifs}
                setOpenTarifs={setOpenTarifs} // bouton contrôle l'état global
            />
        </>
    );
};

export default Infogerance;
