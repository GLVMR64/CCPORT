import React from 'react';
import './App.css';
import profileImage from '/Users/codycogbill/Desktop/portfolio/ccportfolio/src/logo.svg'; // Adjust the path as needed
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Cody Cogbill</h1>
          <div className="profile-container">
            <div className="profile-background">
              <img src={profileImage} className="App-profile" alt="profile" />
            </div>
          </div>
          <p>Full Stack Developer</p>
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
          <h2>I am a junior full-stack developer with a broad range of experience in various technologies. My passion for continuous learning and dedication to delivering results enable me to approach problems creatively and from diverse perspectives. I embrace challenges with humility and integrity, always striving to find innovative solutions. I am a proud graduate of the Flatiron School, where I specialized in full-stack engineering.</h2>
        </div>
        <div className="panel black-panel">
          <p>Below you can peak at my skills and technologies I've used in my engineering journey</p>
        </div>
        <div className="panel white-panel">
          <p>If you are interested in starting a conversation about anything from video games, movies, to software engineering, you can email me at cody@happyinteractive.co</p>
          <div className="panel black-panel">
            <p> Or if you're in a reading mood, browse through my articles written about technologies that interested me during my time at Flatiron School <a href="https://medium.com/@codeman24">here</a>.</p>
          </div>
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
    </div>
  );
}

export default App;
