import React from 'react'
import {
  LuUsers,
  LuTarget,
  LuTrendingUp,
  LuBookOpen,
  LuHandshake
} from "react-icons/lu";
function About() {
  return (
    <>
    <section className="about-us">

  <div className="about-content">

    <p className="tag">
      ABOUT US
    </p>

    <h1>
      Building People <br />
      <span>Create Possibilities</span>
    </h1>

    <p className="desc">
      At SilverOaks, we connect talent with opportunity and empower both
      individuals and organizations to grow, succeed, and lead the future.
    </p>

  </div>

</section>

<section className="vision-mission">

  <div className="vision-box">

    <div className="vision-item">
      <img
        src="https://silveroakstp.com/images/Our-Vision-icom.webp"
        alt="Vision"
        className="icon-img"
      />

      <div>
        <h3>Vision</h3>

        <p>
          To empower individuals and organizations through talent,
          learning, and meaningful opportunities.
        </p>
      </div>
    </div>

    <div className="center-logo">
      <img
        src="https://silveroakstp.com/images/about-after-hero-tree.webp"
        alt="Tree"
      />
    </div>

    <div className="vision-item">
      <img
        src="https://silveroakstp.com/images/Our-Mission-icon.webp"
        alt="Mission"
        className="icon-img"
      />

      <div>
        <h3>Mission</h3>

        <p>
          To bridge talent and organizations through learning,
          recruitment, and development solutions.
        </p>
      </div>
    </div>

  </div>

</section>

<section className="about-us-section">
  <div className="about-us-content">

    <span className="about-us-tag">ABOUT US</span>

    <h1>
      Connecting Talent.
      <br />
      <span>Empowering Growth.</span>
    </h1>

    <p>
      SilverOaks is a talent and development partner focused on connecting
      people with meaningful opportunities. We believe hiring is only the
      beginning of a larger journey.
    

    
      We connect organizations and individuals through a people-first
      approach that builds stronger teams and supports long-term growth.
    </p>

    <h4>
      We don't just fill positions; we help you find people who fit your
      culture and stay.
    </h4>

  </div>
</section>

<section class="values-section">

  <h5>Whats Make Us Different</h5>
  <h2>Our Value. Our Promise.</h2>

  <div class="values-container">

    <div class="value-card">
      <div className="icon"><LuUsers /></div>
      <h3>People First</h3>
      <p>We put people at the heart of everything we do.</p>
    </div>

    <div class="value-card">
      <div className="icon"><LuTarget /></div>
      <h3>Integrity</h3>
      <p>We believe in transparency, honesty, and doing what's right.</p>
    </div>

    <div class="value-card">
      <div className="icon"><LuTrendingUp /></div>
      <h3>Excellence</h3>
      <p>We are committed to delivering quality and driving impact.</p>
    </div>

    <div class="value-card">
      <div className="icon"><LuBookOpen /></div>
      <h3>Growth</h3>
      <p>We promote continuous learning and development.</p>
    </div>

    <div class="value-card">
      <div className="icon"><LuHandshake /></div>
      <h3>Partnership</h3>
      <p>We build lasting relationships based on trust and respect.</p>
    </div>

  </div>

</section>

<section class="cta-section">

  <div class="cta-content">

    <div class="cta-left">
      <h2>Let's Build a Better Future</h2>
      <h3>Together</h3>
    </div>

    <div class="cta-right">
      <p>
        Whether you're an organization looking for the right talent
        or an individual ready to grow your career, we are here to
        help you take the next step.
      </p>
    </div>

  </div>

</section>

    </>
  )
}

export default About