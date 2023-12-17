import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="content">
        <div className="header">
          <h1>Will McTighe</h1>
          <ul>
            <div>
              Building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a>.
            </div>
            <div>
              Documenting my startup journey here.
            </div>
            <div>
              Contact: <a href="https://twitter.com/WillMcTighe">Twitter</a>
            </div>
          </ul>
          <hr />
          <div className="section">
            <h2>Crypto:</h2>
            <ul>
              <li>Now building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a> - a marketing platform for Web3 apps</li>
              <li>
                  Co-authored several DeFi papers on:
                  <ul>
                    <li>How to build an Order Book in DeFi [<a href="https://github.com/pareto-xyz/pareto-order-book-whitepaper/blob/main/how_to_orderbook.pdf">Whitepaper</a>]</li>
                    <li>How to use a special type of AMM to build a DeFi Options Vault [<a href="https://github.com/pareto-xyz/pareto-theta-vault-whitepaper/blob/main/whitepaper.pdf">Whitepaper</a>]</li>
                    <li>A new family of AMM curves [<a href="https://arxiv.org/abs/2205.07452">Whitepaper</a>]</li>
                  </ul>
                </li>
              <li>With a couple of friends at Stanford, we built <a href="https://tutela.xyz/">Tutela</a>, a blockchain anonymity assessment tool [<a href="https://arxiv.org/abs/2201.06811">whitepaper</a>] [<a href="https://golem.foundation/2022/02/07/interview-Tutela.html">press</a>]</li>
            </ul>
          </div>
          <div className="section">
            <h2>My journey getting here:</h2>
            <ul>
              <li>Did my MBA at Stanford</li>
              <li>Growth Investor in technology companies at <a href="https://www.vitruvianpartners.com/">Vitruvian Partners</a></li>
              <li>Investment Banking at <a href="https://www.goldmansachs.com/">Goldman Sachs</a></li>
              <li>Mathematical Economics and some Philosophy at University of Warwick (UK)</li>
            </ul>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
