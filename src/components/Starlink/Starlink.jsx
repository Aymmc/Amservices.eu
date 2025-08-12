import React from 'react'
import StarlinkImg from './StarlinkImg.png'
import useInView from '../../Hook/UseInView';

const Starlink = () => {
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();
    return (
        <>
            <h2 className="title_materiel">
                Starlink, l'accès pour tous vos besoins
            </h2>

            <article ref={refRight}
                className={`section section-reverse section-container-small hidden-block ${inViewRight ? "animate-right" : ""}`}>
                <div>
                    <img className="section-img" src={StarlinkImg} alt="" />
                </div>
                <div className="section-desc">
                    <p>
                        Pour votre entreprise, la connexion Starlink est la solution idéale, même dans les zones les plus isolées. Nous vous offrons un accès internet performant et sans faille pour propulser votre productivité.
                    </p>
                    <ul>
                        <li><span>Vitesse et performance</span> : Un débit ultra-rapide pour la visioconférence et les applications cloud, partout.</li>
                        <li><span>Stabilité et fiabilité</span> : Une connectivité garantie pour vos sites isolés ou en mobilité.</li>
                        <li><span>Support de A à Z</span> : De l'installation à la maintenance, nous gérons votre solution Starlink avec un service client de proximité.</li>
                    </ul>
                </div>
            </article>


        </>
    )
}

export default Starlink