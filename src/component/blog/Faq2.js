import React from "react";

export default function Faq2() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Blog | Crypto Freemium";

  return (
    <div className="container p-4 border mt-5">
      <h1 className="display-5 text-center my-5">FAQ Series - Q2</h1>
      <hr />
      <p className="lead">
        <strong> Question:</strong> Do you post the signal channel name along
        with the signals? Could you add this hereafter? <br />
        <br /> <strong>Answer:</strong>
      </p>
      <center>
        <img
          src="720ca4_16e7408d0b214b55bc869e4ce395aff5_mv2.webp"
          alt=""
          className="rounded img-fluid max-width: 100%"
        />
      </center>
      <hr />
    </div>
  );
}
