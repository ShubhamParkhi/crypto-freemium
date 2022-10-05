import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Home | Crypto Freemium";

  return (
    <div className="container pt-5">
      <div className="text-center">
        <Link className="btn btn-outline-secondary" to="/findus">
          Important Update (14/07/22)
        </Link>
      </div>
      <h1 className="display-5 text-center my-5">
        The Robin Hood of Paid Crypto Signals
      </h1>
      <p className="lead">
        We are an experienced team of <strong>Resourceful individuals</strong>{" "}
        <br />
        <br />
        We act as a <strong>smart filter</strong> to{" "}
        <strong>aggregating</strong> and{" "}
        <strong>filtering 50+ Leading Paid Membership Signal Channels</strong>{" "}
        and share it with our community for <strong>FREE</strong>
        <br />
        <br />
        We are building a <strong>free community</strong> that is far ahead of
        any Paid Channels or <strong>VIP/Premium Memberships</strong>
        <br />
        <br />
        We aim to spot and take advantage of{" "}
        <strong>Smart-Liquidity from Market Makers and Whales</strong>
        <br />
        <br />
        We are against manipulations and illicit practices by Paid Channels that
        attempt to monetize on greed and insecurities of Retail
        <br />
        <br />
      </p>
      <p className="lead text-center">
        We're unlike any Paid Signals Channel or Signal Reseller you could've
        come across <br />
        <br />
        <Link className="btn btn-warning" to="/about">
          About Us
        </Link>
      </p>
    </div>
  );
}
