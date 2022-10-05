import React from "react";
import { Link } from "react-router-dom";

export default function Findus() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Blog | Crypto Freemium";

  return (
    <div className="container p-4 border">
      <h1 className="display-5 text-center">
        Where to find Crypto-freemium.com
      </h1>
      <hr />
      <p className="lead">
        We, at{" "}
        <Link className="navbar-brand text-primary" to="/">
          Crypto-Freemium.com
        </Link>{" "}
        do this generous service of sharing Classified-Wealthy Only Content
        (Filtered Crypto Signals from over 100+ Paid channels) to every Common
        person out there. If you aren't aware of what we do make sure to check{" "}
        <Link className="navbar-brand text-primary m-0" to="/about">
          here
        </Link>
        .
      </p>
      <hr />
      <p className="lead">
        Alongside our service, We also deem to encounter malpractices by many
        paid Channels. We expose them and report them from time to time on our
        telegram/Twitter. They are involved in a series of intentionally
        deceiving acts to maximize their revenue from memberships / Pump and
        Dump their personal bags / Mis-represent their real state of affairs in
        VIP/Premium to their public channels - Targeting audience to get
        mislead. Owing to wealthy backgrounds of a lot of resourceful Cartels,
        we are bound to face suspensions/Terminations of our telegram/twitter
        handles anytime. We are talking about channels making anywhere from
        100k$+ to millions by such shady dark practices. They go to extents to
        try stopping us.
      </p>
      <hr />
      <p className="lead">
        Rest Assured our fight for serving justice to each one of you will never
        stop. <br />
        No suspension/Ban shall stop us. <br />
        We are in no-way violating any TOS of any social media platforms. <br />
        <strong>
          If you ever find our telegram/twitter handles missing/suspended/banned
          make sure to check{" "}
          <Link className="navbar-brand text-primary" to="/services">
            here.
          </Link>
        </strong>
      </p>
      <hr />
      <p className="lead">
        <i>
          If you are a signal channel and are upset with us sharing your content
          : <br />
          Be assured the right ones will find you and join you as long as your
          content is being helpful to them. Many of our community members DM us
          asking name of source channels to some good signals. Consider us
          providing a trail to your service. <br />
          We do not aim to target revenues of any channel (Exceptions exist.
          Only special Fraudsters) As long as your content is genuine, what we
          are doing will only help more deserving distressed people (Not harm
          you).
        </i>
      </p>
    </div>
  );
}
