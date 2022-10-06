import React from "react";

export default function Donate() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Donate | Crypto Freemium";

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-5">
        Contribute to the Crypto Freemium Community Fund
      </h1>
      <hr />
      <p className="lead">
        Freemium (in our name) stands for Free Premium
        <br />
        We will NEVER move to a paid subscription format whatsoever
      </p>
      <hr />
      <p className="lead">
        If you benefited by our existence in any way, <br /> Your donation could
        help us grow and improve - what we are already doing <br /> You could
        donate any amount you wish 1$ or 2$ or 5$, Voluntarily
      </p>
      <p className="lead">
        All donations to the mentioned addresses shall be limited to use for :
        <br />
      </p>
      <ul>
        <li className="lead">Auto Forward Scripts & Bots (Monthly renewals)</li>
      </ul>
      <p className="lead">
        We began Crypto Freemium by manually posting signals. <br />
        Today, we have about 30% of the work Automated. <br />
        We are actively working to do better.
      </p>
      <ul>
        <li className="lead">Purchasing additional Premiums</li>
      </ul>
      <p className="lead">
        We are growing and with more community exposure, we get DM Suggestions
        of many new Premium services which are not covered under our list.
        <br />
        The community fund shall be used to purchase and deliver such
        suggestions deemed fit to our strict quality tests.
      </p>
      <hr />

      <h1 className="text-center mt-5 display-6">
        Crypto-Freemium Community Fund Addresses
      </h1>
      <br />
      <div className="table-responsive rounded">
        <table className="table table-striped table-hover table-bordered table-responsive bg-light rounded">
          <tbody>
            <tr>
              <th scope="row">Binance Pay</th>
              <th scope="col">
                <a
                  className="text-center navbar-brand text-primary"
                  href="http://t.me/the_eye_crypto_freemium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>{" "}
                  Message me!
                </a>
              </th>
            </tr>
            <tr>
              <th scope="row">USDT (TRC20)</th>
              <th scope="col">TXvn6rW64cnjGTayj8soeG1z3Qa8UEEV6m</th>
            </tr>
            <tr>
              <th scope="row">USDT (BEP20)</th>
              <th scope="col">0x24F11B876c6FE9C7152bF7DC3b8c61873B09873d</th>
            </tr>
            <tr>
              <th scope="row">USDT (ERC20)</th>
              <th scope="col">0x24F11B876c6FE9C7152bF7DC3b8c61873B09873d</th>
            </tr>
            <tr>
              <th scope="row">USDC (ERC20)</th>
              <th scope="col">0x24F11B876c6FE9C7152bF7DC3b8c61873B09873d</th>
            </tr>
            <tr>
              <th scope="row">BTC</th>
              <th scope="col">bc1qdfkvmhm3kvr6pup2wyvamaffw0esqn7rrymx37</th>
            </tr>
            <tr>
              <th scope="row">ETH</th>
              <th scope="col">0x24F11B876c6FE9C7152bF7DC3b8c61873B09873d</th>
            </tr>
            <tr>
              <th scope="row">BNB</th>
              <th scope="col">bnb1zn3ta8af6rxl53actxwx53rqsqaa0nedequ7h4</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
