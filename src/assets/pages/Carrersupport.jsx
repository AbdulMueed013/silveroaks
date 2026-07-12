import React from 'react'
import { FaBriefcase, FaUsers, FaBookOpen } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";



function Carrersupport() {
  return (
    <>
  <section className="career-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">CAREER SUPPORT</span>

          <h1>
            Build Your Career.
            <br />
            <span>Unlock Your Potential</span>
          </h1>

          <p>
            At SilverOaks, we connect ambitious individuals with meaningful
            opportunities and provide the guidance, training, and resources you
            need to succeed.
          </p>

          <div className="hero-btns">
            <button className="btn-primary">Get In Touch →</button>
            <button className="btn-outline">Upload Your CV ↗</button>
          </div>
        </div>
      </div>
    </section>

<section className="career-heading">
  <p>Why Choose SilverOaks</p>
  <h2>Your Career Partner For Growth</h2>
</section>


<section className="top-cards">

  <div className="top-card">
    <div className="top-icon">
      <FaBriefcase />
    </div>

    <h3>Verified Job Opportunities</h3>

    <p>
      Access genuine job openings from reputed organizations.
    </p>
  </div>

  <div className="top-card">
    <div className="top-icon">
      <FaUsers />
    </div>

    <h3>Career Mentorship and Guidance</h3>

    <p>
      Receive expert advice to help you make informed career decisions.
    </p>
  </div>

  <div className="top-card">
    <div className="top-icon">
      <FaBookOpen />
    </div>

    <h3>Skill Development Program</h3>

    <p>
      Enhance your skills through training programs designed for success.
    </p>
  </div>

</section>
    

<section className="career-services">

  <p className="service-subtitle">How We Support Your Journey</p>

  <h2 className="service-title">Our Career Support Services</h2>

  <div className="service-container">

    <div className="service-card">
      <div className="service-icon"></div>
      <h3>CV / Resume Building</h3>
      <p>
        Create a professional resume that highlights your skills and experience.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon"></div>
      <h3>Interview Preparation</h3>
      <p>
        Practice interviews and improve your confidence before meeting employers.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon"></div>
      <h3>Career Guidance</h3>
      <p>
        Get expert advice to choose the right career path for your future.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon"></div>
      <h3>Job Placement Support</h3>
      <p>
        Connect with companies and find job opportunities that match your skills.
      </p>
    </div>

  </div>

</section>

 <section className="career-heros">
      <div className="career-left">
        <img
          src="https://silveroakstp.com/images/career-page-img.webp"
          alt="Career"
        />
      </div>

      <div className="career-right">
        <span className="career-tag">
          For Fresh Graduates and Students
        </span>

        <h1>
          Start Strong.
          <br />
          Grow Faster.
        </h1>

        <p>
          Whether you are a student or a fresh graduate, SilverOaks helps
          bridge the gap between education and employment through practical
          exposure and workplace readiness.
        </p>

        <div className="career-list">
          <div className="list-item">
            ✔ Workplace Readiness Training
          </div>

          <div className="list-item">
            ✔ Soft Skills Development
          </div>
        </div>
      </div>
    </section>


  <section className="career-cta">

      <div className="cta-icon">
        <img
          src="https://silveroakstp.com/images/People-First-icon.webp"
          alt="People First"
        />
      </div>

      <div className="cta-content">
        <h2>
          Take the First Step
          <br />
          Towards the Career.
        </h2>
      </div>

      <div className="cta-right">

        <p>
          Join our talent network and get access to
          opportunities, training programs, and
          career support tailored to your goals.
        </p>

        <div className="cta-buttons">
          <button>Register Now</button>
          <button>Upload CV & Documents</button>
        </div>

      </div>

      <div className="cta-tree">
        <img
          src="https://silveroakstp.com/images/about-after-hero-tree.webp"
          alt="Tree"
        />
      </div>

    </section>


    <div className="career-form-section">

  <div className="career-form-container">

    <h2>Join Our Talent Network</h2>

    <p className="career-subtitle">
      Fill out the form below and we'll get in touch with you.
    </p>

    <form className="career-form">

      <div className="form-item">
        <label>Full Name *</label>
        <input type="text" placeholder="Enter Full Name" />
      </div>

      <div className="form-item">
        <label>Email *</label>
        <input type="email" placeholder="Enter Email" />
      </div>

      <div className="form-item">
        <label>Phone *</label>
        <input type="text" placeholder="Enter Phone Number" />
      </div>

      <div className="form-item">
        <label>Qualification *</label>

        <select>
          <option>Select Qualification</option>
          <option>Matric</option>
          <option>Intermediate</option>
          <option>DAE</option>
          <option>Bachelor's Degree</option>
          <option>Master's Degree</option>
          <option>MPhil</option>
          <option>PhD</option>
        </select>
      </div>

      <div className="form-item">
        <label>Department *</label>

        <select>
          <option>Select Department</option>
          <option>HR</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>Finance</option>
          <option>IT</option>
          <option>Administration</option>
          <option>Graphic Design</option>
          <option>Training</option>
        </select>
      </div>

      <div className="form-item">
        <label>Experience *</label>

        <select>
          <option>Select Experience</option>
          <option>Fresh</option>
          <option>Internship</option>
          <option>1 Year</option>
          <option>2-3 Years</option>
          <option>4-5 Years</option>
          <option>5+ Years</option>
        </select>
      </div>

      <div className="form-item full">
        <label>Career Goal</label>
        <textarea placeholder="Write your message..."></textarea>
      </div>

      <div className="form-btn">
        <button>Submit Application</button>
      </div>

    </form>

  </div>

</div>
   </>
  )


}

export default Carrersupport