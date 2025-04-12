import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container1 ${props.rootClassName} `}>
        <div className="footer-footer">
          <div className="footer-container2">
            <span className="footer-text1">
              Investing in&apos;DAWGZ AI&apos; is risky and may lead to loss of
              capital. Returns are not guaranteed. Not financial advice. DYOR.
            </span>
            <div className="footer-border">
              <div className="footer-link1">
                <div className="footer-logo">
                  <img
                    alt="logosvgfill1201"
                    src="/external/logosvgfill1201-awf2.svg"
                    className="footer-logosvgfill"
                  />
                </div>
              </div>
              <div className="footer-list">
                <div className="footer-item-link1">
                  <span className="footer-text2">Staking</span>
                </div>
                <div className="footer-item-link2">
                  <span className="footer-text3">Whitepaper</span>
                </div>
                <div className="footer-item-link3">
                  <span className="footer-text4">Audit</span>
                </div>
              </div>
              <div className="footer-link2">
                <img
                  alt="tgsvg1203"
                  src="/external/tgsvg1203-t27.svg"
                  className="footer-tgsvg"
                />
              </div>
              <div className="footer-link3">
                <img
                  alt="xsvg1204"
                  src="/external/xsvg1204-73ss.svg"
                  className="footer-xsvg"
                />
              </div>
              <div className="footer-link4">
                <img
                  alt="instagramsvg1204"
                  src="/external/instagramsvg1204-8gqg.svg"
                  className="footer-instagramsvg"
                />
              </div>
              <div className="footer-link5">
                <img
                  alt="linksvg1205"
                  src="/external/linksvg1205-9l9.svg"
                  className="footer-linksvg"
                />
              </div>
            </div>
            <span className="footer-text5">© 2024</span>
            <div className="footer-link6">
              <span className="footer-text6">Dawgz AI</span>
            </div>
            <span className="footer-text7">. All Rights Reserved</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-footer {
            width: 1521px;
            height: auto;
            display: flex;
            padding: 32px 0;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-black);
          }
          .footer-container2 {
            width: 1164px;
            height: 236.60000610351562px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text1 {
            top: 31px;
            left: 224.0399932861328px;
            color: var(--dl-color-dawgz.ai-white60);
            width: 716px;
            height: auto;
            position: absolute;
            text-align: center;
            line-height: 16px;
          }
          .footer-border {
            top: 79px;
            left: 0px;
            width: 1164px;
            height: 113.5999984741211px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 0.11999999731779099);
            border-style: solid;
            border-width: 0.800000011920929px 0;
          }
          .footer-link1 {
            top: 42.79999923706055px;
            left: 0px;
            width: 128px;
            height: 28px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-logo {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-logosvgfill {
            width: 128px;
            height: 28px;
          }
          .footer-list {
            gap: 40px;
            top: 44.400001525878906px;
            left: 389.9800109863281px;
            width: 297px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .footer-item-link1 {
            display: flex;
            align-items: center;
          }
          .footer-text2 {
            color: var(--dl-color-dawgz.ai-white60);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .footer-item-link2 {
            display: flex;
            align-items: center;
          }
          .footer-text3 {
            color: var(--dl-color-dawgz.ai-white60);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .footer-item-link3 {
            display: flex;
            align-items: center;
          }
          .footer-text4 {
            color: var(--dl-color-dawgz.ai-white60);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .footer-link2 {
            top: 32.79999923706055px;
            left: 947.989990234375px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            background: linear-gradient(
              157deg,
              rgba(255, 126, 3, 1) 17%,
              rgba(255, 214, 0, 1) 100%
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
          .footer-tgsvg {
            width: 24px;
            height: 24px;
          }
          .footer-link3 {
            top: 32.79999923706055px;
            left: 1003.989990234375px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            background: linear-gradient(
              157deg,
              rgba(255, 126, 3, 1) 17%,
              rgba(255, 214, 0, 1) 100%
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
          .footer-xsvg {
            width: 24px;
            height: 24px;
          }
          .footer-link4 {
            top: 32.79999923706055px;
            left: 1059.989990234375px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            background: linear-gradient(
              157deg,
              rgba(255, 126, 3, 1) 17%,
              rgba(255, 214, 0, 1) 100%
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
          .footer-instagramsvg {
            width: 24px;
            height: 24px;
          }
          .footer-link5 {
            top: 32.79999923706055px;
            left: 1115.989990234375px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            background: linear-gradient(
              157deg,
              rgba(255, 126, 3, 1) 17%,
              rgba(255, 214, 0, 1) 100%
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
          .footer-linksvg {
            width: 24px;
            height: 24px;
          }
          .footer-text5 {
            top: 224.60000610351562px;
            left: 465.8800048828125px;
            color: var(--dl-color-dawgz.ai-white60);
            width: 43px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 12px;
          }
          .footer-link6 {
            top: 224.60000610351562px;
            left: 516.2999877929688px;
            width: 58px;
            display: flex;
            position: absolute;
            align-items: center;
          }
          .footer-text6 {
            color: var(--dl-color-dawgz.ai-white60);
            height: auto;
            text-align: left;
            line-height: 12px;
          }
          .footer-text7 {
            top: 224.60000610351562px;
            left: 574.1500244140625px;
            color: var(--dl-color-dawgz.ai-white60);
            width: 124px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 12px;
          }

          @media (max-width: 1600px) {
            .footer-container1 {
              height: 330px;
            }
            .footer-footer {
              height: 357px;
              background-color: #000000;
            }
            .footer-text1 {
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Montserrat;
              line-height: 16px;
              letter-spacing: 0em;
            }
            .footer-text2 {
              color: #ffffff;
            }
            .footer-text3 {
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .footer-text4 {
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .footer-text5 {
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Montserrat;
              line-height: 12px;
              letter-spacing: 0em;
            }
            .footer-text6 {
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Montserrat;
              line-height: 12px;
              letter-spacing: 0em;
            }
            .footer-text7 {
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Montserrat;
              line-height: 12px;
              letter-spacing: 0em;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
