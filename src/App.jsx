import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "./App.css";
import sampleVideo from "./assets/presentation-UA-web.mp4";
import fishPondManager from "./assets/FishPondManager-demo.mov";

import cvFile from "./assets/Nicolas-BIENES-CV.pdf";
import logoMoi from "./assets/logo/Logo-nico.png";
import moiImage from "./assets/moi.jpg";
import htmlLogo from "./assets/logo/html.png";
import cssLogo from "./assets/logo/CSS.png";
import jsLogo from "./assets/logo/JS.png";
import reactLogo from "./assets/logo/REACT.png";
import nodejsLogo from "./assets/logo/NODE-JS.png";
import sqlLogo from "./assets/logo/SQL.png";
import porfolio from "./assets/IMG-porfolio.png";
import uaLogo from "./assets/ua-image.jpg";
import github from "./assets/logo/git-hub.png";
import linkedin from "./assets/logo/linkedin.png";
import construction from "./assets/page-en-construction.png";
import iosApp1 from "./assets/PondManager1.png";
import iosApp2 from "./assets/PondManager2.png";
import iosApp3 from "./assets/PondManager3.png";
import iosApp4 from "./assets/PondManager4.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "🔗 Univers Aquatique",
      description: "Projet de Formation | Site Fullstack",
      img: uaLogo,
      details: (
        <>
          <video controls width="600" style={{ width: "100%", height: "auto" }}>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img
            src={uaLogo}
            alt="Web site Univers Aquatique"
            style={{ width: "100%", height: "auto" }}
          /> */}

          <p>
            As part of my Fullstack JavaScript developer diploma, I designed and
            developed a comprehensive website. This project includes:
            <br /> • A showcase site: An elegant platform to present the company
            and each store in detail. <br />• An assistance tool: An interactive
            feature allowing clients to calculate the necessary aquarium volumes
            and appropriate treatments. <br />• An e-commerce section: <br />A
            user-friendly online shopping space to facilitate transactions and
            product management. <br />
            This project demonstrates my skills in fullstack web development,
            integrating presentation, user interaction, and online commerce
            functionalities.
          </p>
          <h2>Stacks</h2>
          <article>
            <h3>Front-End Stacks</h3>
            <p>
              For the Front-End I used : Html / CSS / SASS / JavaScrip / React
            </p>
            <div>
              <img
                src={htmlLogo}
                alt="HTML Logo"
                style={{ width: "20%", height: "auto" }}
              />

              <img
                src={cssLogo}
                alt="CSS Logo"
                style={{ width: "20%", height: "auto" }}
              />
              <img
                src={jsLogo}
                alt="JavaScrip Logo"
                style={{ width: "20%", height: "auto" }}
              />
              <img
                src={reactLogo}
                alt="React Logo"
                style={{ width: "20%", height: "auto" }}
              />
            </div>
          </article>
          <article>
            <h3>Back-End Stacks</h3>
            <p>For the Back-End I used : NodeJS / MySQL</p>
            <div>
              <img
                src={nodejsLogo}
                alt="Node JS Logo"
                style={{ width: "20%", height: "auto" }}
              />
              <img
                src={sqlLogo}
                alt="SQL Logo"
                style={{ width: "20%", height: "auto" }}
              />
            </div>
          </article>
        </>
      ),
    },
    {
      title: "🔗 My PortFolio",
      description: "PortFolio | Site Developpeur",
      img: porfolio,
      details: (
        <>
          <img
            src={porfolio}
            alt="PortFolio"
            style={{ width: "100%", height: "auto" }}
          />
          <p>
            Here is an overview of my portfolio. You can view some of my recent
            projects and learn more about my skills and experience.
          </p>
          <h2>Stacks</h2>
          <p>
            For the Front-End I used : Html / CSS / SASS / JavaScrip / React
          </p>
          <p>
            <img
              src={htmlLogo}
              alt="HTML Logo"
              style={{ width: "20%", height: "auto" }}
            />
            <img
              src={cssLogo}
              alt="CSS Logo"
              style={{ width: "20%", height: "auto" }}
            />
            <img
              src={jsLogo}
              alt="JavasCrip Logo"
              style={{ width: "20%", height: "auto" }}
            />
            <img
              src={reactLogo}
              alt="React Logo"
              style={{ width: "20%", height: "auto" }}
            />
          </p>
        </>
      ),
    },

    {
      title: "🔗 IOS app",
      description: "IOS app | SwiftUI",
      img: iosApp1,
      details: (
        <>
          <video controls width="600" style={{ width: "80%", height: "auto" }}>
            <source src={fishPondManager} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p>
            The Fish Pond Manager is an iOS application designed to help fish
            pond owners track and manage pond maintenance efficiently. This app
            provides tools for scheduling tasks, monitoring water quality, and
            ensuring the health of your aquatic environment.
          </p>
          <h2>Stacks</h2>
          <p>For this app I used : SwiftUI and Xcode</p>
          <p>
            <img
              src={iosApp1}
              alt="IOS app "
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={iosApp2}
              alt="screenshot of app"
              style={{ width: "25%", height: "auto", margin: "20px" }}
            />
            <img
              src={iosApp3}
              alt="screenshot of app"
              style={{ width: "25%", height: "auto", margin: "20px" }}
            />
            <img
              src={iosApp4}
              alt="screenshot of app"
              style={{ width: "25%", height: "auto", margin: "20px" }}
            />
          </p>
        </>
      ),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mrbzbkqr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        firstname: formData.firstname,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error sending form:", error);
        alert("An error occurred. Please try again.");
      });
  };

  const presentationRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 1000 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: presentationRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="whiteGrey">
      <header id="header" className="black">
        <img src={logoMoi} className="logoMoi" alt="Logo" />
        <nav>
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
          <ul className={menuOpen ? "menu-open" : ""}>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#competences">My Skills</a>
            </li>
            <li>
              <a href="#projet">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="who">
        <article className="content">
          {/* <h1>Nicolas BIENES</h1> */}
          <h1 className="loader">
            <span className="lettre">N</span>
            <span className="lettre">i</span>
            <span className="lettre">c</span>
            <span className="lettre">o</span>
            <span className="lettre">l</span>
            <span className="lettre">a</span>
            <span className="lettre">s</span>
            <span className="lettre"> </span>
            <span className="lettre">B</span>
            <span className="lettre">I</span>
            <span className="lettre">E</span>
            <span className="lettre">N</span>
            <span className="lettre">E</span>
            <span className="lettre">S</span>
          </h1>
          <p>Fullstack JavaScript Developer</p>
        </article>
      </section>
      <section
        className="presentation whiteGrey"
        id="aboutMe"
        ref={presentationRef}
      >
        <h2 className="clearShadow">About Me</h2>
        <img src={moiImage} alt="Photo of me" />
        <p ref={textRef}>
          Junior <strong>JavaScript Web Developer</strong> with a{" "}
          <strong>rich experience in sales and management</strong>, I am
          passionate about creating innovative and efficient web solutions.
          After a successful career as a specialized store manager, where I
          developed strong team management, business strategy, and digital
          marketing skills, I decided to retrain in web development to follow my
          passion for technology.
          <br />
          <br />
          <strong>Graduated in full stack web development</strong> in 2024, I am
          proficient in JavaScript technologies, both for{" "}
          <strong>front-end and back-end</strong>. My practical experience
          includes managing web projects and creating interactive applications.
          With excellent interpersonal skills and an eye for detail, I am always
          on the lookout for new trends and technologies to improve my skills
          and offer the best to my clients. My unique background has given me a
          deep understanding of user needs and effective problem-solving
          techniques, making me a valuable asset to any development team.
          <br />
          <br /> I am ready to take on new challenges in web development and
          contribute to the success of ambitious and innovative projects.
        </p>
      </section>
      <section className="competences darkGrey" id="competences">
        <article>
          <h2 className="darkShadow">My Skills</h2>
          <div>
            <div className="logoComp">
              <img src={htmlLogo} alt="HTML logo" />
              <h3>HTML</h3>
            </div>
            <div className="logoComp">
              <img src={cssLogo} alt="CSS logo" />
              <h3>CSS</h3>
            </div>
            <div className="logoComp">
              <img src={jsLogo} alt="JavaScript logo" />
              <h3>JavaScript</h3>
            </div>
            <div className="logoComp">
              <img src={reactLogo} alt="React logo" />
              <h3>React</h3>
            </div>
            <div className="logoComp">
              <img src={nodejsLogo} alt="NodeJS logo" />
              <h3>NodeJS</h3>
            </div>
            <div className="logoComp">
              <img src={sqlLogo} alt="SQL logo" />
              <h3>SQL</h3>
            </div>
          </div>
        </article>
      </section>
      <section className="projet whiteGrey" id="projet">
        <h2 className="clearShadow">My Projects</h2>
        <div className="projetBox">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <article key={index} className="portfolio">
                <h3>
                  <a href="#!" onClick={() => openModal(project)}>
                    {project.title}
                  </a>
                </h3>
                <img
                  src={project.img}
                  alt={project.title}
                  onClick={() => openModal(project)}
                  style={{ cursor: "pointer" }}
                />
                <p>{project.description}</p>
              </article>
            ))}
          </Slider>
        </div>
      </section>
      <section className="cv-download darkGrey" id="cv">
        <h2 className="darkShadow">Download My CV</h2>
        <a href={cvFile} download="Nicolas_BIENES_CV.pdf" className="cv-button">
          Download CV
        </a>
      </section>
      <section className="contact whiteGrey" id="contact">
        <article>
          <h2>Contact</h2>
          <p>Let's get in touch, I will respond as soon as possible.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                placeholder="Your First Name"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </article>
      </section>
      <footer className="black">
        <article>
          <a href="https://www.linkedin.com/in/nicolas-bienes-3b4622173/">
            <img src={linkedin} alt="logo LinkedIn" className="gitlogo" />
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/NickoDev974">
            <img src={github} alt="logo git hub" className="gitlogo" />
            <p>GitHub</p>
          </a>
        </article>
        <p>✉️ nicolas.bienes@gmail.com</p>
      </footer>

      {isModalOpen && selectedProject && (
        <div className={`modal ${isModalOpen ? "show" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3 className="titleModal">{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            {/* Ajoutez plus de détails et des images si nécessaire */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
