import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { skills } from '../data/constants'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are the skills I've developed over the years</p>
              <div className="box d-flex">
                <Carousel responsive={responsive} infinite={true} className="owl-carousel m-2 owl-theme skill-slider">
                  {skills.map((skill) => (
                    <div key={skill.id} className="" style={{ margin: '0 12px' }} >
                      <div className="box-field">
                        <div className="skill-title">{skill.title}</div>
                        <div className="skill-list">
                          {skill.skills.map((item,index) => (
                            <div key={index}className="skill-item">
                              <img src={item.image} alt="skills-icon"/>
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Skills-background" />
    </section>
  )
}
