import React from 'react'
import './Ordinateur.css'
import PC_FIXE from './Pc_Fixe.png'
import Pc_PORTABLE from './Pc_Portable.png'

const Ordinateur = () => {
    return (
        <>
            <section className='Materiel_Et_Vente'>
                <h2 className="title_materiel">
                    Materiel et vente
                </h2>
                <section className="gamme_pc">
                    <article className='Pc_Fixe'>
                        <h4>Ordinateur Fixe</h4>
                        <img src={PC_FIXE} alt="Photo de presentation de la gamme Pc fixe" />
                        <p>Pour votre bureau ou votre entreprise, découvrez nos PC fixes conçus
                            pour durer et pour répondre à tous vos besoins, de la bureautique
                            aux applications les plus exigeantes.</p>
                        <button className='submenu_button'>EN SAVOIR PLUS</button>
                    </article>
                    <article className='Pc_Portable'>
                        <h4>Ordinateur Portable</h4>
                        <img src={Pc_PORTABLE} alt="Photo de la presentation de la gamme pc portab" />
                        <p>Travaillez ou étudiez partout avec nos PC portables performants
                            et fiables. Mobilité et puissance réunies pour vous accompagner
                            au quotidien.</p>
                        <button className='submenu_button'>EN SAVOIR PLUS</button>
                    </article>
                </section>
            </section>
        </>
    )
}

export default Ordinateur