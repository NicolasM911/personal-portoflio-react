import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg1 from "../assets/img/header-img1.svg";
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Ingeniero Sistemas", "Desarollador Software"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido a mi Portafolio</span>
                  <h1>{`Hola! Soy Nicolás `}</h1>
                    <span className="txt-rotate" 
                    //dataPeriod="1000" 
                    data-rotate='[ "Ingeniero Sistemas", "Desarollador Software" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                    <p>Ingeniero de Sistemas apasionado por la innovación y la resolución de problemas a través de la tecnología.<br></br>
                    Soy una persona autodidacta, perseverante y comprometido con los objetivos, siempre dispuesto aprender de nuevas tecnologías y metodologías de desarrollo.</p>
                    <p>Actualmente estoy participando en el programa de formación Talento Tech del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) de Colombia. Estoy cursando el currículum de Inteligencia Artificial.</p>
                    <p>Tambien estoy en el proceso de formación Backend de Alura Latam + Oracle One.</p>
                    <button onClick={() => window.location.href='#connect'}>Contáctame <Envelope size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg1} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
