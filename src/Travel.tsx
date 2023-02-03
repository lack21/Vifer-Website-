/* Travels */

import AustraliaImage from "../images/Australia.jpg";
import CanadaImage from "../images/Canada.jpg";
import GeorgiaImage from "../images/Georgia.jpg";
import Switzerland from "../images/Switzerland.jpg";

function Travel() {
  return (
    <section id="travel">
      <h2 className="sub-heading">Travels</h2>
      <p className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="flex-row">
        <div>
          <img src={AustraliaImage} alt="Australia" />
          <div className="layer">
            <h3>Australia</h3>
          </div>
        </div>
        <div>
          <img src={CanadaImage} alt="Canada" />
          <div className="layer">
            <h3>Canada</h3>
          </div>
        </div>
        <div>
          <img src={GeorgiaImage} alt="Georgia" />
          <div className="layer">
            <h3>Georgia</h3>
          </div>
        </div>
        <div>
          <img src={Switzerland} alt="Switzerland" />
          <div className="layer">
            <h3>Switzerland</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Travel;
