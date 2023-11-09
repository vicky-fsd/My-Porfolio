import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./about.css";
import { BsCalendarDate } from "react-icons/bs";

const About = () => {
  return (
    <section>
      <SectionHeading heading={"About Me"}></SectionHeading>
      <h3 className="secondary-heading margin-bottom-bg">
        I am Vignesh Durairaj<span> Web developer</span>
      </h3>
      <p className="description margin-bottom-bg">
        I am Vignesh Durairaj. A dedicated and highly skilled MERN Full Stack Developer in designing, developing,
        and deploying web applications. Passionate about creating efficient and user-friendly software solutions, 
        with a strong understanding of the MERN stack and modern web development technologies. 
        Seeking to contribute my expertise to a dynamic team and drive the success of innovative projects.
      </p>
      <div className=" information grid grid-2-col">
        <div className="data">
          <div className="grid grid-2-col">
            <div className="info-box">
              <p className="info-title">Birthday:</p>
              <p className="info">24th June, 1996</p>
            </div>
            <div className="info-box">
              <p className="info-title">Age:</p>
              <p className="info">27</p>
            </div>
            <div className="info-box">
              <p className="info-title">Website:</p>
              <p className="info">
                <a href="">Click Here</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Email:</p>
              <p className="info">
                <a href="mailto:vk1996vignesh@gmail.com">vk1996vignesh@gmail.com</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Degree:</p>
              <p className="info">B.E Mechanical Engineering</p>
            </div>
            <div className="info-box">
              <p className="info-title">Phone:</p>
              <p className="info">
                <a href="tel:+918526893918">+918526893918</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">City:</p>
              <p className="info">Trichy, Tamilnadu,India</p>
            </div>
            {/* <div className="info-box">
              <p className="info-title">Freeluncer:</p>
              <p className="info">Available</p>
            </div> */}
          </div>
          <a
            href="https://drive.google.com/file/d/1pgpDaGHyZ3Vhqwp6o8K8Z5uTpJ9cmovK/view?usp=sharing"
            className="btn margin-right-sm" rel="noopener noreferrer" target="_blank"
          >
            Download CV
          </a>
          <Link to="/contact" className="btn">
            Hair Me
          </Link>
        </div>
        <div className="skill">
          <div className="skill-box">
            <p className="skill-name">Html</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">CSS</p>
            <div className="skill-bar">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Bootstrap</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">MongoDB</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">React.js</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Node.js</p>
            <div className="skill-bar">
              <span style={{ width: "78%" }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-exp grid grid-2-col">
        <div className="education">
          <h3 className="secondary-heading margin-bottom-md">Education</h3>
          <div className="details">
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2013 - 2017</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                B.E Mechanical Engineering
              </h4>
              <p className="description">
                
              </p>
            </div>
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2013</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="description">
                I got 75% in my higher secondary examination
                from S.M.Hr.Secondary.School. I was in Computer Science
                group in higher secondary study.
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3 className="secondary-heading margin-bottom-md">Experience</h3>
          <div className="details">
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p> 6 Years</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Team Leader
              </h4>
              <p className="description">
              Diligent professional with 6 years of experience and a proven knowledgeof
Direct sales, Customer retention, and Client relationship management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
