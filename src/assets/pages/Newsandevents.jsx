import React from 'react'
import {
  FaUsers,
  FaBriefcase,
  FaChalkboardTeacher,
  FaFileAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

function Newsandevents() {
  return (
    <>
<section className="events-hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-tag">
            NEWS AND EVENTS
          </span>

          <h1>
            Inspiring Events <br />
            <span>Meaningful Connections</span>
          </h1>

          <p>
            Stay updated with SilverOaks' latest events, industry
            engagements, training sessions, career workshops,
            internship drives, and community initiatives.
          </p>

        </div>

      </div>

    </section>

        <section className="events">
      <div className="events-heading">
        <span>OUR EVENTS</span>

        <h2>
          Upcoming <span>Events</span>
        </h2>

        <p>
          We are preparing exciting workshops, training sessions and networking
          opportunities. Stay connected for our upcoming announcements.
        </p>
      </div>

      <div className="events-grid">

        <div className="event-card">
          <div className="event-top">
            <div className="event-icon">
              <FaUsers />
            </div>

            <small>COMING SOON</small>
          </div>

          <h3>Leadership & Soft Skills Training</h3>

          <p>
            Enhance your communication, leadership and teamwork skills to
            thrive in any professional environment.
          </p>

          <div className="event-info">
            <p><FaMapMarkerAlt /> SilverOaks Talent Partners</p>
            <p><FaCalendarAlt /> Date To Be Announced</p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-top">
            <div className="event-icon">
              <FaBriefcase />
            </div>

            <small>COMING SOON</small>
          </div>

          <h3>Internship Readiness Program</h3>

          <p>
            Prepare for real-world opportunities with practical skills and
            industry exposure.
          </p>

          <div className="event-info">
            <p><FaMapMarkerAlt /> SilverOaks Talent Partners</p>
            <p><FaCalendarAlt /> Date To Be Announced</p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-top">
            <div className="event-icon">
              <FaChalkboardTeacher />
            </div>

            <small>COMING SOON</small>
          </div>

          <h3>Career Guidance Session</h3>

          <p>
            Get personalized career guidance from industry experts and take
            the next step confidently.
          </p>

          <div className="event-info">
            <p><FaMapMarkerAlt /> SilverOaks Talent Partners</p>
            <p><FaCalendarAlt /> Date To Be Announced</p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-top">
            <div className="event-icon">
              <FaFileAlt />
            </div>

            <small>COMING SOON</small>
          </div>

          <h3>Resume Building Workshop</h3>

          <p>
            Learn how to create a professional resume that gets noticed by top
            employers.
          </p>

          <div className="event-info">
            <p><FaMapMarkerAlt /> SilverOaks Talent Partners</p>
            <p><FaCalendarAlt /> Date To Be Announced</p>
          </div>
        </div>

      </div>
    </section>


      <section className="newsletter">

      <div className="newsletter-left">

        <div className="newsletter-icon">
          ✉
        </div>

        <div className="newsletter-content">
          <h2>Don't Miss Out!</h2>

          <p>
            Be the first to know about our upcoming events.
            <br />
            Workshops and career opportunities.
          </p>
        </div>

      </div>

      <div className="newsletter-right">

        <input
          type="email"
          placeholder="Enter your email address"
        />

        <button>
          Notify me ➜
        </button>

      </div>

    </section>


    
      {/* ===== EVENT GALLERY ===== */}
      <section className="event-gallery">
        <h2>Event Gallery</h2>

        <div className="gallery">
          <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg" alt="" />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/041/388/388/small/ai-generated-concert-crowd-enjoying-live-music-event-photo.jpg" alt="" />
          <img src="https://silveroakstp.com/uploads/1781002903_gallery-image-4.jpeg" alt="" />
          <img src="https://silveroakstp.com/uploads/1781002895_gallery-image-3.jpeg" alt="" />
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="cta-box">

          <div className="left">
            <h3>Let’s Build a Better Future</h3>
            <h1>Together</h1>
          </div>

          <div className="right">
            <p>
              Whether you’re an organization looking for the right talent or an individual ready to grow your career,
              SilverOaks is here to help you take the next step.
            </p>
          </div>

        </div>
      </section>





    
    </>
  )
}

export default Newsandevents