import React from 'react'
import './Ordinateur.css'
import PC_FIXE from './Pc_Fixe.png'
import Pc_PORTABLE from './Pc_Portable.png'
import NAS from "./NAS.png"

const Ordinateur = () => {
    return (
        <>
            <h2 className="section-title">
                Materiel et vente
            </h2>

            <section className="flex-grid fixed-height">
                <article className="card">
                    <h4 className="card-title">Ordinateur Fixe</h4>
                    <img className="card-img" src={PC_FIXE} alt="Photo de présentation de la gamme Pc fixe" />
                    <p className="text-default">
                        Pour votre bureau ou votre entreprise, découvrez nos PC fixes conçus
                        pour durer et pour répondre à tous vos besoins, de la bureautique
                        aux applications les plus exigeantes.
                    </p>
                    <button className="btn-primary">EN SAVOIR PLUS</button>
                </article>

                <article className="card">
                    <h4 className="card-title">Ordinateur Portable</h4>
                    <img className="card-img" src={Pc_PORTABLE} alt="Photo de la présentation de la gamme pc portable" />
                    <p className="text-default">
                        Travaillez ou étudiez partout avec nos PC portables performants
                        et fiables. Mobilité et puissance réunies pour vous accompagner
                        au quotidien.
                    </p>
                    <button className="btn-primary">EN SAVOIR PLUS</button>
                </article>

                <article className="card">
                    <h4 className="card-title">Serveur NAS</h4>
                    <img className="card-img" src={NAS} alt="Photo de la présentation de la gamme NAS" />
                    <p className="text-default">
                        Sécurisez, centralisez et partagez vos données en toute simplicité.
                        Nos solutions NAS vous offrent un espace de stockage en réseau
                        fiable et performant, accessible à tout moment.
                    </p>
                    <button className="btn-primary">EN SAVOIR PLUS</button>
                </article>
            </section>
        </>
    )
}

export default Ordinateur
