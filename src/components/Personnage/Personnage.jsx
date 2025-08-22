import React, { useEffect, useRef } from "react";
import AM from './Aurelien.png';
import CM from './Catherine.png';
import FH from './Frantz.png';
import GC from './Gaitan.png';
import SH from './Sylvain.png'
import ALV from './Aymeric.png'
import './Personnages.css';

const Personnage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    } else {
                        entry.target.classList.remove("animate"); // permet de relancer l'anim
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = containerRef.current.querySelectorAll(".personnage");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className='div_equipe' ref={containerRef} aria-label="Présentation de l'équipe">
            <div className="div_equipe1" role="list">
                <article className="personnage" role="listitem">
                    <img src={AM} alt="Portrait d'Aurélien, technicien informatique et réseau confirmé" />
                    <div className="div_equipe_titre">
                        <h3>AURÉLIEN</h3>
                        <p>Technicien Informatique et réseau confirmé.</p>
                    </div>
                    <p>Spécialité : Réseau - Téléphonie - Serveurs Mails - Cybersécurité</p>
                </article>

                <article className="personnage" role="listitem">
                    <img src={CM} alt="Portrait de Catherine, assistante de direction et commerciale" />
                    <div className="div_equipe_titre">
                        <h3>CATHERINE</h3>
                        <p>Assistante de direction et commerciale.</p>
                    </div>
                    <p>Spécialité : Gestion relation client - Experte audits contractuels</p>
                </article>
                <article className="personnage" role="listitem">
                    <img src={SH} alt="Portrait de Sylvain, technicien informatique et réseau polyvalent" />
                    <div className="div_equipe_titre">
                        <h3>SYLVAIN</h3>
                        <p>Technicien Informatique et réseau junior.</p>
                    </div>
                    <p>Spécialité : Technicien informatique et réseau généraliste polyvalent.</p>
                </article>
            </div>

            <div className="div_equipe2" role="list">
                <article className="personnage" role="listitem">
                    <img src={FH} alt="Portrait de Frantz, spécialiste dépannage PC et administration serveurs" />
                    <div className="div_equipe_titre">
                        <h3>FRANTZ</h3>
                        <p>Spécialité : Dépannage PC - Administration serveurs - NAS.</p>
                    </div>
                    <p>Spécialité : Réseau - Téléphonie - Serveurs Mails - Cybersécurité</p>
                </article>

                <article className="personnage" role="listitem">
                    <img src={GC} alt="Portrait de Gaëtan, technicien informatique et réseau polyvalent" />
                    <div className="div_equipe_titre">
                        <h3>GAËTAN</h3>
                        <p>Technicien Informatique et réseau.</p>
                    </div>
                    <p>Spécialité : Technicien informatique et réseau généraliste polyvalent.</p>
                </article>

                <article className="personnage" role="listitem">
                    <img src={ALV} alt="Portrait de Aymeric, Alternant Commercial en informatique" />
                    <div className="div_equipe_titre">
                        <h3>AYMERIC</h3>
                        <p>Alternant Commercial en informatique.</p>
                    </div>
                    <p>Spécialité : Technicien informatique et montage ordinateur.</p>
                </article>
            </div>
        </section>
    );
};

export default Personnage;
