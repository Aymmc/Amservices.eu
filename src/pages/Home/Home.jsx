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
            title="Présentation vidéo des services informatiques, télécom et cybersécurité - AM Services"
            aria-label="Présentation vidéo des solutions proposées par AM Services pour les entreprises et administrations vosgiennes : informatique, télécom et cybersécurité"
          />
          <div className="video-content" aria-live="polite">

            <h1 className='sr-only'>
              AM Services – Solutions en Informatique, Télécom et Cybersécurité
            </h1>
            <p>
              Partenaire privilégié des entreprises et administrations vosgiennes,<br />
              nous offrons des solutions complètes en <strong>informatique</strong>,<br />
              <strong>télécom</strong> et <strong>cybersécurité</strong>.
            </p>
          </div>
        </div>

        <section className='div_presentation_equipe' aria-labelledby="equipe-title">
          <h2 id="equipe-title">Notre équipe de spécialistes</h2>
          <div className="div_paragraphe_equipe">
            <p>
              5 experts dont 4 techniciens cumulant plus de 15 ans d'expérience
              mettent leurs compétences à votre service.
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
