import React from 'react'
import VideoPresentationInternet from './video_presentation_reaseau.mp4'
import useCountUp from '../../Hook/useCountUp'
import Routeur from './Routeur.png'
import Reseau4g from './Reseau4g.png'
import Starlink from './Starlink.png'
import AnimatedSection from '../../Hook/Block'


const Internet = () => {
    const clients1 = useCountUp(120, 2000); // monte jusqu'à 400 en 2 secondes
    return (
        <>
            <div className="container">
                <div className="div_container">
                    <video
                        src={VideoPresentationInternet}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="background-video"
                        aria-label="Vidéo de présentation des services AM Services"
                    />
                    <div className="video-content" aria-live="polite">
                        <p>
                            Chez AMServices, nous vous assurons une connectivité internet stable et rapide pour votre productivité.
                        </p>
                    </div>
                </div>
                <AnimatedSection
                    sectionTitle="Connectivité Internet"
                    direction="left"
                    items={[
                        {
                            img: Routeur,
                            alt: "Fibre Optique : La puissance de la connexion",
                            title: "Fibre Optique : La puissance de la connexion",
                            text: "En tant que fournisseur internet, AMServices gère l'installation et la maintenance de votre fibre optique de A à Z pour une connectivité stable et ultra-rapide."
                        },
                        {
                            img: Reseau4g,
                            alt: "Installation 4G/5G professionnelle",
                            title: "Installation 4G/5G professionnelle",
                            text: "Avec nos solutions 4G/5G, votre entreprise bénéficie d'une connectivité flexible et performante, partout et à tout moment."
                        },
                        {
                            img: Starlink,
                            alt: "Starlink, l'accès pour tous vos besoins",
                            title: "Starlink, l'accès pour tous vos besoins",
                            text: "La connexion Starlink d'AMServices est une solution internet ultra-performante et sans faille, même dans les zones les plus isolées."
                        }
                    ]}
                    count={clients1}
                    countLabel="Clients satisfaits"

                />

            </div>
        </>
    )
}

export default Internet