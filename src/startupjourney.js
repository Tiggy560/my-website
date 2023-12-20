import React from 'react';
import './startupjourney.css';
import moment from 'moment';

const publishedDate = moment('2023-12-19').format('MMMM Do YYYY');

function StartupJourney() {
  return (
    <div className="App">
      <main>
        <div className="content">
        <div className="header">
            <h1>My Startup Journey</h1>
            
            <ul> Startup journeys often get rewritten after the fact and young founders idolize outcomes without appreciating the pain of the journey, so I’m documenting my steps and pivots here. </ul>

            <hr/>

            <h3>Idea 1: A DeFi Options Vault (Pareto Vaults) </h3>
                <ul>
                    <li>In June 2022, my co-founder and I got overly very excited by a new technology in DeFi.</li>
                    <li>We built an options vault that theoretically should have produced higher returns than existing vaults but didn’t test that assumption before building. When we eventually did market research after 2 months of building, we realized, it wasn’t solving a user need.</li>
                </ul>    
                <h3>Learnings:</h3>
                    <ul>
                        <li>Talk to users, identify their problems, test your assumptions</li>
                        <li>A Solution in Search of a Problem is very dangerous</li>
                    </ul>
                <hr/>
            <h3>Idea 2: DeFi Options Order Book (Pareto Order Book)</h3>
                <ul>
                    <li>In our market research, we learnt that capital efficiency was one of the reasons on-chain options hadn’t worked so far and so decided to build an options order book, like DYDX-v3, which addressed this.</li>
                    <li>After another 2 months of building, we came to the conclusion that this didn’t play to our strengths - neither of us had been options traders before and my co-founder had a PhD in Machine Learning that we weren't using.</li>
                </ul>
                <h3>Learnings:</h3>
                    <ul>
                        <li>Founder-market fit matters</li>
                        <li>Figma (lol)</li>
                    </ul>
                <hr/>
            <h3>Idea 3: Marketing and Analytics Tool for Web3 Teams (Web3 Analytic)</h3>
                <ul>
                    <li>Talking with other DeFi founders, we learnt that they struggled to grow their user bases and contacting potential customers was very hard.</li>
                    <li>This was a very tangible problem and since launch in April, we’ve built a customer base of ~20 protocols and grown to ~$90k ARR. Let’s see how the rest of this journey goes.</li>
                </ul>
                <h3>Learnings (so far):</h3>
                    <ul>
                        <li>Build faster MVPs - don’t spend 6 months building before launching if possible</li>
                        <li>Market potential and how you’ll capture it REALLY matters.</li>
                        <li>Choose your business model wisely. Crypto SaaS is hard - there are not many Web3 companies and when market activity grows 10x, the number of potential customers does not, so if you are selling a SaaS product and want to build a venture scale business, the contract sizes need to be large (e.g. $100k+), everyone needs to use your product (i.e. Horizontal SaaS) or sell to Web2 entities (e.g. Chainalysis, TRM Labs). Volume-based business models (e.g. CEXs, DEXs, Lending Protocols, RPCs) have more upside.</li>
                        <li>When navigating the idea maze, make decisions that solve user needs AND connect with your vision</li>
                    </ul>
            </div>
            <div className="published-date">
                <p>First Published: {publishedDate}</p>
            </div>
            </div>

      </main>
    </div>
  );
}

export default StartupJourney;