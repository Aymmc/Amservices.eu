import React from 'react';
import './home.css';
import VideoPresentation from '../Home/video_presentation.mp4';

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
        </div>
      </div>
    </>
  );
};

export default Home;
