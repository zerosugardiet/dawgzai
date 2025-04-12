import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const INFO = (props) => {
  return (
    <>
      <div className={`info-container1 ${props.rootClassName} `}>
        <div className="info-container2">
          <div className="info-container3">
            <div className="info-grass"></div>
            <div className="info-transformed1"></div>
            <div className="info-transformed2"></div>
            <span className="info-text10">Presenting: DAWGZ AI</span>
            <button className="info-button">
              <span className="info-text11">Connect Wallet</span>
            </button>
            <div className="info-paragraph-background-border">
              <span className="info-text12">
                “Seriously Revamping Cryptocurrency”
              </span>
              <span className="info-text13 dawgz.aiMontserratMedium2">
                Hi, I’m DAWGZ AI,
              </span>
              <span className="info-text14 dawgz.aiMontserratMedium2">
                <span>
                  Ever think you would invest your extra earnings with a living
                  meme whose digital mind is powered by
                </span>
                <br></br>
                <span>artificial intelligence?</span>
              </span>
              <span className="info-text18 dawgz.aiMontserratMedium2">
                <span>
                  I’m DAWGZ AI and I got a pocketful of trade bots to help you
                  mess around and get a triple double or
                </span>
                <br></br>
                <span>
                  some other insane return on investment (ROI) for your
                  highly-valued contribution to fund and
                </span>
                <br></br>
                <span>
                  capitalize Ethereum, the world’s leading and fastest growing
                  smart contract platform.
                </span>
              </span>
              <span className="info-text24 dawgz.aiMontserratMedium2">
                <span>
                  With all these powerful AI meme coins in competition in 2024
                  to stuff your bag with Web3 ROI,
                </span>
                <br></br>
                <span>
                  indecision is no friend to your portfolio. Altcoin presale gem
                  hunters care if they get behind.
                </span>
              </span>
              <span className="info-text28 dawgz.aiMontserratMedium2">
                <span>
                  So don’t wait around. Get ahead of the curve and make
                  something happen for yourself again with a
                </span>
                <br></br>
                <span>
                  good solid lick off the AI Dawgz economy while the tokens are
                  still available at the premarket price.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .info-container1 {
            width: 100%;
            height: 772px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-container2 {
            width: 1521px;
            height: 791px;
            display: flex;
            padding: 85px 0 172.60000610351562px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .info-container3 {
            width: 1162px;
            height: 526.4000244140625px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info-grass {
            top: 268px;
            left: 336px;
            width: 1162px;
            height: 543.3300170898438px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_cs0hxrzkpa-ycor-1500h.png');
          }
          .info-transformed1 {
            top: 105px;
            left: -130px;
            width: 802px;
            height: 802px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_p0-qqogfyp-52fg-900h.png');
          }
          .info-transformed2 {
            top: 6px;
            left: 482px;
            width: 725px;
            height: 698px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_shpi4svzc_-qsia-800w.png');
          }
          .info-text10 {
            color: var(--dl-color-dawgz.ai-black);
            width: 441px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 48px;
          }
          .info-button {
            top: 475.20001220703125px;
            left: 0px;
            width: 290px;
            display: flex;
            padding: 13.600000381469727px 75.43000030517578px
              13.600000381469727px 75.41000366210938px;
            position: absolute;
            background: linear-gradient(
              130deg,
              rgba(255, 214, 0, 1) 24%,
              rgba(255, 124, 2, 1) 100%
            );
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: row;
            justify-content: center;
          }
          .info-text11 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .info-paragraph-background-border {
            top: 88px;
            left: 0px;
            width: 726px;
            height: 347.20001220703125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .info-text12 {
            top: 13.600000381469727px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black);
            width: 361px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 25px;
          }
          .info-text13 {
            top: 53.599998474121094px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 122px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .info-text14 {
            top: 93.5999984741211px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 693px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .info-text18 {
            top: 153.60000610351562px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 682px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .info-text24 {
            top: 233.60000610351562px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 647px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .info-text28 {
            top: 293.6000061035156px;
            left: 13.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 679px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }

          @media (max-width: 1600px) {
            .info-container2 {
              background-color: #ffffff;
            }
            .info-text10 {
              font-size: 32px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              letter-spacing: 1.28px;
            }
            .info-button {
              left: -9px;
              width: 291px;
              bottom: 7px;
              margin-right: var(--dl-layout-space-halfunit);
              padding-left: 0px;
              padding-right: 0px;
            }
            .info-text11 {
              color: var(--dl-color-dawgz.ai-black);
              font-size: 20px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .info-paragraph-background-border {
              background-color: #ffffff;
            }
            .info-text12 {
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        `}
      </style>
    </>
  )
}

INFO.defaultProps = {
  rootClassName: '',
}

INFO.propTypes = {
  rootClassName: PropTypes.string,
}

export default INFO
