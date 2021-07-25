import React, { useState, useEffect } from 'react';

// Local imports
import XPLogo from './assets/SVG/XPLogo';
import {
  XPApp,
  XPMain,
  XPBoxCenter,
  XPFlexCenter,
  XPTitle,
  XPRow,
  XPColumn,
  XPLabel,
  XPDiv,
  XPInput,
  XPTransaction,
  XPInfo
} from './StyledComponents'
import SwapChains from './SwapChains';
import Selector from './Selector';
import SendButton from './SendButton';

import './App.css';


const chains = ['XP.network', 'Elrond'];


/********************************************************
 *                    APP Component                     *
 ********************************************************/
function App() {

  // =====================================================
  //                      S T A T E
  // =====================================================

  const [from, setFrom] = useState(chains[0]);
  const [to, setTo] = useState(chains[1]);
  const [nft, setNFT] = useState('');

  // =====================================================
  //                    EVENT HANDLERS
  // =====================================================

  const handleNftChange = (e) => {
    setNFT(e.target.value)
  }


  // ==========================================================
  //                            J S X
  // ==========================================================

  return (
    <XPApp>
      <XPMain>
        <XPBoxCenter>
          <XPFlexCenter>
            <XPLogo />
            <XPTitle>NFT Bridge</XPTitle>

            {/* -------------------------------------------- */}
            {/* ---------- The first Row of elements ------- */}
            {/* -------------------------------------------- */}

            <XPRow>

              <XPLabel>NFT</XPLabel>
              <XPTransaction
              value={nft}
              onChange={handleNftChange}
              ></XPTransaction>

            </XPRow>

            {/* -------------------------------------------- */}
            {/* --------- The second Row of elements ------- */}
            {/* -------------------------------------------- */}

            <div className="from-to-style">

              <XPColumn>
                <XPLabel>From</XPLabel>
                <Selector
                  value={from}
                  data={chains}
                />
              </XPColumn>
              <div className="swap-button-absolute">
                <SwapChains
                // onClick={handleSwapChains} 

                />
              </div>
              <XPColumn>
                <XPLabel>To</XPLabel>
                <Selector
                  value={to}
                  data={chains}
                />
              </XPColumn>
            </div>

            {/* -------------------------------------------- */}
            {/* ---------- The third Row of elements ------- */}
            {/* -------------------------------------------- */}

            <SendButton>

            </SendButton>

          </XPFlexCenter>
        </XPBoxCenter>
      </XPMain>
    </XPApp>
  );
}

export default App;
