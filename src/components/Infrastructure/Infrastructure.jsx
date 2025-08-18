import React from 'react';
import './Infrastructure.css';
import PostDeTravail from './Poste_De_Travail.png'
import SolutionServeur from './Solution_Serveur.png'
import useCountUp from '../../Hook/useCountUp'
import AnimatedSection from '../../Hook/Block';
import InfrastructureImg from './Infratructures.png';
const Infrastructure = () => {
    const clients1 = useCountUp(400, 2000); // monte jusqu'à 400 en 2 secondes
    const clients2 = useCountUp(350, 2000); // monte jusqu'à 350 en 2 secondes
    return (
        <>
            <AnimatedSection
                sectionTitle="Infrastructure & Réseaux"
                direction="right"
                items={[
                    {
                        img: InfrastructureImg,
                        alt: "Performance et monitoring",
                        title: "Performance et monitoring",
                        text: "Nous optimisons votre réseau pour qu'il reste rapide et nous le surveillons pour anticiper et corriger toute anomalie."
                    },
                    {
                        img: SolutionServeur,
                        alt: "Solutions serveurs",
                        title: "Solutions serveurs",
                        text: "Nous mettons en place des serveurs sur mesure, centralisés et hautement fiables."
                    },
                    {
                        img: PostDeTravail,
                        alt: "PC et postes de travai",
                        title: "PC et postes de travai",
                        text: "Nous vous conseillons et équipons vos équipes en PC fixes et portables."
                    }
                ]}

            />
        </>
    );
}

export default Infrastructure;
