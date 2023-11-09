import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./portfolio.css";
import Img1 from "../../Photo/Img1.JPG";
import Img2 from "../../Photo/Img2.PNG";
import Img3 from "../../Photo/Img3.GIF";
import Img4 from "../../Photo/Img4.PNG";
import Img5 from "../../Photo/Img5.PNG";
import Img6 from "../../Photo/Img6.PNG";


const Portfolio = () => {
  return (
    <section>
      <SectionHeading heading={"Portfolio"}></SectionHeading>
      <div className="grid grid-3-col">
        <div className="portfolio-box scale-animation">
          <img src={Img1} alt="rest" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Rest Countries API & Weather
            </p>
            <p>
              <span>Technologies:</span> HTML, BootrstapCSS, JavaScript
            </p>
            <p className="description">
              A fully responsive website for fetching Countries details using
              Rest Countries API and Open Weather.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://splendorous-zuccutto-266a95.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/Day17Task-RestCountries.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              {/* <a
                href=""
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={Img2} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name: Todo List</span>
            </p>
            <p>
              <span>
                Technologies: HTML, CSS, JavaScript
              </span>
            </p>
            <p className="description">
              A fully responsive Todo List App. You can Create, Read, Edit,
              Delete Your Daily Activity.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://fluffy-flan-e4e4d2.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/To-do-List.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              {/* <a
                href="https://github.com/alamin360am/toy-house-server"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={Img3} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name: TIC TAC TOE</span>
            </p>
            <p>
              <span>Technologies:</span> HTMl, BootsrtapCSS, React.js,
            </p>
            <p className="description">
              A fully responsive TIC TAC TOE Game.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://keen-piroshki-26818f.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/TicTacToe"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              {/* <a
                href="https://github.com/alamin360am/chinese-food-server"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={Img4} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> URL Shortner Application
            </p>
            <p>
              <span>Technologies:</span> React, Express, MongoDB, Node.Js
            </p>
            <p className="description">An URL shortener is a website that reduces the length of your URL
             (Uniform Resource Locator). The idea is to minimize the web page address into something that's 
             easier to remember and track. </p>
            <div className="grid grid-3-col">
              <a
                href="https://url-short-application.netlify.app/login"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/URL-Shortener-Application-Frontend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/vicky-fsd/URL-Shortener-Application-Backend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={Img5} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Password Reset Application
            </p>
            <p>
              <span>Technologies:</span> MERN Stack(MongoDB,Express,React,Node)
            </p>
            <p className="description">A small number guessing game. To develop this game I used html, vanilla CSS and vanilla JavaScript</p>
            <div className="grid grid-3-col">
              <a
                href="https://pswd-reset-app.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/password-reset-frontend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/vicky-fsd/password-reset-backend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={Img6} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Movie Ticket Application
            </p>
            <p>
              <span>Technologies:</span> MERN Stack(MongoDB,Express,React,Node)
            </p>
            <p className="description">A movie ticket application project can be an online system that allows users to book and reserve movie tickets
            The system can provide information such as movie previews, show times, and available seats.</p>
            <div className="grid grid-3-col">
              <a
                href="https://book-bmt.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/vicky-fsd/Movie-Ticket-Application-Frontend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/vicky-fsd/Movie-Ticket-Application-Backend.git"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
