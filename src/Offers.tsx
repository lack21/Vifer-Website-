// Our Offers

import { useState } from "react";

function Offers() {
  const [offerMode, setOfferMode] = useState(true);

  const offerBtn: HTMLButtonElement = document.querySelector(".offer-btn")!;
  const hiddenOffers: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".hidden-offer");

  function OffersChange() {
    setOfferMode((offerMode) => !offerMode);

    if (offerMode) {
      hiddenOffers.forEach((item) => {
        item.style.display = "block";
      });

      offerBtn.innerHTML = "Show Less!";
    } else {
      hiddenOffers.forEach((item) => {
        item.style.display = "none";
      });

      offerBtn.innerHTML = "Show More!";
    }
  }

  return (
    <section id="offers">
      <h2 className="sub-heading">Our Offers</h2>
      <p className="desc-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div className="grid-row">
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>

        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
        <div className="hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            harum aliquam eum atque voluptates natus numquam nesciunt magnam,
            excepturi impedit ipsum et ipsa sint autem!
          </p>
        </div>
      </div>

      <button className="offer-btn btn-2" onClick={OffersChange}>
        Show More!
      </button>
    </section>
  );
}

export default Offers;
