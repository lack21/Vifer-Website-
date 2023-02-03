// Testimonials

import UserOne from "../images/user_1.jpg";
import UserTwo from "../images/user_2.jpg";
import UserThree from "../images/user_3.jpg";

function Testimonials() {
  const sliderBtns: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".slider-btn");
  const container: HTMLDivElement = document.querySelector(".container")!;

  sliderBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      container.style.transform = `translateX(-${index * 100}vw)`;
      sliderBtns.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  return (
    <section id="testimonials">
      <h2 className="sub-heading">What Our Clients Say</h2>
      <p className="desc-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="container">
        <div>
          <img src={UserOne} alt="user" />
          <h3>Alina Gabeli</h3>
          <div className="user-ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis animi tempora tenetur quaerat enim cum, modi cupiditate
            velit fugiat doloribus. Exercitationem, iusto odit. Nostrum iusto
            earum natus est ut modi!
          </p>
        </div>
        <div>
          <img src={UserTwo} alt="user" />
          <h3>Joseph Loeps</h3>
          <div className="user-ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis animi tempora tenetur quaerat enim cum, modi cupiditate
            velit fugiat doloribus. Exercitationem, iusto odit. Nostrum iusto
            earum natus est ut modi!
          </p>
        </div>
        <div>
          <img src={UserThree} alt="user" />
          <h3>Maria Lokeso</h3>
          <div className="user-ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis animi tempora tenetur quaerat enim cum, modi cupiditate
            velit fugiat doloribus. Exercitationem, iusto odit. Nostrum iusto
            earum natus est ut modi!
          </p>
        </div>
      </div>

      <div className="slider">
        <div className="slider-btn active"></div>
        <div className="slider-btn"></div>
        <div className="slider-btn"></div>
      </div>
    </section>
  );
}

export default Testimonials;
