// Header

import { useState } from "react";
import logoImage from "../images/vifer_logo.png";
import "./style.css";

function Header() {
  const navBar: HTMLElement | null = document.querySelector(".nav-bar");
  const logo: HTMLImageElement = document.querySelector(".logo")!;
  const switchBtn = document.querySelector(".switch-btn")!;

  const navLinks: HTMLUListElement = document.querySelector(".nav-links")!;
  const [showLinks, setLinks] = useState(false);
  const upperBar: HTMLDivElement = document.querySelector(".up")!;
  const centerBar: HTMLDivElement = document.querySelector(".center")!;
  const lowerBar: HTMLDivElement = document.querySelector(".down")!;

  window.addEventListener("scroll", () => {
    if (navBar) {
      if (window.scrollY > 0) {
        navBar.style.backgroundColor = "#49a999";
        navBar.style.padding = ".5rem 5%";
        logo.style.transform = "scale(0.8)";
      } else {
        navBar.style.backgroundColor = "transparent";
        logo.style.transform = "scale(1)";
        navBar.style.padding = "2rem 5%";
      }
    }
  });

  function ChangeBack() {
    document.body.classList.toggle("dark-body");
    switchBtn.innerHTML =
      switchBtn.innerHTML == '<i class="fa fa-moon-o"></i>'
        ? '<i class="fa fa-sun-o"></i>'
        : '<i class="fa fa-moon-o"></i>';
  }

  function LinksShow() {
    setLinks((showLinks) => !showLinks);

    if (showLinks) {
      navLinks.style.right = "0";
      upperBar.style.transform = "rotate(45deg) translateY(10px)";
      centerBar.style.transform = "translateX(50px)";
      lowerBar.style.transform = "rotate(-45deg)  translateY(-10px)";
    } else {
      navLinks.style.right = "-150px";
      upperBar.style.transform = "translateY(0)";
      centerBar.style.transform = "translateX(0)";
      lowerBar.style.transform = "translateY(0)";
    }
  }

  return (
    <header id="header">
      <nav className="nav-bar">
        <img src={logoImage} alt="logo" className="logo" />

        <ul className="nav-links">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#offers">Offers</a>
          </li>
          <li>
            <a href="#travel">Travel</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="links-btn" onClick={LinksShow}>
          <div className="up"></div>
          <div className="center"></div>
          <div className="down"></div>
        </button>
      </nav>

      <section className="content">
        <h1>Book Your Life!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit totam incidunt
          eaque odio.
          <br />
          Magni doloribus eos esse voluptas, amet ipsum qui repellat assumenda
          placeat iste perspiciatis quam!
        </p>
        <a href="#" className="btn">
          More Information
        </a>
      </section>

      <button className="switch-btn" onClick={ChangeBack}>
        <i className="fa fa-sun-o"></i>
      </button>
    </header>
  );
}

export default Header;
