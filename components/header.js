import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Header = (props) => {
  return (
    <>
      <div className={`header-container1 ${props.rootClassName} `}>
        <div className="header-header">
          <div className="header-container2">
            <div className="header-list">
              <div className="header-item-link1">
                <span className="header-text1 dawgz.aiSemanticLink2">
                  Staking
                </span>
              </div>
              <div className="header-item-link2">
                <span className="header-text2 dawgz.aiSemanticLink2">
                  Whitepaper
                </span>
              </div>
              <div className="header-item-link3">
                <span className="header-text3 dawgz.aiSemanticLink2">
                  Audit
                </span>
              </div>
            </div>
            <div className="header-link1">
              <div className="header-logo">
                <img
                  alt="logosvgfill1228"
                  src="/external/logosvgfill1228-3ry.svg"
                  className="header-logosvgfill"
                />
              </div>
            </div>
            <div className="header-link2">
              <img
                alt="tgsvg1229"
                src="/external/tgsvg1229-of9b.svg"
                className="header-tgsvg"
              />
            </div>
            <div className="header-link3">
              <img
                alt="xsvg1230"
                src="/external/xsvg1230-b0iu.svg"
                className="header-xsvg"
              />
            </div>
            <div className="header-link4">
              <img
                alt="instagramsvg1230"
                src="/external/instagramsvg1230-e7kj.svg"
                className="header-instagramsvg"
              />
            </div>
            <div className="header-link5">
              <img
                alt="linksvg1231"
                src="/external/linksvg1231-a1g.svg"
                className="header-linksvg"
              />
            </div>
            <div className="header-background-border-shadow">
              <span className="header-text4 dawgz.aiSemanticButton">
                Connect Wallet
              </span>
            </div>
            <div className="header-arrow1">
              <img
                alt="ensvgfill1232"
                src="/external/ensvgfill1232-dtqa.svg"
                className="header-ensvgfill"
              />
            </div>
            <span className="header-text5 dawgz.aiSemanticButton">EN</span>
            <div className="header-arrow2">
              <img
                alt="arrowdownsvgfill1233"
                src="/external/arrowdownsvgfill1233-c4ef.svg"
                className="header-arrowdownsvgfill"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-container1 {
            width: 100%;
            height: 98px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-header {
            width: 1521px;
            height: auto;
            display: flex;
            padding: 23px 0 24.600000381469727px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 0 0 1.600000023841858px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .header-container2 {
            width: 1366px;
            height: 51.20000076293945px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .header-list {
            gap: 40px;
            top: 13.600000381469727px;
            left: 207px;
            width: 319px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .header-item-link1 {
            display: flex;
            align-items: center;
          }
          .header-text1 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .header-item-link2 {
            display: flex;
            align-items: center;
          }
          .header-text2 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .header-item-link3 {
            display: flex;
            align-items: center;
          }
          .header-text3 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .header-link1 {
            top: 10.729999542236328px;
            left: 23px;
            width: 136px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .header-logo {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-logosvgfill {
            width: 136px;
            height: 30px;
          }
          .header-link2 {
            top: 1.600000023841858px;
            left: 790.260009765625px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .header-tgsvg {
            width: 24px;
            height: 24px;
          }
          .header-link3 {
            top: 1.600000023841858px;
            left: 846.260009765625px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .header-xsvg {
            width: 24px;
            height: 24px;
          }
          .header-link4 {
            top: 1.600000023841858px;
            left: 902.260009765625px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .header-instagramsvg {
            width: 24px;
            height: 24px;
          }
          .header-link5 {
            top: 1.600000023841858px;
            left: 958.260009765625px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
            position: absolute;
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .header-linksvg {
            width: 24px;
            height: 24px;
          }
          .header-background-border-shadow {
            top: 0px;
            left: 1028.260009765625px;
            width: 191px;
            display: flex;
            padding: 13.600000381469727px 25.600000381469727px;
            position: absolute;
            background: linear-gradient(
              133deg,
              rgba(255, 214, 0, 1) 24%,
              rgba(255, 124, 2, 1) 100%
            );
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
            align-items: center;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
          }
          .header-text4 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .header-arrow1 {
            top: 1.600000023841858px;
            left: 1240.6300048828125px;
            width: 48px;
            height: 48px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 24px;
            flex-direction: column;
          }
          .header-ensvgfill {
            width: 48px;
            height: 48px;
          }
          .header-text5 {
            top: 13.199999809265137px;
            left: 1298.6300048828125px;
            color: var(--dl-color-dawgz.ai-black);
            width: 25px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .header-arrow2 {
            top: 15.600000381469727px;
            left: 1323px;
            width: 20px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-arrowdownsvgfill {
            width: 20px;
            height: 20px;
          }

          @media (max-width: 1600px) {
            .header-background-border-shadow {
              width: 200px;
            }
            .headerroot-class-name {
              background-color: #eee3d2;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
