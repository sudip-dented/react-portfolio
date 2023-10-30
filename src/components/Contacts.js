import React from 'react'

function Contacts() {
  return (
    <section className="section6" id="contact">
      <h2 className="title">Get In Touch</h2>
      <div className="socials">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-github"></i>
      </div>
      <h2>OR</h2>
      <div className="email-section">
        <div className="email">
          <p>admin@gmail.com</p>
          <a href="mailto:admin@gmail.com">
            <div className="send">
              <i className="fa-brands fa-envelope"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts