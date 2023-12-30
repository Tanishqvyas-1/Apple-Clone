import React from "react";
import "./content.css";
export default function Content() {
  return (
    <>
      <div className="video">
        <video controls autoPlay loop muted play-inline>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="box1">
        <div className="title">
          <h1>Store. The best way to buy the product you love.</h1>
        </div>
        <div className="service">
          <img src="service1.jpg" alt="" />
          <p>Need a shopping help?</p>
          <a href="#">Ask a specialist?</a>
          <br />

          <img src="service2.png" alt="" />
          <p>Visit an Apple store</p>
          <a href="#">Find one near you</a>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <img src="pr1.png" alt="" /><br />
          <a href="#">Macbook</a>
        </div>
        <div className="product">
          <img src="pr2.png" alt="" /><br />
          <a href="#">iPad</a>
        </div>
        <div className="product">
          <img src="pr3.png" alt="" /><br />
          <a href="#">AirPods</a>
        </div>
        <div className="product">
          <img src="pr4.png" alt="" /><br />
          <a href="#">Mac</a>
        </div>
        <div className="product">
          <img src="pr5.png" alt="" /><br />
          <a href="#">iPhone 14</a>
        </div>
      </div>
      <div className="box2">
        <h1>The Latest. Take a look at what's new right now.</h1>
        <div className="cards">
          <div className="card">
            <span>LIMITED TIME OFFER</span>
            <h1>Save on Mac or iPad for University</h1>
            <p>You'll also save on apple pencil, Magic keyboard for iPad</p>
            <img src="pr1.png" alt="" />
          </div>
          <div className="card">
            <span>LIMITED TIME OFFER</span>
            <h1>MacBook Air 15. Buy Now</h1>
            <p>You'll also save on apple pencil, Magic keyboard for iPad, get 20% off AppleCare+, and more</p>
            <img src="pr4.png" alt="" />
          </div>
          <div className="card black">
            <span>LIMITED TIME OFFER</span>
            <h1>iPhone 14. Buy Now</h1>
            <p>You'll also save on apple pencil, Magic keyboard for iPad</p>
            <img src="pr5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="events">
        <h1>Lets's Explore Apple events</h1>
        <div className="image">
          <img src="event1.jpg" alt="" />
          <img src="event2.png" alt="" />
        </div>
      </div>
      <div className="box3">
        <img src="pr5.png" alt="" />
        <h1>iPhone 14 Pro Leather Case with MagSafe- Ink</h1>
      </div>
      <div className="footer">
        <div className="logo">
          <img src="apple-logo.png" alt="" />
          <p>Apple Store online</p>
        </div>
        <div className="items">
          <div className="item">
            <ul>
              <li>Shop and Learn</li>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV&Home</li>
              <li>AirTag</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Apple Podcasts</li>
              <li>Account</li>
              <li>Manage your Apple ID</li>
              <li>Apple Store Account</li>
              <li>icloud.com</li>
              <li>Entertainment</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Apple Values</li>
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supplier Responsibility</li>
              <li>About Apple</li>
              <li>NewsRoom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics&Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        <div className="cr">
          <p>Copyright copy&; 2024 Apple Inc. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
