
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter11 from "../assets/img/meter11.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import colorSharp from "../assets/img/color-sharp.png"
import colorSharp1 from "../assets/img/banner-bg1.png"

//import { ArrowRightCircle } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
              <h2>Conocimientos</h2>
              <p>Soy un estudiante autodidacta desarrollando habilidades en las siguientes tecnologías..</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Habilitar desplazamiento automático
                autoPlaySpeed={2000} // Intervalo en milisegundos
                className="custom-carousel"
                customTransition="transform 300ms ease-in-out" // Agregar transición personalizada si es necesario
              >
                <div className="item">
                  <img src={meter4} alt="Image9" className="skill-image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image1" className="skill-image" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image2" className="skill-image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image3" className="skill-image" />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image4" className="skill-image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="Image5" className="skill-image" />
                  <h5>DB</h5>
                </div>

              </Carousel>
              <div className="centered-container">
                <a href="/assets/docs/CV NICOLAS MAHECHA ES.pdf" target="_blank" rel="noreferrer">
                  Visualizar CV <PersonCircle size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp1} alt="Image0" />
    </section>

  )
}
