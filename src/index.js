import React, { useState } from "react";
// import { useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
function GYM() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="gymsite">
      <Headers />
      <Exercise />
      <Benefits />
      <Shedule />
      <Pricing />
      <Testimonial />
      <Footer />
      <Copy />
    </main>
  );
}

const Headers = () => {
  const [navlist, setnavlist] = useState(false);
  //   const headerRef = useRef(null);
  //   const headerFunc = () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky_header");
  //     } else {
  //       headerRef.current.classList.remove("sticky_header");
  //     }
  //   };
  // useEffect (()=>{
  //   window.addEventListener('scroll', headerFunc);
  //   return()=> window.removeEventListener('scroll', headerFunc);
  // }, [])
  return (
    <section className="header">
      <div className="logo">
        <h1>GYM</h1>
      </div>
      <div className={navlist ? "small" : "links"}>
        <div className="link">
          <a href="#exercise">
            <bdo>Home</bdo>
          </a>
        </div>
        <div className="link">
          <a href="#shedule">Shedule</a>
        </div>
        <div className="link">
          <a href="#shedule">Classes</a>
        </div>
        <div className="link">
          <a href="#pricing">Pricing</a>
        </div>
      </div>
      <div className="regis">
        <h3>Register</h3>
      </div>
      <div className="menus">
        <button className="menu" onClick={() => setnavlist(!navlist)}>
          {navlist ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </section>
  );
};

const Exercise = () => {
  return (
    <section
      className="exercise"
      id="exercise"
    >
      <div className="healthy"
        data-aos-duration="3000"
      data-aos="fade-up">
        <h1>
          Exercise is the key to <span>Healthy</span> Lifestyle
        </h1>
        <p>
          Fitness are often used to describe what your bussiness is all about
          and deliver message important to pay attention
        </p>
        <div className="start">
          <div className="boss">
            <h3>Get Started</h3>
          </div>
          <div className="video">
            <h3>
              <i className="bx bx-play" id="play"></i> Watch Video
            </h3>
          </div>
        </div>
      </div>

      <div className="logimg"    data-aos-duration="2500"
      data-aos="fade-left" data-aos-delay="300">
        <img src="./images/gym-02.png" alt=""></img>
      </div>
    </section>
  );
};
const Benefits = () => {
  return (
    <section className="benefits" data-aos-duration="2000"
    data-aos="fade-right" data-aos-delay="400">
      <h2>
        Benefits of <span>Exercise</span>
      </h2>
      <p>
        These are some great exercise slogans for you. Exercise your mind and
        body
      </p>
      <div className="benefit">
        <div className="health">
          <img src="./images/extended.png" alt=""></img>
          <h5>Healthy Life </h5>
          <p>
            These are some great exercise slogans for you. Exercise your mind
            and body
          </p>
        </div>
        <div className="health">
          <img src="./images/yoga-pose.png" alt=""></img>
          <h5>Increased Flexibility</h5>
          <p>
            These are some great exercise slogans for you. Exercise your mind
            and body
          </p>
        </div>
        <div className="health">
          <img src="./images/lunges.png" alt=""></img>
          <h5>Reduced Blood Pressure</h5>
          <p>
            These are some great exercise slogans for you. Exercise your mind
            and body
          </p>
        </div>
      </div>
    </section>
  );
};

const Shedule = () => {
  return (
    <section id="shedule" className="shedule">
      <div className="sheimg" data-aos-duration="3000"
      data-aos="zoom-out" data-aos-delay="300">
        <img src="./images/trainer.png" alt=""></img>
      </div>
      <div className="shed" data-aos-duration="3500"
      data-aos="fade-left" data-aos-delay="400">
        <h2>
          Ready to Make your <span> Fitness</span>
        </h2>
        <p>
          Gym are essential part to any sucessfull gym. They will help to
          attract new customers members, motivated and track to achieve thier
          goals
        </p>
        <div className="boss">
          <h3>Learn More</h3>
        </div>
      </div>
    </section>
  );
};
const Pricing = () => {
  return (
    <section className="pricing" id="pricing"  data-aos-duration="1500"
    data-aos="fade-down" data-aos-delay="500">
      <h2>
        <span>Gym</span> Pricing Plan
      </h2>
      <p>
        This will help to attract new customers members, motivated and track to
        achieve thier goals
      </p>

      <div className="prices"  data-aos-duration="2500"
      data-aos="flip-right" data-aos-delay="400">
        <div className="price">
          <div>
            <h4>Regular Member</h4>
            <div className="mon">
              <h4>$50</h4>
              <h5>/month</h5>
            </div>
            <hr></hr>
          </div>

          <ul>
            <li>
              <p>unlimited access to the gym</p>
            </li>
            <li>
              <p>customer support</p>
            </li>
            <li>
              <p>personal trainer</p>
            </li>
            <li>
              <p>standard options</p>
            </li>
            <li>
              <p>5 classes per week</p>
            </li>
          </ul>
          <div className="join">
            <h3>Join Now</h3>
          </div>
        </div>
        <div className="price">
          <div className="pric">
            <h4>Premium Member</h4>
            <div className="mon">
              <h4>$50</h4>
              <h5>/month</h5>
            </div>
            <hr></hr>
          </div>
          <ul> 
            <li>
              <p>unlimited access to the gym</p>
            </li>
            <li>
              <p>customer support</p>
            </li>
            <li>
              <p>personal trainer</p>
            </li>
            <li>
              <p>standard options</p>
            </li>
            <li>
              <p>5 classes per week</p>
            </li>
          </ul>


          <div className="join">
            <h3>Join Now</h3>
          </div>
        </div>
        <div className="price">
          <div>
            <h4>Standard Member</h4>
            <div className="mon">
              <h4>$50</h4>
              <h5>/month</h5>
            </div>
          </div>
          <hr></hr>

          <ul>
            <li>
              <p>unlimited access to the gym</p>
            </li>
            <li>
              <p>customer support</p>
            </li>
            <li>
              <p>personal trainer</p>
            </li>
            <li>
              <p>standard options</p>
            </li>
            <li>
              <p>5 classes per week</p>
            </li>
          </ul>
          <div className="join">
            <h3>Join Now</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
const Testimonial = () => {
  return (
    <section className="sliders" data-aos-duration="2500"
    data-aos="zoom-in" data-aos-delay="600">
      <h2>
        <span>Testimonials</span>
      </h2>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        <SwiperSlide className="swiper">
          <div className="slide_item">
            <div className="slide_img">
              <img src="./images/avatar01.png" alt=""></img>
            </div>
            <h3>Skyler Schiefer</h3>
            <p>
              The gym bootcamp will help you unique and proper.The design and
              placement is very okay.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="slide_item">
            <div className="slide_img">
              <img src="./images/avatar02.png" alt=""></img>
            </div>
            <h3>Skyler Schiefer</h3>
            <p>
              The gym bootcamp will help you unique and proper.The design and
              placement is very okay.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="slide_item">
            <div className="slide_img">
              <img src="./images/avatar01.png" alt=""></img>
            </div>
            <h3>Skyler Schiefer</h3>
            <p>
              The gym bootcamp will help you unique and proper.The design and
              placement is very okay.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="slide_item">
            <div className="slide_img">
              <img src="./images/avatar02.png" alt=""></img>
            </div>{" "}
            <h3>Skyler Schiefer</h3>
            <p>
              The gym bootcamp will help you unique and proper. The design and
              placement is very okay.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
const Footer = () => {
  return (
    <section className="footer" data-aos-duration="5500"
    data-aos="fade-down" data-aos-delay="600">
      <div className="foot">
        <h1>GYM</h1>
        <p>
          Fitness are often used to describe what your bussiness all about and
          deliver as well
        </p>
      </div>
      <div className="foot">
        <h4>Company</h4>
        <p>About</p>
        <p>Contact Us</p>
        <p>Carrers</p>
      </div>
      <div className="foot">
        <h4>Links</h4>
        <p>News</p>
        <p>Contact</p>
        <p>Join Us</p>
      </div>
      <div className="foot">
        <h4>Contact</h4>
        <div className="email">
          <div className="mail">
            <p>Enter Email address </p>
          </div>
          <i className="bx bx-send" id="send"></i>
        </div>
      </div>
    </section>
  );
};
const Copy = () => {
  return (
    <section className="copy">
      <hr></hr>
      <p>copyright 2023, All Rights Reserved MustyDev 👨‍💻</p>
    </section>
  );
};

ReactDOM.render(<GYM />, document.getElementById("root"));
