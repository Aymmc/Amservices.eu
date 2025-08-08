import React from 'react';
import './home.css';
import VideoPresentation from '../Home/video_presentation.mp4';

import Personnage from '../../components/Personnage/Personnage';
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
          />
          <div className="video-content">
            <p>Partenaire privilégié des entreprises vosgiennes,<br />
              nous offrons des solutions complètes en
              informatique,<br />
              télécom et cybersécurité.</p>
          </div>

        </div>
        <div className='div_presentation_equipe'>
          <h2> Notre equipe de spécialistes. </h2>
          <div className="div_paragraphe_equipe">
            <p>4 Experts dont 5 techniciens cumulant plus de
              15 ans d'expérience mettent leurs compétences à votre service.</p>
          </div>
        </div>
        <Personnage />
      </div>
    </>
  );
};

export default Home;
