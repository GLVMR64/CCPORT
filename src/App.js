import React, { useState } from 'react';
import Modal from 'react-modal';
import { useInView } from 'react-intersection-observer';
import './App.css';
import profileImage from '/Users/codycogbill/Desktop/portfolio/ccportfolio/src/images/me.png'; // Adjust the path as needed
import certImage from '/Users/codycogbill/Desktop/portfolio/ccportfolio/src/images/cert.png'; // Adjust the path as needed
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({ triggerOnce: true });
  const { ref: flatironRef, inView: flatironInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  const skills = [
    'JavaScript', 'React', 'Python', 'SQL', 'PostgreSQL', 'MongoDB',
    'Bootstrap', 'Next.js', 'Redux', 'Node.js', 'Express', 'gRPC',
    'OAuth2', 'HTML', 'CSS', 'Git', 'REST APIs', 'WebSockets',
    'Microsoft Graph API', 'Docker', 'Kubernetes', 'Agile Methodologies',
    'TDD', 'CI/CD', 'JIRA', 'Confluence', 'VS Code', 'Linux',
    'MacOS', 'RESTful APIs', 'Flask', 'GitHub', 'GitLab'
  ];

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
          <div className="profile-container">
            <div className="profile-background">
              <img src={profileImage} className="App-profile" alt="profile" />
            </div>
          </div>
          <h1 className="header-name">Cody Cogbill</h1>
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
        <div ref={aboutMeRef} className={`panel white-panel ${aboutMeInView ? 'fade-in' : ''}`}>
          <h2>About Me</h2>
          <p>I am a dedicated and passionate full-stack developer with a broad range of experience in various technologies. My journey in software development is driven by my enthusiasm for continuous learning and my commitment to delivering innovative solutions. I approach challenges with creativity and a problem-solving mindset, always striving to exceed expectations and provide value through my work. I am a proud <a href="#" onClick={openModal}>graduate of the Flatiron School</a>, where I specialized in full-stack engineering.</p>
        </div>
        <div ref={flatironRef} className={`panel black-panel ${flatironInView ? 'fade-in' : ''}`}>
          <h2>Flatiron School Experience</h2>
          <p>Graduating from the Flatiron School was a pivotal moment in my career. Although it was rigorous, it honed my skills in both front-end and back-end development, providing me with a solid foundation in technologies that you'll find below. I completed several comprehensive projects that not only showcased my technical abilities but also my capacity to work effectively in collaborative environments and manage complex development tasks from conception to deployment.</p>
        </div>
        <div ref={contactRef} className={`panel white-panel ${contactInView ? 'fade-in' : ''}`}>
          <h2>Contact</h2>
          <p>I am always eager to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and innovation. Feel free to reach out to me at <a href="mailto:cody@happyinteractive.co">cody@happyinteractive.co</a> for any inquiries or opportunities.</p>
        </div>
      </section>
      <div className="ticker-wrapper">
        <div className="ticker">
          {skills.map((skill, index) => (
            <div className="ticker-item" key={index} style={{ '--i': index }}>
              {skill}
            </div>
          ))}
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
