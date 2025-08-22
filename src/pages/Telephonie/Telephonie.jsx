import React from 'react'

import VideoPresentationTelephonie from './TelephonieVideo.mp4'
import Materiel_Et_Equipement from '../../components/Materiel_et_equipement/Materiel_Et_Equipement'
const Telephonie = () => {
  return (
    <>
      <div className="container">
        <div className="div_container">
          <video
            src={VideoPresentationTelephonie}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            aria-label="Vidéo de présentation des services AM Services"
          />
          <div className="video-content" aria-live="polite">
            <p>
              Chez AMServices, votre téléphonie professionnelle est simple, fluide et connectée.
            </p>
          </div>
        </div>
        <section id="equipement" className='Equipement' >
          <Materiel_Et_Equipement />
        </section>
        <section id="starlink" className="starlink">


        </section>
        <section id='4g' className="4g">

        </section>
      </div>
    </>
  )
}

export default Telephonie