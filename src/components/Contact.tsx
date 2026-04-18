import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  const user = 'contact';
  const domain = 'priyanshusheoran.in';

  const handleClick = () => {
    if (!showEmail) {
      setShowEmail(true);
    } else {
      window.location.href = `mailto:${user}@${domain}`;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Click below to reveal and contact me.</p>

          <button className="pill-btn" onClick={handleClick}>
            {showEmail ? `${user}@${domain}` : 'Show Email'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;