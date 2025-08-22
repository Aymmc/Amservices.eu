import React from 'react';
import './Infrastructure.css';
import PostDeTravail from './Poste_De_Travail.png';
import SolutionServeur from './Solution_Serveur.png';
import useCountUp from '../../Hook/useCountUp';
import AnimatedSection from '../../Hook/Block';
import InfrastructureImg from './Infratructures.png';

const Infrastructure = ({ openTarifs }) => {
    const clients1 = useCountUp(1500, 2000);

    return (
        <AnimatedSection
            sectionTitle="Infrastructure & Réseaux"
            direction="right"
            items={[
                { img: InfrastructureImg, alt: "Performance et monitoring", title: "Performance et monitoring", text: "Optimisation et surveillance réseau proactives pour vitesse et stabilité garanties." },
                { img: SolutionServeur, alt: "Solutions serveurs", title: "Solutions serveurs", text: "Nous mettons en place des serveurs sur mesure, centralisés et hautement fiables." },
                { img: PostDeTravail, alt: "PC et postes de travail", title: "PC et postes de travail", text: "Nous vous conseillons et équipons vos équipes en PC fixes et portables." }
            ]}
            count={clients1}
            countLabel="Ordinateurs vendu"
            openTarifs={openTarifs} // ici aussi .with-tarifs sera appliqué
        />
    );
};

export default Infrastructure;
