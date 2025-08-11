import React from 'react';
import './home.css';
import VideoPresentation from '../Home/video_presentation.mp4';
import Confiance from '../../components/Confiance/Confiance';
import Personnage from '../../components/Personnage/Personnage';
import Avis from '../../components/Avis/Avis';

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="div_container">
          <video
            src={VideoPresentation}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            aria-label="Vidéo de présentation des services AM Services"
          />
          <div className="video-content" aria-live="polite">
            <p>
              Partenaire privilégié des entreprises vosgiennes,<br />
              nous offrons des solutions complètes en informatique,<br />
              télécom et cybersécurité.
            </p>
          </div>
        </div>

        <section className='div_presentation_equipe' aria-labelledby="equipe-title">
          <h2 id="equipe-title">Notre équipe de spécialistes</h2>
          <div className="div_paragraphe_equipe">
            <p>
              5 experts dont 4 techniciens cumulant plus de 15 ans d'expérience mettent leurs compétences à votre service.
            </p>
          </div>
        </section>

        <Personnage />
        <Confiance />
        <Avis />
      </div>
    </>
  );
};

export default Home;
