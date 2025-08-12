import React from 'react';
import './Infrastructure.css';
import Reseaux from './reseaux.png';
import InfrastructureImg from './infrastructureImg.png';
import useInView from '../../Hook/UseInView';

const Infrastructure = () => {
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="title_materiel">
                Réseaux & Infrastructure
            </h2>

            <article ref={refLeft}
                className={`section hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div>
                    <img className="section-img" src={Reseaux} alt="" />
                </div>
                <div className="section-desc">
                    <p>Un réseau fiable est la colonne vertébrale de votre entreprise.
                        Nous concevons et déployons des solutions réseau sécurisées pour
                        garantir une connexion fluide, stable et rapide à tous vos collaborateurs.</p>
                    <ul>
                        <li><span>Réseaux filaires et WiFi</span> : Nous mettons en place des installations robustes pour un accès internet et un
                            échange de données sans accroc.
                        </li>
                        <li><span>Sécurité du réseau</span> : Nous intégrons des pare-feux
                            et des systèmes de sécurité pour défendre votre réseau contre les cybermenaces.
                        </li>
                        <li><span>Performance et monitoring</span> : Nous optimisons votre réseau pour qu'il reste rapide et nous le surveillons pour anticiper et corriger toute anomalie.
                        </li>
                    </ul>
                </div>
            </article>

            <article ref={refRight}
                className={`section section-reverse section-container-small hidden-block ${inViewRight ? "animate-right" : ""}`}>
                <div>
                    <img className="section-img" src={InfrastructureImg} alt="" />
                </div>
                <div className="section-desc">
                    <p>
                        L'infrastructure est le fondement de votre système informatique. Nous vous fournissons le matériel et les serveurs adaptés,
                        conçus pour la performance et la durabilité de votre activité.
                    </p>
                    <ul>
                        <li>
                            <span>PC et postes de travail</span> : Nous vous conseillons et équipons vos équipes en PC fixes et portables.
                        </li>
                        <li>
                            <span>Solutions serveurs</span> : Nous mettons en place des serveurs sur mesure, centralisés et hautement fiables.
                        </li>
                        <li>
                            <span>Déploiement sur mesure</span> : Nous installons et configurons l'ensemble de votre infrastructure pour une intégration parfaite.
                        </li>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default Infrastructure;
