import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import traveler from "../assets/traveler.png";
import room_1 from "../assets/room_1.jpg";
import room_2 from "../assets/room_2.jpg";
import room_3 from "../assets/room_3.jpg";
import room_4 from "../assets/room_4.jpg";
import hotel_astro_resort from "../assets/hotel_astro_resort.jpg";
import hotel_the_enchanted_garden from "../assets/hotel_the_enchanted_garden.jpg";
import hotel_the_paradise from "../assets/hotel_the_paradise.jpg";
// let header = document.querySelector(".header");
// let hamburgerMenu = document.querySelector(".hamburger-menu");

// window.addEventListener("scroll", function () {
//   let windowPosition = window.scrollY > 0;
//   header.classList.toggle("active", windowPosition);
// });

// hamburgerMenu.addEventListener("click", function () {
//   header.classList.toggle("menu-open");
// });

function Home() {
  return (
    <>
      <Header />
      <main>
        <div class="hero">
          <div class="container">
            <div class="main-heading">
              <h1 class="title">Discover</h1>
              <h2 class="subtitle">Luxury Tours</h2>
            </div>
            <a href="#" class="btn btn-gradient">
              Explore Now
              <span class="dots">
                {" "}
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </a>
          </div>
        </div>
        <section class="booking">
          <div class="container">
            <form action="" class="form">
              <div class="input-group">
                <label for="destination" class="input-label">
                  Destination
                </label>
                <input type="text" class="input" id="destination" />
              </div>
              <div class="input-group">
                <label for="Check-in" class="input-label">
                  Check in
                </label>
                <input type="date" class="input" id="Check-in" />
              </div>
              <div class="input-group">
                <label for="Check-out" class="input-label">
                  Check out
                </label>
                <input type="date" class="input" id="Check-out" />
              </div>
              <div class="input-group">
                <label for="adults" class="input-label">
                  Adults
                </label>
                <select name="" id="adults" class="options">
                  <option value="0">0</option>
                  <option value="0">1</option>
                  <option value="0">2</option>
                  <option value="0">3</option>
                  <option value="0">4</option>
                  <option value="0">5</option>
                  <option value="0">6</option>
                  <option value="0">7</option>
                  <option value="0">8</option>
                  <option value="0">9</option>
                  <option value="0">10</option>
                  <option value="0">11</option>
                  <option value="0">12</option>
                  <option value="0">13</option>
                  <option value="0">14</option>
                  <option value="0">15</option>
                  <option value="0">16</option>
                  <option value="0">17</option>
                  <option value="0">18</option>
                  <option value="0">19</option>
                  <option value="0">20</option>
                  <option value="0">21</option>
                  <option value="0">22</option>
                  <option value="0">23</option>
                  <option value="0">24</option>
                  <option value="0">25</option>
                  <option value="0">26</option>
                  <option value="0">27</option>
                  <option value="0">28</option>
                  <option value="0">29</option>
                  <option value="0">30</option>
                </select>
              </div>
              <div class="input-group">
                <label for="children" class="input-label">
                  children
                </label>
                <select name="" id="children" class="options">
                  <option value="0">0</option>
                  <option value="0">1</option>
                  <option value="0">2</option>
                  <option value="0">3</option>
                  <option value="0">4</option>
                  <option value="0">5</option>
                  <option value="0">6</option>
                  <option value="0">7</option>
                  <option value="0">8</option>
                  <option value="0">9</option>
                  <option value="0">10</option>
                </select>
              </div>
              <button type="submit" class="btn form-btn btn-purple">
                Search
                <span class="dots">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
              </button>
            </form>
          </div>
        </section>
        <section class="hotels">
          <div class="container">
            <h5 class="section-head">
              <span class="heading">Explore</span>
              <span class="sub-heading">Our Beautiful Hotels</span>
            </h5>
            <div class="grid">
              <div class="grid-item featured-hotels">
                <img src={hotel_astro_resort} alt="" class="hotel-image" />
                <h5 class="hotel-name">Astro Hotel</h5>
                <span class="hotel-price">From Rs2000/Night</span>
                <div class="hotel-rating">
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star-half rating"></i>
                </div>
                <a href="#" class="btn btn-gradient">
                  Book Now
                  <span class="dots">
                    <i class="fas fa-ellipsis"></i>
                  </span>
                </a>
              </div>

              <div class="grid-item featured-hotels">
                <img
                  src={hotel_the_enchanted_garden}
                  alt=""
                  class="hotel-image"
                />
                <h5 class="hotel-name">Enchanted Garden</h5>
                <span class="hotel-price">From Rs3000/Night</span>
                <div class="hotel-rating">
                  <i class="fas fa-star rating"></i>
                </div>
                <a href="#" class="btn btn-gradient">
                  Book Now
                  <span class="dots">
                    <i class="fas fa-ellipsis"></i>
                  </span>
                </a>
              </div>

              <div class="grid-item featured-hotels">
                <img src={hotel_the_paradise} alt="" class="hotel-image" />
                <h5 class="hotel-name">The Paradise</h5>
                <span class="hotel-price">From Rs3500/Night</span>
                <div class="hotel-rating">
                  <i class="fas fa-star rating"></i>
                </div>
                <a href="#" class="btn btn-gradient">
                  {" "}
                  Book Now
                  <span class="dots">
                    <i class="fas fa-ellipsis"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="offer">
          <div class="container">
            <div class="offer-content">
              <div class="discount">40% Offer</div>
              <h5 class="hotel-name">The Paradise</h5>
              <div class="hotel-ratings">
                <div class="hotel-rating">
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star-half rating"></i>
                </div>
                <p class="paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet in qui quisquam ab et, nulla esse officia nesciunt
                  nihil laborum autem?
                </p>
                <a href="#" class="btn btn-gradient">
                  Redeem Offer
                  <span class="dots">
                    <i class="fas fa-ellipsis"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="rooms">
          <div class="container">
            <h5 class="section-head">
              <span class="heading">Luxurious</span>
              <span class="sub-heading">Affordable Rooms</span>
            </h5>
            <div class="grid rooms-grid">
              <div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img class="room-image" src={room_1} alt="" />
                  <h5 class="room-name">Astro hotel</h5>
                </div>
                <div class="room-info-wrap">
                  <span class="room-price">
                    Rs2000 <span class="per-night">Per Night</span>
                  </span>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nulla illo vitae animi unde officiis dolorem eaque!
                    Similique dignissimos temporibus quibusdam deserunt sint
                    quia atque perspiciatis, eos illo in nobis.
                  </p>
                  <a href="#" class="btn rooms-btn">
                    Book Now &rarr;
                  </a>
                </div>
              </div>
              <div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img class="room-image" src={room_2} alt="" />
                  <h5 class="room-name">Astro hotel</h5>
                </div>
                <div class="room-info-wrap">
                  <span class="room-price">
                    Rs2000 <span class="per-night">Per Night</span>
                  </span>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nulla illo vitae animi unde officiis dolorem eaque!
                    Similique dignissimos temporibus quibusdam deserunt sint
                    quia atque perspiciatis, eos illo in nobis.
                  </p>
                  <a href="#" class="btn rooms-btn">
                    Book Now &rarr;
                  </a>
                </div>
              </div>
              <div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img class="room-image" src={room_3} alt="" />
                  <h5 class="room-name">Astro hotel</h5>
                </div>
                <div class="room-info-wrap">
                  <span class="room-price">
                    Rs2000 <span class="per-night">Per Night</span>
                  </span>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nulla illo vitae animi unde officiis dolorem eaque!
                    Similique dignissimos temporibus quibusdam deserunt sint
                    quia atque perspiciatis, eos illo in nobis.
                  </p>
                  <a href="#" class="btn rooms-btn">
                    Book Now &rarr;
                  </a>
                </div>
              </div>
              <div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img class="room-image" src={room_4} alt="" />
                  <h5 class="room-name">Astro hotel</h5>
                </div>
                <div class="room-info-wrap">
                  <span class="room-price">
                    Rs2000 <span class="per-night">Per Night</span>
                  </span>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nulla illo vitae animi unde officiis dolorem eaque!
                    Similique dignissimos temporibus quibusdam deserunt sint
                    quia atque perspiciatis, eos illo in nobis.
                  </p>
                  <a href="#" class="btn rooms-btn">
                    Book Now &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact">
          <div class="container">
            <h5 class="section-head">
              <span class="heading">Contact</span>
              <span class="sub-heading">Get in touch with us</span>
            </h5>
            <div class="contact-content">
              <div class="traveler-wrap">
                <img src={traveler} alt="" />
              </div>
              <form action="" class="contact-form">
                <div class="input-group-wrap">
                  <div class="input-group">
                    <input
                      type="text"
                      class="input"
                      placeholder="Name"
                      required
                    />
                    <span class="bar"></span>
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      class="input"
                      placeholder="E-mail"
                      required
                    />
                    <span class="bar"></span>
                  </div>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="input"
                    placeholder="Subject"
                    required
                  />
                  <span class="bar"></span>
                </div>
                <div class="input-group">
                  <textarea
                    class="input"
                    cols="30"
                    rows="8"
                    placeholder="message"
                    required
                  ></textarea>
                  <span class="bar"></span>
                </div>
                <button type="submit" class="btn form-btn btn-purple">
                  Send Message <span class="dots"></span>
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
