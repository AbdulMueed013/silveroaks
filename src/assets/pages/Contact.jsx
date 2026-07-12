import React from 'react'


import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

function Contact() {
  return (
   <>
   <section className="contact-hero">
  <div className="contact-overlay">
    <div className="contact-left">
      <span className="contact-tag">CONTACT US</span>

      <h1>
        We are here to <br />
        <span>Connect with You</span>
      </h1>

      <p>
        Have a Question, Need more information, or want to explore
        partnership opportunities? We'd love to hear from you.
      </p>

      <div className="contact-note">
        ➜ Lets build a better Career and stronger Organization together.
      </div>
    </div>

  </div>
</section>


   <section className="contact-info-section">

      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h2>We are Just a Message Away</h2>
      </div>

      <div className="contact-card-wrapper">

        <div className="contact-card">
          <div className="contact-icon">
            <FiPhoneCall />
          </div>

          <h3>Phone</h3>

          <p>+92 312 117 5509</p>

          <small>Mon - Fri 09:00 AM - 06:00 PM</small>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FiMail />
          </div>

          <h3>Email</h3>

          <p>info@silveroaks.com</p>

          <small>We reply within 24 hours</small>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FiMapPin />
          </div>

          <h3>Location</h3>

          <p>Karachi, Pakistan</p>

          <small>Visit Our Office</small>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FiClock />
          </div>

          <h3>Business Hour</h3>

          <p>Monday - Saturday</p>

          <small>09:00 AM - 06:00 PM</small>
        </div>

      </div>

    </section>


       <section className="contact-form-section">

      {/* Left Side */}
      <div className="contact-form-left">

        <span className="form-tag">SEND MESSAGE</span>

        <h2>Let's Start a Conversation</h2>

        <form>

          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea
            rows="7"
            placeholder="Write Your Message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* Right Side */}

      <div className="contact-map">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

    </section>
   </>
  )
}

export default Contact