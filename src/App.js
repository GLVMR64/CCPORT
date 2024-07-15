import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import profileImage from './logo.svg'; // Adjust the path as needed
import certImage from './images/cert.png'; // Adjust the path as needed
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="header-name">Cody Cogbill</h1>
          <div className="profile-container">
            <div className="profile-background">
              <img src={profileImage} className="App-profile" alt="profile" />
            </div>
          </div>
          <p className="header-title">Full Stack Developer</p>
        </div>
        <div className="email-button-container">
          <IconButton
            color="primary"
            aria-label="email"
            href="mailto:ccogbill@happyinteractive.co"
            className="email-button"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </header>
      <section className="App-section">
        <div className="panel white-panel">
          <h2>About Me</h2>
          <p>I am a junior full-stack developer with a broad range of experience in various technologies. My passion for continuous learning and dedication to delivering results enable me to approach problems creatively and from diverse perspectives. I embrace challenges with humility and integrity, always striving to find innovative solutions. I am a proud <a href="#" onClick={openModal}>graduate of the Flatiron School</a>, where I specialized in full-stack engineering.</p>
        </div>
        <div className="panel black-panel">
          <h2>Skills</h2>
          <p>Below you can peek at my skills and technologies I've used in my engineering journey:</p>
        </div>
        <div className="panel white-panel">
          <h2>Contact</h2>
          <p>If you are interested in starting a conversation about anything from video games, movies, to software engineering, you can email me at <a href="mailto:cody@happyinteractive.co">cody@happyinteractive.co</a></p>
        </div>
        <div className="panel black-panel">
          <h2>Articles</h2>
          <p>Or if you're in a reading mood, browse through my articles written about technologies that interested me during my time at Flatiron School <a href="https://medium.com/@codeman24">here</a>.</p>
        </div>
      </section>
      <div className="ticker-wrapper">
        <div className="ticker">
          <div className="ticker-item">JavaScript</div>
          <div className="ticker-item">React</div>
          <div className="ticker-item">Python</div>
          <div className="ticker-item">SQL</div>
          <div className="ticker-item">PostgreSQL</div>
          <div className="ticker-item">MongoDB</div>
          <div className="ticker-item">Bootstrap</div>
          <div className="ticker-item">Next.js</div>
          <div className="ticker-item">Redux</div>
          <div className="ticker-item">Node.js</div>
          <div className="ticker-item">Express</div>
          <div className="ticker-item">gRPC</div>
          <div className="ticker-item">OAuth2</div>
          <div className="ticker-item">HTML</div>
          <div className="ticker-item">CSS</div>
          <div className="ticker-item">Git</div>
          <div className="ticker-item">REST APIs</div>
          <div className="ticker-item">WebSockets</div>
          <div className="ticker-item">Microsoft Graph API</div>
          <div className="ticker-item">Docker</div>
          <div className="ticker-item">Kubernetes</div>
          <div className="ticker-item">Agile Methodologies</div>
          <div className="ticker-item">TDD</div>
          <div className="ticker-item">CI/CD</div>
          <div className="ticker-item">JIRA</div>
          <div className="ticker-item">Confluence</div>
          <div className="ticker-item">VS Code</div>
          <div className="ticker-item">Linux</div>
          <div className="ticker-item">MacOS</div>
          <div className="ticker-item">RESTful APIs</div>
          <div className="ticker-item">Flask</div>
          <div className="ticker-item">GitHub</div>
          <div className="ticker-item">GitLab</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        <img src={certImage} alt="Certificate" className="Modal-cert" />
      </Modal>
    </div>
  );
}

export default App;
