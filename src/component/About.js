import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "About | Crypto Freemium";

  return (
    <>
      <div className="container py-5">
        <h1 className="display-5 text-center mb-5">What is Crypto Freemium?</h1>
        <hr />
        <p className="lead text-center">
          <strong> Freemium</strong> - Free Premium <br />
          Top Paid signals for free, That is all about Crypto Freemium.
        </p>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">More than a Leak Service</h5>
                <p className="card-text">
                  Our aim is not to be another leak service. You can find many
                  other paid leaks in the market if that is what you are looking
                  for.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filtering the Noise</h5>
                <p className="card-text">
                  We believe nobody is always right. We try to use our
                  experience and back-tested data to identify patterns of calls
                  and filter the best of best from the best.{" "}
                  <Link className="navbar-brand text-primary" to="/sources">
                    Check out our sources here!
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Trying to be better, Always</h5>
                <p className="card-text">
                  By grading channels based on success rate and continuous
                  monitoring (Along with keeping in mind the broader market
                  conditions and trends) we segregate and post calls.{" "}
                  <Link className="navbar-brand text-primary" to="/services">
                    Click to know!
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Deliver without modifications</h5>
                <p className="card-text">
                  We share calls as they are from source. We do not modify them
                  or edit them.We filter them and share them as is.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our personal insights</h5>
                <p className="card-text">
                  Based on our experience and knowledge of markets and Signal
                  channels, We provide our insights/Ideas of what to expect. We
                  also provide reminders/warnings from time to time
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Automatic + Manual</h5>
                <p className="card-text">
                  Some calls (scalps + Time sensitive) are auto posted into our{" "}
                  <a
                    className="navbar-brand text-primary"
                    href="http://t.me/crypto_freemium"
                  >
                    telegram channel
                  </a>
                  . The rest are manually filtered and posted by us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ALL FOR FREE</h5>
                <p className="card-text">
                  We will never move to a paid format. This will be free
                  forever. We aim to bridge the gap between wealthy cartels and
                  common retail. We are removing the veil behind many false
                  propagandas an ordinary person is blinded from seeing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Exposing Dark elements</h5>
                <p className="card-text">
                  The crypto paid signal industry is widely spread and includes
                  a huge variety of malpractices aimed at deceiving ordinary
                  retail making them FOMO buy memberships. They survive on greed
                  and insecurities of retail traders. We are focused at exposing
                  such dark behaviour. You can{" "}
                  <a
                    className="navbar-brand text-primary"
                    href="http://t.me/the_eye_crypto_freemium"
                  >
                    write to us
                  </a>{" "}
                  to share your story too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warning py-4 px-4">
        <h1 className="display-5">IMPORTANT :</h1>
        <ol className="list-group">
          <li className="list-group-item bg-warning">
            To read about who we are and why we started crypto freemium our
            vision and mission{" "}
            <Link
              className="navbar-brand text-primary"
              to="/about-crypto-freemium-and-the-people-behind-it-a-thread"
            >
              click here
            </Link>
            .
          </li>
          <li className="list-group-item bg-warning">
            Risk management is critical to survival. Preserving your capital and
            timing your trades is important.{" "}
            <Link
              className="navbar-brand text-primary"
              to="/basics-to-trading-freemium-family-academy"
            >
              Check our Freemium Family Academy guidelines
            </Link>{" "}
            for some tips to manage your trades better
          </li>
          <li className="list-group-item bg-warning">
            To check list of Public VIP channels we offer{" "}
            <Link className="navbar-brand text-primary" to="/publicvip">
              click here
            </Link>
            .
          </li>
          <li className="list-group-item bg-warning">
            We provide all our services for free. We do not contact you or ask
            you for money. We have been reported on multiple occasions where our
            services are being resold for $. If you want to share our calls with
            your friends{" "}
            <a
              className="navbar-brand text-primary"
              href="https://t.me/crypto_freemium/109935"
            >
              click here to read instructions!
            </a>
          </li>
          <li className="list-group-item bg-warning">
            One last reminder, We aim to use paid signals as a tool to
            identifying smart liquidity movements. We do not necessarily insist
            following the calls but adding the calls to your watch list and Spot
            potentials to scalp/smart trade when market provides opportunities.
            This strategy aims at achieving the best Risk : Reward compared to
            the rest of market.
          </li>
        </ol>
      </div>

      <center>
        <div className="container pt-4">
          <h1 className="display-5 text-center mb-4">A few feedbacks!</h1>

          <div
            id="carouselExampleIndicators"
            className="carousel slide bg-dark rounded mx-4"
            data-bs-ride="true"
            style={{ height: "215px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="bgtfn9449_JPG.webp" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img
                  src="photo_2022-08-31_17-17-45.webp"
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img src="vfrdb449bn_JPG.webp" className="d-block" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </center>
    </>
  );
}
