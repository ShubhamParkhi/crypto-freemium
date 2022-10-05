import React from "react";
import { Link } from "react-router-dom";

export default function Faq1() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Blog | Crypto Freemium";

  return (
    <div className="container p-4 border mt-5">
      <h1 className="display-5 text-center my-5">FAQ Series - Q1</h1>
      <hr />
      <p className="lead">
        <strong> Question:</strong> Do you have a separate channel for "XYZ
        Premium/VIP" I find their signals you posted good and want to keep a
        watch on them <br />
        <br /> <strong>Answer:</strong>
      </p>
      <p className="lead">
        The Only separate free channels we have are listed{" "}
        <Link className="navbar-brand text-primary" to="/publicvip">
          here.
        </Link>
        <br /> We have a watch over{" "}
        <Link className="navbar-brand text-primary" to="/sources">
          these.
        </Link>
        <br />
        <strong>
          We do not believe in any one channel being right all the time.
          <br /> We do the job of tracking their present-past performance and
          post signals to Telegram/Twitter.
        </strong>
        <br /> For Ex : <br />
        Some channels flip bearish and remain bearish for weeks, It takes time
        for them to adapt and accept invalidation. <br />
        Likewise some channels run on a losing streak during a particular
        period. <br />
        We act as a smart filter and keep pushing source forward and backward
        after monitoring these factors b/w telegram ( Lesser risk) and Twitter (
        Including more risk calls) <br />
        <br />
        Note: We may in future, Add some more public channels at our personal
        discretion (if there is a specificpurpose for doing so) <br />
        The rest will be posted on our main telegram channel only.
      </p>
      <hr />
    </div>
  );
}
