import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url(/background_image.png)' }}>
      <div className="App-header-white">Hey, I'm Will</div>

      <div className="photo-text-wrapper">
        <img src="/_GSB_Photo_Circular.png" alt="Profile" className="centered-photo" />

        <div className="content">

          <div className="big-text">
            I’m building <a href="https://www.web3analytic.xyz/">Web3 Analytic</a>, a Web3 marketing automation platform
          </div>

          <div className="section">
            <h2>Backstory</h2>
            <p>
              I like challenges, fast feedback loops, and exploring.
            </p>
            <p>
              As a kid, I was obsessive with my hobbies. I hated giving up at things. I would try to solve puzzles until my head hurt and train until I threw up. Some of these hobbies worked out, others - like the flute - didn’t, but that intensity has certainly stuck with me.
            </p>
            <p>
              Like most 21-year-olds, I didn’t know what I wanted to do. I heard it was hard to get a job in Finance, so I went for that and worked in banking and investing for 5 years.
            </p>
            <p>
              It became clear I should be building things when people asked me “what professional achievement are you most proud of?” and my answer was - even after 5 years in finance - building a student society when I was 20 and so here I am building Web3 Analytic, a Web3 marketing automation platform.
            </p>
            <p>
              Outside of work, I’ve been into exploring and challenges - I spent a lot of my early 20s backpacking around places like South America. In my mid-late 20s, I was more fixated on challenges, like running ultramarathons, learning languages in short sprints, and training as a ski instructor. And now its just building :)
            </p>
          </div>

          <div className="section">
            <h2>The Web3 stuff:</h2>
            <ul>
              <li><a href="https://www.web3analytic.xyz/">Web3 Analytic</a> - a marketing platform for Web3 projects</li>
              <li>How to Build a DeFi Order Book [<a href="https://github.com/pareto-xyz/pareto-order-book-whitepaper/blob/main/how_to_orderbook.pdf">whitepaper</a>] [<a href="https://github.com/pareto-xyz/pareto-core-v1">smart contract code</a>] [<a href="https://github.com/pareto-xyz/pareto-orderbook-v1">orderbook code</a>] [<a href="https://github.com/pareto-xyz/pareto-app-v1">frontend code</a>] [<a href="https://twitter.com/WillMcTighe/status/1626292936076931079">tweet</a>]</li>
              <li>DeFi options vault using RMMs [<a href="https://github.com/pareto-xyz/pareto-theta-vault-whitepaper/blob/main/whitepaper.pdf">whitepaper</a>] [<a href="https://github.com/pareto-xyz/pareto-theta-vault-v1">code</a>] [<a href="https://twitter.com/WillMcTighe/status/1599812098820694017">tweet</a>]</li>
              <li>New family of AMM invariants [<a href="https://arxiv.org/abs/2205.07452">whitepaper</a>] [<a href="https://twitter.com/mike_h_wu/status/1526601203773083653">tweet</a>] [<a href="https://www.smartcontractresearch.org/t/research-summary-constant-power-root-market-makers/1698">scrf</a>]</li>
              <li><a href="https://tutela.xyz/"></a>Tutela, a tool to cluster blockchain wallets owned by the same entity [<a href="https://arxiv.org/abs/2201.06811">whitepaper</a>] [<a href="https://github.com/pareto-xyz/tutela-app">code</a>] [<a href="https://twitter.com/WillMcTighe/status/1475564099568381960">tweet</a>]  [<a href="https://golem.foundation/2022/02/07/interview-Tutela.html">press</a>]</li>
            </ul>
          </div>

          <div className="section">
            <h2>The CV:</h2>
            <ul>
              <li>Did my MBA at Stanford</li>
              <li>Growth Investor in technology companies at [<a href="https://www.vitruvianpartners.com/">Vitruvian Partners</a>] (2 years)</li>
              <li>Investment Banking at Goldman Sachs (3 years)</li>
              <li>Mathematical Economics and some Philosophy at University of Warwick (UK)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
