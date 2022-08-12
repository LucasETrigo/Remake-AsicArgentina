import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import asic1 from "../assets/img/asics/M30S++.png";
import asic2 from "../assets/img/asics/bitmaingod.png";
import asic3 from "../assets/img/asics/A1126.png";
import asic4 from "../assets/img/asics/a10proeth.png";
import asic5 from "../assets/img/asics/e9bitmain.png";
import colorSharp from "../assets/img/color-sharp.png";

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
                        <h2>Modelos que traemos!</h2>
                        <p>¡Sácate todas tus dudas y empezá a generar tus ingresos!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                    <img src={asic1} alt="Image" />
                                    <h5>WhatsMiner M30s++</h5>
                                </div>
                                <div className="item">
                                    <img src={asic2} alt="Image" />
                                    <h5>Bitmain s19j Pro</h5>
                                </div>
                                <div className="item">
                                    <img src={asic3} alt="Image" />
                                    <h5>Avalon 1126 Pro</h5>
                                </div>
                                <div className="item">
                                    <img src={asic4} alt="Image" />
                                    <h5>Innosillicon A10 Pro ETH</h5>
                                </div>
                                <div className="item">
                                    <img src={asic5} alt="Image" />
                                    <h5>Bitmain E9</h5>
                                </div>
                                <div className="item">
                                    <img src={asic2} alt="Image" />
                                    <h5>Bitmain Litecoin Miner L7</h5>
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
