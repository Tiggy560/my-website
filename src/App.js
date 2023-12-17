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
              <li>Now building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a> - a marketing platform for Web3 projects</li>
              <li>Co-authored several DeFi papers on:
                  How to build a <a href="https://github.com/pareto-xyz/pareto-order-book-whitepaper/blob/main/how_to_orderbook.pdf">DeFi Order Book</a>,  
                  how to use a special type of AMM to <a href="https://github.com/pareto-xyz/pareto-theta-vault-whitepaper/blob/main/whitepaper.pdf">build a DeFi options vault</a>,
                  and a <a href="https://arxiv.org/abs/2205.07452">new family of AMM curves</a>
              </li>
              <li><a href="https://tutela.xyz/">Tutela</a>, a blockchain anonymity assessment tool [<a href="https://arxiv.org/abs/2201.06811">whitepaper</a>] [<a href="https://golem.foundation/2022/02/07/interview-Tutela.html">press</a>]</li>
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
