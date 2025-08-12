import React from 'react'
import VideoPresentationInternet from './video_presentation_reaseau.mp4'
import Fibre from '../../components/Fibre/Fibre'
import Starlink from '../../components/Starlink/Starlink'
import Reseaux4g from '../../components/Reseaux4g/Reseaux4g'

const Internet = () => {
    return (
        <>
            <div className="container">
                <div className="div_container">
                    <video
                        src={VideoPresentationInternet}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="background-video"
                        aria-label="Vidéo de présentation des services AM Services"
                    />
                    <div className="video-content" aria-live="polite">
                        <p>
                            Chez AMServices, nous vous assurons une connectivité internet stable et rapide pour votre productivité.
                        </p>
                    </div>
                </div>
                <section id="fibre" className='Fibre'>
                    <Fibre />
                </section>
                <section id="starlink" className="starlink">
                    <Starlink />

                </section>
                <section id='4g' className="4g">
                    <Reseaux4g />
                </section>
            </div>
        </>
    )
}

export default Internet