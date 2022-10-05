import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Blog | Crypto Freemium";

  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Blogs</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="ABCD.webp"
              className="img-fluid rounded max-width: 100% p-3"
              alt="Where to find Crypto-freemium.com"
              focusable="false"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Where to find Crypto-freemium.com</h5>
              <p className="card-text">
                We, At Crypto-Freemium.com do this generous service of sharing
                Classified-Wealthy Only Content (Filtered Crypto Signals from
                over 100+...
              </p>
              <Link to="/findus" className="btn btn-primary">
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="BCDE.webp"
              className="img-fluid rounded max-width: 100% p-3"
              alt="Where to find Crypto-freemium.com"
              focusable="false"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Buyers Beware Series 1 (Exposing the Dark) S1E1
              </h5>
              <p className="card-text">
                We began crypto-freemium.com with a view to giving every common
                person a taste of what expensive paid memberships feel like (We
                aggregate...
              </p>
              <Link to="/buyersbeware" className="btn btn-primary">
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="card-body">
            <h5 className="card-title">FAQ Series - Q2</h5>
            <p className="card-text">
              Question: Do you post the signal channel name along with the
              signals? Could you add this hereafter?
            </p>
            <Link to="/faq2" className="btn btn-primary">
              Continue Reading
            </Link>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="card-body">
            <h5 className="card-title">FAQ Series - Q1</h5>
            <p className="card-text">
              Question: Do you have a separate channel for "XYZ Premium/VIP" I
              find their signals you posted good and want to keep a watch on
              them...
            </p>
            <Link to="/faq1" className="btn btn-primary">
              Continue Reading
            </Link>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="CDEF.webp"
              className="img-fluid rounded max-width: 100% p-3"
              alt="Where to find Crypto-freemium.com"
              focusable="false"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Basics to Trading - Freemium Family Academy
              </h5>
              <Link
                to="/basics-to-trading-freemium-family-academy"
                className="btn btn-primary"
              >
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="DEFG.webp"
              className="img-fluid rounded max-width: 100% p-3"
              alt="Where to find Crypto-freemium.com"
              focusable="false"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                About Crypto Freemium and the people behind it - A Thread
              </h5>
              <p className="card-text">
                Crypto Freemium was born on August 2 2022 Next we have some
                questions about Who what and why w.r.t Crypto Freemium and the
                people behind...
              </p>
              <Link
                to="/about-crypto-freemium-and-the-people-behind-it"
                className="btn btn-primary"
              >
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
