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
  XPInfo,
  XPSpace
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

  // Source blockchain
  const [sourceAccount, setSourceAccount] = useState('');
  // Target Blockchain
  const [targetAccount, setTargetAccount] = useState('');

  // Source blockchain
  const [from, setFrom] = useState(chains[0]);
  // Target Blockchain
  const [to, setTo] = useState(chains[1]);
  // NFT hash identifier
  const [nft, setNFT] = useState('');

  // =====================================================
  //                    EVENT HANDLERS
  // =====================================================

  /**
   * Swap To <=> From blockchains
   * 
   * button click handler
   */
   const handleSwapChains = () => {

    const temp_to = to;
    setTo(from);
    setFrom(temp_to);

  }

  /**
   * Mutates the source blockchain
   * @param {String} newValue 
   */
  const handleFromChange = (newValue) => {
    setFrom(newValue)

    console.log(from, to)
    
  }

  /**
   * Mutates the target blockchain
   * @param {String} newValue 
   */
  const handleToChange = (newValue) => {
    setTo(newValue)

    if( from === newValue){

    }
  }

  /**
   * Mutates the source account
   * @param {Event} e an event linking to the triggering element
   */
  const handleSourceAccountChange = (e) => {
    setSourceAccount(e.target.value)
  }

  /**
   * Mutates the target account
   * @param {Event} e an event linking to the triggering element
   */
  const handleTargetAccountChange = (e) => {
    setTargetAccount(e.target.value)
  }

  /**
   * Mutates the NFT hash string
   * @param {Event} e an event linking to the triggering element
   */
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

            <div className="from-to-style">

              <XPColumn>
                <XPLabel>From</XPLabel>
                <Selector
                  value={from}
                  data={chains}
                  onChange={handleFromChange}
                />
              </XPColumn>
              <div className="swap-button-absolute">
                <SwapChains onClick={handleSwapChains} />
              </div>
              <XPColumn>
                <XPLabel>To</XPLabel>
                <Selector
                  value={to}
                  data={chains}
                  onChange={handleToChange}
                />
              </XPColumn>
            </div>

            <XPRow>
              <XPColumn>
                <XPSpace />
              </XPColumn>
            </XPRow>

            {/* -------------------------------------------- */}
            {/* --------- The second Row of elements ------- */}
            {/* -------------------------------------------- */}

            <XPRow>

              <XPLabel>Non-Fungible Token</XPLabel>
              <XPTransaction
                value={nft}
                onChange={handleNftChange}
              ></XPTransaction>

            </XPRow>

            <XPRow>
              <XPColumn>
                <XPSpace />
              </XPColumn>
            </XPRow>

            {/* -------------------------------------------- */}
            {/* ---------- The third Row of elements ------- */}
            {/* -------------------------------------------- */}

            <XPRow>
              <XPLabel>Source Account</XPLabel>
              <XPTransaction
                value={sourceAccount}
                onChange={handleSourceAccountChange}
              ></XPTransaction>

            </XPRow>

            <XPRow>
              <XPColumn>
                <XPSpace />
              </XPColumn>
            </XPRow>

            {/* -------------------------------------------- */}
            {/* --------- The fourth Row of elements ------- */}
            {/* -------------------------------------------- */}

            <XPRow>
              <XPLabel>Target Account</XPLabel>
              <XPTransaction
                value={targetAccount}
                onChange={handleTargetAccountChange}
              ></XPTransaction>

            </XPRow>

            <XPRow>
              <XPColumn>
                <XPSpace />
              </XPColumn>
            </XPRow>

            {/* -------------------------------------------- */}
            {/* ---------- The fifth Row of elements ------- */}
            {/* -------------------------------------------- */}

            <SendButton />

          </XPFlexCenter>
        </XPBoxCenter>
      </XPMain>
    </XPApp>
  );
}

export default App;
