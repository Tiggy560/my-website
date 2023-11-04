import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="section">
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
            <h2>Web3 stuff:</h2>
            <ul>
              <li><a href="https://www.web3analytic.xyz/">Web3 Analytic</a> - a marketing platform for Web3 projects</li>
              <li>How to Build a DeFi Order Book [<a href="https://github.com/pareto-xyz/pareto-order-book-whitepaper/blob/main/how_to_orderbook.pdf">whitepaper</a>] [<a href="https://github.com/pareto-xyz/pareto-core-v1">smart contract code</a>] [<a href="https://github.com/pareto-xyz/pareto-orderbook-v1">orderbook code</a>] [<a href="https://github.com/pareto-xyz/pareto-app-v1">frontend code</a>] [<a href="https://twitter.com/WillMcTighe/status/1626292936076931079">tweet</a>]</li>
              <li>DeFi options vault using RMMs [<a href="https://github.com/pareto-xyz/pareto-theta-vault-whitepaper/blob/main/whitepaper.pdf">whitepaper</a>] [<a href="https://github.com/pareto-xyz/pareto-theta-vault-v1">code</a>] [<a href="https://twitter.com/WillMcTighe/status/1599812098820694017">tweet</a>]</li>
              <li>New family of AMM invariants [<a href="https://arxiv.org/abs/2205.07452">whitepaper</a>] [<a href="https://twitter.com/mike_h_wu/status/1526601203773083653">tweet</a>] [<a href="https://www.smartcontractresearch.org/t/research-summary-constant-power-root-market-makers/1698">scrf</a>]</li>
              <li><a href="https://tutela.xyz/">Tutela</a>, a tool to cluster blockchain wallets owned by the same entity [<a href="https://arxiv.org/abs/2201.06811">whitepaper</a>] [<a href="https://github.com/pareto-xyz/tutela-app">code</a>] [<a href="https://twitter.com/WillMcTighe/status/1475564099568381960">tweet</a>] [<a href="https://golem.foundation/2022/02/07/interview-Tutela.html">press</a>]</li>
            </ul>
          </div>
          <div className="section">
            <h2>The CV:</h2>
            <ul>
              <li>Did my MBA at Stanford</li>
              <li>Growth Investor in technology companies at <a href="https://www.vitruvianpartners.com/">Vitruvian Partners</a> (2 years)</li>
              <li>Investment Banking at <a href="https://www.goldmansachs.com/">Goldman Sachs</a> (3 years)</li>
              <li>Mathematical Economics and some Philosophy at University of Warwick (UK)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
