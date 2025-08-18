import React from "react";
import Materiel_Et_Vente from "../../components/Ordinateur/Materiel_Et_Vente";
import VideoPresentationInformatique from "./video_presentation_informatique.mp4"
import Infogerance from "../../components/Infogerance/Infogerance";
import Infrastructure from "../../components/Infrastructure/Infrastructure";
const Informatique = () => {
  return (
    <>
      <div className="container">
        <div className="div_container">
          <video
            src={VideoPresentationInformatique}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            aria-label="Vidéo de présentation des services AM Services"
          />
          <div className="video-content" aria-live="polite">
            <p>
              Chez AMServices, nous vous proposons une sélection de matériel informatique, en partenariat avec Terra et Shuttle
            </p>
          </div>
        </div>
        <section id="materiel" className='Materiel_Et_Vente'>
          <Materiel_Et_Vente />
        </section>
        <section id='infogerance' className="infogerance">
          <Infogerance />
        </section>
        <section id="infrastructure" className="infrastructure">
          <Infrastructure />
        </section>
      </div>
    </>
  )
};

export default Informatique;
