import React from 'react';
import "./Infogerance.css";
import Serenite from './Serenite.png';
import Maintenance from './Maintenance.png';
import useInView from '../../Hook/UseInView';

const Infogerance = () => {
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="title_materiel">
                Infogérance & Maintenance
            </h2>

            <article ref={refLeft}
                className={`section hidden-block ${inViewLeft ? "animate-left" : ""}`}>
                <div>
                    <img className="section-img" src={Serenite} alt="" />
                </div>
                <div className="section-desc">
                    <p>L'infogérance est la gestion proactive de votre système informatique.
                        Nous surveillons vos équipements à distance pour anticiper et résoudre les
                        problèmes avant qu'ils ne perturbent votre travail.</p>
                    <ul>
                        <li><span>Surveillance proactive</span> : Nous détectons les anomalies et les
                            faiblesses de votre système 24h/24, 7j/7.
                        </li>
                        <li><span>Sécurité renforcée</span> : Nous mettons en place des mesures de protection contre
                            les menaces numériques (virus, ransomwares, etc.).</li>
                        <li><span>Mises à jour et optimisation</span> : Nous assurons les mises à jour logicielles
                            pour garantir la performance et la sécurité de votre environnement de travail.</li>
                    </ul>
                </div>
            </article>

            <article
                ref={refRight}
                className={`section section-reverse section-container-small hidden-block ${inViewRight ? "animate-right" : ""}`}>
                <div>
                    <img className="section-img" src={Maintenance} alt="" />
                </div>
                <div className="section-desc">
                    <p>
                        En cas de problème, notre équipe intervient rapidement pour minimiser les interruptions de service.
                    </p>
                    <ul>
                        <li>
                            <span>Dépannage</span> : Nous résolvons les pannes matérielles et logicielles.
                        </li>
                        <li>
                            <span>Assistance technique</span> : Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner.
                        </li>
                        <li>
                            <span>Conseil et évolution</span> : Nous vous conseillons pour l'évolution de votre parc informatique, en fonction de vos besoins et des nouvelles technologies.
                        </li>
                    </ul>

                    <h4>Nos engagements :</h4>
                    <ul>
                        <li>
                            <span>Disponibilité</span> : Notre équipe est réactive et toujours à votre service.
                        </li>
                        <li>
                            <span>Transparence</span> : Un rapport d'activité vous est fourni régulièrement pour un suivi clair de notre travail.
                        </li>
                        <li>
                            <span>Flexibilité</span> : Nos contrats s'adaptent à vos besoins, que vous soyez une TPE, PME ou des Administrations.
                        </li>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default Infogerance;
