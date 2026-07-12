import React from 'react'
import { FaBook, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { FaBullseye, FaRegEdit, FaChartBar } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
          <section className="hero">
        <div className="hero-left">
          <p className="welcome">WELCOME TO SILVEROAKS</p>

          <h1>
            CONNECTING <br />
            TALENT WITH <br />
            OPPORTUNITIES
          </h1>

          <p className="desc">
            SilverOaks Talent Partners is a leading HR management and training
            services provider, empowering individuals and organizations to
            grow, succeed and lead the future.
          </p>
<button onClick={() => navigate("/services")} className="btn">
  Explore Our Services →
</button>

        </div>

      </section>

      <section className="services">
        <div className="service">
          <h3>Talent Placement</h3>
        </div>

        <div className="service">
          <h3>Training & Development</h3>
        </div>

        <div className="service">
          <h3>Job Readiness Skills</h3>
        </div>
      </section>

      <div className="services-section">

        <span className="small-heading">WHAT WE DO</span>

        <h1>OUR SERVICES</h1>

        <p className="service-text">
          Comprehensive HR solutions and training programs designed to unlock
          potential, enhance performance and drive career success.
        </p>

        <div className="service-cards">

          <div className="card">
            <div className="icon"></div>
            <h3>HR MANAGEMENT</h3>
            <p>
              End-to-end HR solutions including recruitment,
              workforce management, compliance, and
              performance management.
            </p>
            <a href="/">Learn More →</a>
          </div>

          <div className="card">
            <div className="icon"></div>
            <h3>TRAINING & DEVELOPMENT</h3>
            <p>
              Customized training programs to enhance skills,
              growth, productivity and leadership capabilities.
            </p>
            <a href="/">Learn More →</a>
          </div>

          <div className="card">
            <div className="icon"></div>
            <h3>JOB READINESS SKILLS</h3>
            <p>
              Equipping job seekers with essential skills,
              CV building, interview preparation and career guidance.
            </p>
            <a href="/">Learn More →</a>
          </div>

        </div>

      </div>


    <section className="process-section">

      <span className="process-tag">OUR PROCESS</span>

      <h1 className="process-heading">
    A STRATEGIC APPROACH TO LASTING IMPACT
      </h1>

      <div className="process-cards">

        <div className="process-card">
          <div className="circle">
            <span className="number">01</span>
            <div className="icon"><FaFileAlt /></div>
          </div>

          <h3>RESEARCH</h3>

          <p>
            We understand your needs, industry and goals.
          </p>
        </div>

        <div className="process-card">
          <div className="circle">
            <span className="number">02</span>
            <div className="icon"><FaBullseye /></div>
          </div>

          <h3>ANALYSIS</h3>

          <p>
            We analyze insights to identify the right opportunities and solutions.
          </p>
        </div>

        <div className="process-card">
          <div className="circle">
            <span className="number">03</span>
            <div className="icon"><FaRegEdit /></div>

          </div>

          <h3>PLANNING</h3>

          <p>
            We design a tailored plan with clear strategies and actionable steps.
          </p>
        </div>

        <div className="process-card">
          <div className="circle">
            <span className="number">04</span>
            <div className="icon"><FaBullseye /></div>
          </div>

          <h3>EXECUTION</h3>

          <p>
            We implement the plan efficiently to deliver results and drive growth.
          </p>
        </div>

      </div>

    </section>


<section className="about-section">

  <div className="about-content">

    <span className="about-tag">ABOUT US</span>

    <h1>
      Building Careers.
      <br />
      <span>Transforming Futures.</span>
    </h1>

    <p>
      SilverOaks Talent Partners is committed to bridging the gap
      between talent and opportunity. We work with organizations
      to find the right people and with individuals to build the
      right careers through training, mentorship and practical exposure.
    </p>

    <ul>
      <li>Experienced HR Professionals</li>
      <li>Industry-Focused Training Programs</li>
      <li>Strong Network of Employers</li>
      <li>Committed to Youth Empowerment</li>
    </ul>

    <button onClick={() => navigate("/about")}>
  Discover More About Us →
</button>

  </div>

</section>

  <section className="jobseekers">

      <span className="top-text">
        EMPOWERING TALENT - ENRICHING LIVES
      </span>

      <h1>For Job Seekers</h1>

      <p className="main-text">
        We help you build the skills, confidence and experience you need
        to launch your career and achieve your goals.
      </p>

      <div className="job-container">

        <div className="job-box">
          <div className="job-icon"><FaBook /></div>

          <div>
            <h3>Skill Development</h3>
            <p>
              Learn in-demand skills through expert-led training.
            </p>
          </div>
        </div>

        <div className="job-box">
          <div className="job-icon"><FaChalkboardTeacher /></div>

          <div>
            <h3>Career Guidance</h3>
            <p>
              Get personalized guidance to shape your future.
            </p>
          </div>
        </div>

        <div className="job-box">
          <div className="job-icon"><FaBriefcase /></div>

          <div>
            <h3>Job Opportunities</h3>
            <p>
              Access the best job openings tailored to your profile.
            </p>
          </div>
        </div>

      </div>

    </section>






    </>


)    

  
}

export default Home