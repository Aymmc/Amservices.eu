import React from 'react'
import "./Infogerance.css"
import Serenite from './Serenite.png'
import Maintenance from './Maintenance.png'

const Infogerance = () => {
    return (
        <>
            <section className="infogerance">
                <h2 className="title_materiel">
                    Infogerance & Maitenance
                </h2>

                <article>


                    <div className="serenite_img">
                        <img src={Serenite} alt="" />
                    </div>
                    <div className="serenite_desc">
                        <p>L'infogérance est la gestion proactive de votre système informatique.
                            Nous surveillons vos équipements à distance pour anticiper et résoudre les
                            problèmes avant qu'ils ne perturbent votre travail.</p>
                        <ul>
                            <li><span>Surveillance proactive</span> : Nous détectons les anomalies et les
                                faiblesses de votre système 24h/24, 7j/7.
                            </li>
                            <li><span> Sécurité renforcée</span> : Nous mettons en place des mesures de protection contre
                                les menaces numériques (virus, ransomwares, etc.).</li>
                            <li> <span> Mises à jour et optimisation</span> : Nous assurons les mises à jour logicielles
                                pour garantir la performance et la sécurité de votre environnement de travail.</li>
                        </ul>
                    </div>
                </article>
            </section>

            <article className='maitenance'>
                <div className='serenite_img'>
                    <img className='maitenance_img' src={Maintenance} alt="" />
                </div>
                <div class="serenite_desc">
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
                            <span>Flexibilité</span> : Nos contrats s'adaptent à vos besoins, que vous soyez une TPE ou une PME.
                        </li>
                    </ul>
                </div>


            </article>
        </>
    )
}

export default Infogerance