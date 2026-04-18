import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQE3B20Hj0Z4gg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714044684344?e=1778112000&v=beta&t=HBATXYPt5SgO0Zr1cBn0tdyhGlTqkqlCG8ZmFRj4SHw" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sheoranruns" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/priyanshu-sheoran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Priyanshu Sheoran</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sheoranruns" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/priyanshu-sheoran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;