import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Info3 = (props) => {
  return (
    <>
      <div className={`info3-container1 ${props.rootClassName} `}>
        <div className="info3-container2">
          <span className="info3-text10">Connect Your Wallet</span>
          <div className="info3-paragraph1">
            <span className="info3-text11">Select Network</span>
            <span className="info3-text12 dawgz.aiMontserratMedium3">
              <span>
                After connecting your wallet, choose either Ethereum or Solana
              </span>
              <br></br>
              <span>network as we accept ETH, USDT, USDC, BNB or SOL.</span>
            </span>
          </div>
          <div className="info3-background1">
            <div className="info3-wallet1"></div>
            <img
              alt="SVG1svgfill1165"
              src="/external/svg1svgfill1165-djg.svg"
              className="info3svg1svgfill"
            />
            <div className="info3-wallet2"></div>
          </div>
          <div className="info3-paragraph2">
            <span className="info3-text16">Purchase Tokens</span>
            <span className="info3-text17 dawgz.aiMontserratMedium3">
              <span>
                Input the amount of $DAGZ tokens that you intend to buy with ETH
                or
              </span>
              <br></br>
              <span>USDT before confirming the transaction.</span>
            </span>
          </div>
          <div className="info3-background2">
            <img
              alt="SVG2svgfill1167"
              src="/external/svg2svgfill1167-m1v.svg"
              className="info3svg2svgfill"
            />
            <div className="info3-wallet3"></div>
            <div className="info3-wallet4"></div>
          </div>
          <div className="info3-paragraph3">
            <span className="info3-text21">Staking Option</span>
            <span className="info3-text22 dawgz.aiMontserratMedium3">
              <span>
                For additional rewards consider staking your newly acquired
                tokens.
              </span>
              <br></br>
              <span>
                Staked tokens will become available eight days after presale
                ends if not
              </span>
              <br></br>
              <span>claimed otherwise.</span>
            </span>
          </div>
          <div className="info3-background3">
            <img
              alt="SVG3svgfill1170"
              src="/external/svg3svgfill1170-7cb8.svg"
              className="info3svg3svgfill"
            />
            <div className="info3-wallet5"></div>
          </div>
          <div className="info3-paragraph4">
            <span className="info3-text28">Token Claim</span>
            <span className="info3-text29 dawgz.aiMontserratMedium3">
              <span>
                If you don’t want to stake then simply claim your $DAGZ tokens
                on our
              </span>
              <br></br>
              <span>website using same wallet and network.</span>
            </span>
          </div>
          <div className="info3-background4">
            <img
              alt="SVG4svgfill1173"
              src="/external/svg4svgfill1173-c4sj.svg"
              className="info3svg4svgfill"
            />
            <div className="info3-wallet6"></div>
            <div className="info3-wallet7"></div>
            <div className="info3-wallet8"></div>
          </div>
          <button className="info3-button">
            <span className="info3-text33">Buy $DAGZ</span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .info3-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .info3-container2 {
            width: 100%;
            height: 1001px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info3-text10 {
            left: 356.6300048828125px;
            color: var(--dl-color-dawgz.ai-selectiveyellow);
            width: 449px;
            height: auto;
            position: absolute;
            box-shadow: -2.595860004425049px -1.5038299560546875px 0px 0px rgba(0, 0, 0, 1);
            text-align: center;
            line-height: 48px;
          }
          .info3-paragraph1 {
            gap: 14.600000381469727px;
            top: 145px;
            left: 199px;
            width: 581px;
            height: 170px;
            display: flex;
            padding: 0 65.31999969482422px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3-text11 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info3-text12 {
            color: var(--dl-color-dawgz.ai-shark60);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .info3-background1 {
            top: 145px;
            left: 0px;
            width: 170px;
            height: 170px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3-wallet1 {
            width: 127.29000091552734px;
            height: 127.29000091552734px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_jul587wxsd-x68m-1500h.png');
          }
          .info3svg1svgfill {
            width: 170px;
            height: 170px;
          }
          .info3-wallet2 {
            width: 81.33000183105469px;
            height: 81.33000183105469px;
            display: flex;
            z-index: 2;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_rf1q2jdfdp-72bn-1500h.png');
          }
          .info3-paragraph2 {
            gap: 14.600000381469727px;
            top: 325px;
            left: 382px;
            width: 581px;
            height: 170px;
            display: flex;
            padding: 0 10.609999656677246px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3-text16 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info3-text17 {
            color: var(--dl-color-dawgz.ai-shark60);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .info3-background2 {
            top: 325px;
            left: 992px;
            width: 170px;
            height: 170px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3svg2svgfill {
            width: 170px;
            height: 170px;
          }
          .info3-wallet3 {
            width: 64px;
            height: 64px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_lglxotp_5v-k0k9-200h.png');
          }
          .info3-wallet4 {
            width: 64px;
            height: 64px;
            display: flex;
            z-index: 2;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_phw4dkwrz--plq-200h.png');
          }
          .info3-paragraph3 {
            gap: 14.600000381469727px;
            top: 505px;
            left: 199px;
            width: 581px;
            height: 170px;
            display: flex;
            padding: 0 3.259999990463257px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3-text21 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info3-text22 {
            color: var(--dl-color-dawgz.ai-shark60);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .info3-background3 {
            top: 505px;
            left: 0px;
            width: 170px;
            height: 170px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3svg3svgfill {
            width: 170px;
            height: 170px;
          }
          .info3-wallet5 {
            width: 81px;
            height: 81px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_f2v-wgmbp8-kvpj-200h.png');
          }
          .info3-paragraph4 {
            gap: 14.600000381469727px;
            top: 685px;
            left: 382px;
            width: 581px;
            height: 170px;
            display: flex;
            padding: 0 8.539999961853027px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3-text28 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info3-text29 {
            color: var(--dl-color-dawgz.ai-shark60);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .info3-background4 {
            top: 685px;
            left: 992px;
            width: 170px;
            height: 170px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .info3svg4svgfill {
            width: 170px;
            height: 170px;
          }
          .info3-wallet6 {
            width: 134.66000366210938px;
            height: 134.66000366210938px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_1jw7xuvnes-qhif-1500h.png');
          }
          .info3-wallet7 {
            width: 15.600000381469727px;
            height: 28.829999923706055px;
            display: flex;
            z-index: 2;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_dbiis3jeoh-2whp-1500w.png');
          }
          .info3-wallet8 {
            width: 15.600000381469727px;
            height: 28.829999923706055px;
            display: flex;
            z-index: 3;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_tvaxmrq2_k-5fr-1500w.png');
          }
          .info3-button {
            top: 855px;
            left: 436px;
            width: 290px;
            display: flex;
            padding: 13.600000381469727px 25.600000381469727px;
            position: absolute;
            background: linear-gradient(
              130deg,
              rgba(255, 214, 0, 1) 24%,
              rgba(255, 124, 2, 1) 100%
            );
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
          }
          .info3-text33 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }

          @media (max-width: 1600px) {
            .info3-container1 {
              height: 1046px;
              background-color: #eee3d2;
            }
            .info3-container2 {
              flex: 1;
              width: 1181px;
              height: 653px;
              align-self: center;
              align-items: flex-start;
              flex-direction: row;
            }
            .info3-text10 {
              top: 33px;
              left: 360px;
              color: #ff7e03;
              font-size: 32px;
              box-shadow: rgb(0, 0, 0) -2.59586px -1.50383px 0px 0px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              letter-spacing: 1.28px;
            }
            .info3-text11 {
              font-size: 24px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: 0em;
            }
            .info3-wallet1 {
              top: 0px;
              left: 0px;
              width: 50%;
              height: 94px;
              position: absolute;
            }
            .info3-text16 {
              font-size: 24px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: 0em;
            }
            .info3-text21 {
              font-size: 24px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: 0em;
            }
            .info3-text28 {
              font-size: 24px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: 0em;
            }
            .info3-text33 {
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
            }
          }
        `}
      </style>
    </>
  )
}

Info3.defaultProps = {
  rootClassName: '',
}

Info3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Info3
