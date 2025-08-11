import React from "react";
import Ordinateur from "../../components/Ordinateur/Ordinateur";
import VideoPresentationInformatique from "./video_presentation_informatique.mp4"
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
        <h2 className="title_materiel">
          Materiel et vente
        </h2>
        <Ordinateur />
      </div>
    </>
  )
};

export default Informatique;
