import React from "react";

export default function Services() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Services | Crypto Freemium";

  return (
    <div className="container text-center py-5">
      <h1 className="display-5 mb-5">Join the Crypto freemium Community!</h1>

      <div className="row">
        <div className="col-sm-6 my-1">
          <div className="card">
            <div className="card-body text-center">
              <a
                className="navbar-brand text-primary"
                href="http://t.me/crypto_freemium"
              >
                <h5 className="card-title">Telegram (Channel 1)</h5>
              </a>
              <p className="card-text">
                <strong>Highly Filtered Signals</strong> (LOW RISK) Based on our
                personal review of Premium channels
                <br />
                <br />
                (Lesser Signals)
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-1 text-center">
          <div className="card">
            <div className="card-body">
              <a
                className="navbar-brand text-primary"
                href="http://t.me/crypto_freemium2"
              >
                <h5 className="card-title">Telegram (Channel 2)</h5>
              </a>
              <p className="card-text">
                <strong>Moderately Filtered Signals</strong> (Moderate Risk)
                More Signals, More exposure. Subject to your personal choice.
                <br />
                <br />
                (More Signals)
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <a
        href="http://twitter.com/cryptofreemium"
        className="navbar-brand text-primary m-4"
      >
        <h5>Twitter</h5>
      </a>
      <p className="card-text mb-4">
        Personally filtered Combination of <br /> signals posted in both
        channels above <br />
        for expanding reach.
      </p>
      <p className="card-text bg-warning d-inline-block p-4">
        <strong>NOTE: </strong>We Actively monitor our signals <br />{" "}
        performance and their corresponding <br /> channels track record, to Add
        / Remove <br /> them from the above classifications.
      </p>
    </div>
  );
}
