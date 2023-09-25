import { Container} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indiabiztimes.png";
import projImg2 from "../assets/img/educred.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "IndiaBizTimes",
      agenda: "India's Top Headlines",
      date: "July 2022 to August 2022",
      description: "IndiaBizTimes is a responsive web based news application that provides the latest top headlines of India across various categories.",
      image: projImg1,
      tags: [
        "React JS",
        "News API",
        "Bootstrap",
        "CSS",
        "HTML",
        "Node JS",
      ],
      github: "https://github.com/Zorothecoder/IndiaBizTimes-A-News-Application.git",
      website: "https://zorothecoder.github.io/IndiaBizTimes-A-News-Application/",
    },
    {
      id: 1,
      title: "EDUCRED",
      agenda: "Student Rewarding Framework",
      date: "May 2023 to August 2023",
      description: "EduCred is a student-rewarding framework designed to enhance academic performance of the students. Visit Github Readme file for username and password",
      image: projImg2,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Ajax",
        "JQuery",
        "PHP MyAdmin",
        "PWA"
      ],
      github: "https://github.com/Zorothecoder/EduCred",
      website: "https://educ-red.000webhostapp.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        {/* <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
              <div className="top">
                <h2>Projects</h2>
                <p>Check out my projects below</p>
                <div className="border-bottom"></div>
              </div>
              <div className="project-cards">
                {
                  projects.map((project) => {
                    return (
                      <ProjectCard key={project.id}{...project}/>
                    )
                  })
                }
              </div>
            {/* </div>}
        </TrackVisibility> */}
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="project-section-background"></img>
    </section>
  )
}
