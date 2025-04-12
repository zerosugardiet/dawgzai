import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Join = (props) => {
  return (
    <>
      <div className={`join-container1 ${props.rootClassName} `}>
        <div className="join-background-border">
          <div className="join-container2">
            <div className="join-container3">
              <div className="join-transformed5webp"></div>
            </div>
            <span className="join-text10">
              <span>Join Our</span>
              <br></br>
              <span>Community</span>
            </span>
            <span className="join-text14">
              <span>Participate in our events, share your</span>
              <br></br>
              <span>DAWGZ AI-themed content, and win</span>
              <br></br>
              <span>prizes! Let&apos;s grow our community</span>
              <br></br>
              <span>together and make DAWGZ AI a</span>
              <br></br>
              <span>household name in the crypto world.</span>
            </span>
            <div className="join-link1">
              <img alt="tgsvg1192" src="/tg.svg" className="join-tgsvg" />
            </div>
            <div className="join-link2">
              <img alt="xsvg1192" src="/x.svg" className="join-xsvg" />
            </div>
            <div className="join-link3">
              <img
                alt="instagramsvg1193"
                src="/instagram.svg"
                className="join-instagramsvg"
              />
            </div>
            <div className="join-link4">
              <img alt="linksvg1193" src="/link.svg" className="join-linksvg" />
            </div>
            <button className="join-button">
              <span className="join-text24">Buy $DAGZ</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .join-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .join-background-border {
            width: 1521px;
            height: auto;
            display: flex;
            padding: 29px 0 4px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 4px 0;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .join-container2 {
            width: 1162px;
            height: 433px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .join-container3 {
            top: 0px;
            left: 0px;
            width: 600px;
            height: 433px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .join-transformed5webp {
            top: 0px;
            left: 0px;
            width: 600px;
            height: 600.3800048828125px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .join-text10 {
            top: 17.600000381469727px;
            left: 657px;
            width: 226px;
            height: auto;
            position: absolute;
            box-shadow: -2.595860004425049px -1.5038299560546875px 0px 0px rgba(0, 0, 0, 1);
            text-align: left;
            line-height: 48px;
          }
          .join-text14 {
            top: 124.66000366210938px;
            left: 657px;
            color: var(--dl-color-dawgz.ai-white);
            width: 450px;
            height: auto;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            text-align: left;
            line-height: 20px;
          }
          .join-link1 {
            top: 240.66000366210938px;
            left: 657px;
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
          .join-tgsvg {
            width: 24px;
            height: 24px;
          }
          .join-link2 {
            top: 240.66000366210938px;
            left: 713px;
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
          .join-xsvg {
            width: 24px;
            height: 24px;
          }
          .join-link3 {
            top: 240.66000366210938px;
            left: 769px;
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
          .join-instagramsvg {
            width: 24px;
            height: 24px;
          }
          .join-link4 {
            top: 240.66000366210938px;
            left: 825px;
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
          .join-linksvg {
            width: 24px;
            height: 24px;
          }
          .join-button {
            top: 325.989990234375px;
            left: 657px;
            width: 216px;
            display: flex;
            padding: 13.600000381469727px 25.600000381469727px;
            position: absolute;
            background: linear-gradient(
              132deg,
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
          .join-text24 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }

          @media (max-width: 1600px) {
            .join-container1 {
              height: 482px;
            }
            .join-background-border {
              width: 1508px;
              background-image: url('/background-4-1600w.png');
            }
            .join-transformed5webp {
              background-image: url('/transformed-5-1500h.png');
            }
            .join-text10 {
              color: #ff8f01;
              font-size: 32px;
              box-shadow: rgb(0, 0, 0) -2.59586px -1.50383px 0px 0px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              letter-spacing: 1.28px;
            }
            .join-text14 {
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              letter-spacing: 0.8px;
            }
            .join-link1 {
              background-color: rgba(255, 255, 255, 0.99);
            }
            .join-link2 {
              background-color: #ffffff;
            }
            .join-link3 {
              background-color: rgba(255, 255, 255, 0.99);
            }
            .join-link4 {
              background-color: rgba(255, 255, 255, 0.97);
            }
            .join-text24 {
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

Join.defaultProps = {
  rootClassName: '',
}

Join.propTypes = {
  rootClassName: PropTypes.string,
}

export default Join
