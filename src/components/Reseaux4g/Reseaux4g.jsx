import React from 'react'
import Reseaux4gIMG from './Reseaux4gIMG.png'
import useInView from '../../Hook/UseInView';

const Reseaux4g = () => {
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="title_materiel">
                Installation 4G/5G professionnelle
            </h2>

            <article ref={refLeft}
                className={`section hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div>
                    <img className="section-img" src={Reseaux4gIMG} alt="" />
                </div>
                <div className="section-desc">
                    <p>
                        Pour votre entreprise, la flexibilité est un atout majeur. Nous vous proposons des solutions d'accès internet en 4G/5G, une alternative performante et fiable, idéale pour les sites temporaires ou en complément de votre connexion principale.
                    </p>
                    <ul>
                        <li><span>Vitesse et performance</span> : Un débit élevé pour toutes vos activités, sans contraintes d'installation physique.</li>
                        <li><span>Fiabilité et flexibilité</span> : Une solution de secours pour votre fibre optique ou une connexion principale sur les sites isolés.</li>
                        <li><span>Support professionnel</span> : Notre équipe prend en charge l'installation, la configuration et le support de votre routeur 4G/5G pour un déploiement rapide.</li>
                    </ul>
                </div>
            </article>


        </>
    )
}

export default Reseaux4g