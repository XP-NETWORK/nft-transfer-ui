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
  XPTransaction,
  XPSpace
} from './StyledComponents'
import SwapChains from './SwapChains';
import Selector from './Selector';
import SendButton from './SendButton';


/********************************************************
 *                    APP Component                     *
 ********************************************************/
function App() {

  // Global constants
  const chains = ['XP.network', 'Elrond'];
  //                enabled, disabled, green, red
  const sendStates = [false, true, 'success', 'failure']

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

  // ESDT NFT nonce
  const [nonce, setNonce] = useState('');

  // ESDT NFT nonce
  const [displayNonce, setDisplayNonce] = useState('none');

  // Enabled / disaabled SEND button states
  const [sendInactive, setSendInactive] = useState(sendStates[0]);
  // SEND button states: Success = green, Failure = red
  const [execResult, setExecResult] = useState('') // No state



  useEffect(() => {
    if (from === chains[1]) {
      setDisplayNonce('flex')
    }else{
      setDisplayNonce('none')
    }
  }, [from, chains]);

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

    // Avoid the same source & target blockchains
    if (to === newValue) {
      chains.forEach(chain => {
        if (chain !== to) {
          setTo(chain)
          return from;
        }
      })
    }

  }

  /**
   * Mutates the target blockchain
   * @param {String} newValue 
   */
  const handleToChange = (newValue) => {
    setTo(newValue)

    // Avoid the same source & target blockchains
    if (from === newValue) {
      chains.forEach(chain => {
        if (chain !== from) {
          setFrom(chain)
        }
      })
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

  const handleNonceChange = (e) => {
    setNonce(e.target.value)
  }

  /**
   * SEND button onClick handler
   */
  const handleSendClick = () => {

    setSendInactive(sendStates[1]);

    try {

      // The sending transaction code goes here:


      // ...


      // In case of success => display success for 3 sec.
      setExecResult(sendStates[2]) // Success
      setTimeout(() => {
        // Release the button
        setExecResult('') // Neither success nor failure
        setSendInactive(sendStates[0]); // Enabled

      }, 3000);


    } catch (error) {

      // In case of an error => display error for 3 sec.
      setExecResult(sendStates[3]) // Failure
      setTimeout(() => {
        // Release the button
        setExecResult('') // Neither success nor failure
        setSendInactive(sendStates[0]); // Enabled
      }, 3000);

    }

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

            <XPRow
              style={{ display: `${displayNonce}` }}
            >
              <XPLabel>ESDT NFT nonce</XPLabel>
              <XPTransaction
                value={nonce}
                onChange={handleNonceChange}
              ></XPTransaction>

            </XPRow>

            <XPRow
              style={{ display: `${displayNonce}` }}
            >
              <XPColumn>
                <XPSpace />
              </XPColumn>
            </XPRow>


            <SendButton
              onClick={handleSendClick}
              inactive={sendInactive}
              className={execResult}
            />

          </XPFlexCenter>
        </XPBoxCenter>
      </XPMain>
    </XPApp>
  );
}

export default App;
