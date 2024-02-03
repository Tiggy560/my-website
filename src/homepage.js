import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function HomePage() {
  return (
    <div className="App">
      <main>
        <div className="content">
          <div className="header">
          
          <div className="subheader">
          <img src={process.env.PUBLIC_URL + '/will.png'} alt="Will McTighe" className="photo" />
          <ul>
            <h2>Will McTighe</h2>
            <div>
              Building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a> and documenting it <Link to="/startup-journey">here</Link>.
            </div>
            <div>
              Contact: <a href="https://twitter.com/WillMcTighe">Twitter</a>, will[at]paretolabs.xyz
            </div>
          </ul>
          </div>
          <hr />
          <div className="section">
            <h2>Crypto:</h2>
            <ul>
              <li>Now building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a> - a marketing platform for Web3 apps</li>
              <li>
                  Co-authored several DeFi papers on:
                  <ul>
                    <li>How to build an Order Book in DeFi [<a href="https://github.com/pareto-xyz/pareto-order-book-whitepaper/blob/main/how_to_orderbook.pdf">whitepaper</a>]</li>
                    <li>How to use a special type of AMM to build a DeFi Options Vault [<a href="https://github.com/pareto-xyz/pareto-theta-vault-whitepaper/blob/main/whitepaper.pdf">whitepaper</a>]</li>
                    <li>A new family of AMM curves [<a href="https://arxiv.org/abs/2205.07452">whitepaper</a>]</li>
                  </ul>
                </li>
              <li>With a couple of friends at Stanford, we built <a href="https://tutela.xyz/">Tutela</a>, a blockchain anonymity assessment tool [<a href="https://arxiv.org/abs/2201.06811">whitepaper</a>] [<a href="https://golem.foundation/2022/02/07/interview-Tutela.html">press</a>]</li>
            </ul>
          </div>
          <div className="section">
            <h2>My journey getting here:</h2>
            <ul>
              <li>Born in the UK, I grew up moving all over as a young kid - 11 houses across 3 continents by the age of 7.</li>
              <li>I studied Mathematical Economics and Philosophy and when I graduated, I had a lot of energy and wanted to be challenged but not that much direction so gave Finance a try.</li>
              <li>After 5 years working in Banking (<a href="https://www.goldmansachs.com/">Goldman Sachs</a>) and tech investing (<a href="https://www.vitruvianpartners.com/">Vitruvian Partners</a>), I knew that I wanted to come to the US and build companies.</li>
              <li>I got into Stanford to do a MBA and co-founded <a href="https://www.web3analytic.xyz/">Web3 Analytic</a>, when I finished in mid-2022.</li>
              <li>More on company building journey later!</li>
            </ul>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
