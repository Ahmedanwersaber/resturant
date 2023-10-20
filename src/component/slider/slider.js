import {Carousel} from "react-bootstrap";
import img1 from "../../assets/images/item1.jpg";
import img2 from "../../assets/images/item2.jpg";
import './slider.css';

function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Testimonials </h2>
  <Carousel className="Carousel">
      <Carousel.Item>
        <img src={img1} title="First slide" />
        <Carousel.Caption className="caption">
            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ".</p> 
            <h3>First slide label</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} title="First slide" />
        <Carousel.Caption>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
            there live the blind texts. Separated they live far from the countries Vokalia."</p>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} title="First slide" />
        <Carousel.Caption>
          <p>
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
           there live the blind texts. Separated they live far from the countries Vokalia."
          </p> <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Slider;
