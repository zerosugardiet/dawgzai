import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Profit = (props) => {
  return (
    <>
      <div className={`profit-container10 ${props.rootClassName} `}>
        <div className="profit-background-horizontal-border">
          <span className="profit-text10">Calculate your profit</span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="profit-image"
          />
          <div className="profit-container11">
            <div className="profit-container12">
              <div className="profit-container13"></div>
            </div>
            <div className="profit-background-border-shadow">
              <span className="profit-text11 dawgz.aiArchitectsDaughterRegular6">
                Enter value
              </span>
              <span className="profit-text12 dawgz.aiArchitectsDaughterRegular6">
                Calculated Profit
              </span>
              <span className="profit-text13">$100</span>
              <span className="profit-text14 dawgz.aiArchitectsDaughterRegular4">
                Presale
              </span>
              <span className="profit-text15">$0.00177</span>
              <span className="profit-text16 dawgz.aiArchitectsDaughterRegular4">
                Current price
              </span>
              <span className="profit-text17">$0.004</span>
              <span className="profit-text18 dawgz.aiArchitectsDaughterRegular4">
                Launch price
              </span>
              <span className="profit-text19">$0.00702</span>
              <span className="profit-text20 dawgz.aiArchitectsDaughterRegular4">
                The Moon
              </span>
              <span className="profit-text21">$1</span>
              <button className="profit-button">
                <span className="profit-text22">Reset</span>
              </button>
              <span className="profit-text23 dawgz.aiArchitectsDaughterRegular4">
                Predicted Price
              </span>
              <span className="profit-text24">$0.00177</span>
              <div className="profit-background-border">
                <img
                  alt="Gradient1190"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="profit-gradient"
                />
                <img src="/background-2-200h.png" className="profit-slider" />
              </div>
              <div className="profit-container14">
                <div className="profit-container15">
                  <div className="profit-container16">
                    <div className="profit-container17">
                      <div className="profit-container18">
                        <div className="profit-container19">
                          <div className="profit-container20">
                            <div className="profit-container21">
                              <div className="profit-container22">
                                <div className="profit-container23">
                                  <div className="profit-container24">
                                    <div className="profit-container25">
                                      <div className="profit-container26">
                                        <div className="profit-container27">
                                          <div className="profit-container28"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profit-input"></div>
                  <span className="profit-text25">100</span>
                </div>
                <span className="profit-text26">USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .profit-container10 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .profit-background-horizontal-border {
            gap: 32px;
            width: 1521px;
            height: auto;
            display: flex;
            padding: 44px 0 50px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 4px 0 0;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .profit-text10 {
            color: var(--dl-color-dawgz.ai-white);
            height: auto;
            z-index: 1;
            text-align: center;
            line-height: 48px;
          }
          .profit-image {
            width: 200px;
            object-fit: cover;
          }
          .profit-container11 {
            flex: 0 0 auto;
            width: auto;
            height: 331.20001220703125px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .profit-container12 {
            flex: 0 0 auto;
            width: auto;
            height: 331.20001220703125px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .profit-container13 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 331.20001220703125px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .profit-background-border-shadow {
            width: 720px;
            height: 331.20001220703125px;
            display: flex;
            z-index: 2;
            position: relative;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .profit-text11 {
            top: 25.600000381469727px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 105px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text12 {
            top: 129.60000610351562px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 159px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text13 {
            top: 129.60000610351562px;
            left: 646.8400268554688px;
            color: var(--dl-color-dawgz.ai-flushorange);
            width: 48px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .profit-text14 {
            top: 210px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black);
            width: 55px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text15 {
            top: 209.1999969482422px;
            left: 88.63999938964844px;
            color: var(--dl-color-dawgz.ai-black);
            width: 70px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text16 {
            top: 210px;
            left: 188.7100067138672px;
            color: var(--dl-color-dawgz.ai-black);
            width: 106px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text17 {
            top: 209.1999969482422px;
            left: 302.29998779296875px;
            color: var(--dl-color-dawgz.ai-black);
            width: 56px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text18 {
            top: 210px;
            left: 387.989990234375px;
            color: var(--dl-color-dawgz.ai-black);
            width: 99px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text19 {
            top: 209.1999969482422px;
            left: 494.7300109863281px;
            color: var(--dl-color-dawgz.ai-black);
            width: 74px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text20 {
            top: 210px;
            left: 598.52001953125px;
            color: var(--dl-color-dawgz.ai-black);
            width: 73px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text21 {
            top: 209.1999969482422px;
            left: 678.7100219726562px;
            color: var(--dl-color-dawgz.ai-black);
            width: 16px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-button {
            top: 254.39999389648438px;
            left: 25.600000381469727px;
            width: 204px;
            display: flex;
            padding: 13.600000381469727px 74.98999786376953px;
            position: absolute;
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .profit-text22 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .profit-text23 {
            top: 270.79998779296875px;
            left: 249.60000610351562px;
            color: var(--dl-color-dawgz.ai-black);
            width: 119px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-text24 {
            top: 270px;
            left: 376.010009765625px;
            color: var(--dl-color-dawgz.ai-black);
            width: 70px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .profit-background-border {
            top: 165.60000610351562px;
            left: 25.600000381469727px;
            width: 669px;
            height: 32px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 80px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .profit-gradient {
            top: 1.600000023841858px;
            left: 1.190000057220459px;
            width: 22px;
            height: 29px;
            position: absolute;
            border-radius: 80px;
          }
          .profit-slider {
            top: -8px;
            left: 1.600000023841858px;
            width: 48px;
            height: 48px;
            position: absolute;
            background: linear-gradient(
              136.69deg,
              #ffd600 24.26%,
              #ff7c02 112.36%
            );
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
          }
          .profit-container14 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container15 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container16 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container17 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container18 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container19 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container20 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container21 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container22 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container23 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container24 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container25 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container26 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container27 {
            flex: 0 0 auto;
            width: 629.7999877929688px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .profit-container28 {
            width: 629.7999877929688px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .profit-input {
            width: 669px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            padding: 18.399999618530273px 27px 18.399999618530273px 12px;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-lemonchiffon);
          }
          .profit-text25 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profit-text26 {
            top: 67.5999984741211px;
            left: 650.97998046875px;
            color: var(--dl-color-dawgz.ai-black);
            width: 32px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }

          @media (max-width: 1600px) {
            .profit-container10 {
              height: 510px;
              position: static;
            }
            .profit-background-horizontal-border {
              width: 1500px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              justify-content: flex-start;
              background-image: url('/background-5-1600w.png');
              background-position: left;
            }
            .profit-text10 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              letter-spacing: 1.28px;
              text-transform: uppercase;
            }
            .profit-image {
              right: 2px;
              width: 575px;
              bottom: 0px;
              height: 502px;
              position: absolute;
            }
            .profit-background-border-shadow {
              background-color: rgba(238, 227, 210, 0.98);
            }
            .profit-text11 {
              top: 15px;
              left: 36px;
              position: absolute;
            }
            .profit-text13 {
              color: rgb(255, 124, 2);
              font-style: normal;
              font-weight: 700;
            }
            .profit-text15 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.32px;
            }
            .profit-text17 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.32px;
            }
            .profit-text19 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.32px;
            }
            .profit-text21 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.32px;
            }
            .profit-text22 {
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .profit-text24 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.32px;
            }
            .profit-container15 {
              position: relative;
            }
            .profit-input {
              left: -15px;
              bottom: -77px;
              position: absolute;
              background-color: #fff7cb;
            }
            .profit-text25 {
              left: 6px;
              color: var(--dl-color-dawgz.ai-black);
              bottom: -69px;
              position: absolute;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.32px;
            }
            .profit-text26 {
              top: 53px;
              color: var(--dl-color-dawgz.ai-black);
              right: 40px;
              font-size: 14px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: 0em;
            }
          }
        `}
      </style>
    </>
  )
}

Profit.defaultProps = {
  imageSrc: '/transformed-3.png',
  rootClassName: '',
  imageAlt: 'image',
}

Profit.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Profit
