import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Info2 = (props) => {
  return (
    <>
      <div className={`info-2-container1 ${props.rootClassName} `}>
        <div className="info-2-background-border">
          <div className="info-2-container2">
            <span className="info-2-text10">Why DAWGZ AI?</span>
            <div className="info-2-background-border-shadow1">
              <div className="info-2-meme-coin-roi">
                <img
                  alt="funsvgfill1157"
                  src="/fun.svg"
                  className="info-2-funsvgfill"
                />
              </div>
              <span className="info-2-text11 dawgz.aiArchitectsDaughterRegular9">
                Meme Coin ROI
              </span>
              <span className="info-2-text12 dawgz.aiMontserratMedium2">
                <span>Are you afraid of making too</span>
                <br></br>
                <span>much profit investing in a sexy</span>
                <br></br>
                <span>new meme currency that looks</span>
                <br></br>
                <span>and sounds too stupid to your</span>
                <br></br>
                <span>friends? Or are you afraid of</span>
                <br></br>
                <span>missing the next moonshot</span>
                <br></br>
                <span>meme coin?</span>
              </span>
            </div>
            <div className="info-2-background-border-shadow2">
              <div className="info-2-advanced-technology">
                <img
                  alt="diamondsvgfill1160"
                  src="/diamond.svg"
                  className="info-2-diamondsvgfill"
                />
              </div>
              <span className="info-2-text26 dawgz.aiArchitectsDaughterRegular9">
                <span>Advanced</span>
                <br></br>
                <span>Technology:</span>
              </span>
              <span className="info-2-text30 dawgz.aiMontserratMedium2">
                <span>Our high-frequency trading</span>
                <br></br>
                <span>algorithms powered by artificial</span>
                <br></br>
                <span>intelligence are designed to</span>
                <br></br>
                <span>ensure consistent returns with</span>
                <br></br>
                <span>minimum effort from holders as</span>
                <br></br>
                <span>they run 24/7, 365.</span>
              </span>
            </div>
            <div className="info-2-background-border-shadow3">
              <div className="info-2-accessible-investment">
                <img
                  alt="peoplesvgfill1161"
                  src="/people.svg"
                  className="info-2-peoplesvgfill"
                />
              </div>
              <span className="info-2-text42 dawgz.aiArchitectsDaughterRegular9">
                <span>Accessible</span>
                <br></br>
                <span>Investment</span>
              </span>
              <span className="info-2-text46 dawgz.aiMontserratMedium2">
                <span>DAWGZ AI was created so people</span>
                <br></br>
                <span>could have fun while investing in</span>
                <br></br>
                <span>cryptocurrencies without</span>
                <br></br>
                <span>reducing potential profitability.</span>
                <br></br>
                <span>Win Win!</span>
              </span>
            </div>
            <div className="info-2-background-border-shadow4">
              <div className="info-2-community-hype">
                <img
                  alt="upsvgfill1163"
                  src="/up.svg"
                  className="info-2-upsvgfill"
                />
              </div>
              <span className="info-2-text56 dawgz.aiArchitectsDaughterRegular9">
                Community &amp; Hype
              </span>
              <span className="info-2-text57 dawgz.aiMontserratMedium2">
                <span>Some other meme coins out there</span>
                <br></br>
                <span>have been hyping that the dog</span>
                <br></br>
                <span>days are over. But doge-themed</span>
                <br></br>
                <span>meme coins have delivered class-</span>
                <br></br>
                <span>leading ROIs to altcoin gem</span>
                <br></br>
                <span>hunters.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .info-2-container1 {
            width: 100%;
            height: 560px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-2-background-border {
            width: 1521px;
            height: auto;
            display: flex;
            padding: 64px 0 69px;
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
          .info-2-container2 {
            width: 1162px;
            height: 417.20001220703125px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .info-2-text10 {
            left: 426.5px;
            color: var(--dl-color-dawgz.ai-selectiveyellow);
            width: 309px;
            height: auto;
            position: absolute;
            box-shadow: -2.595860004425049px -1.5038299560546875px 0px 0px rgba(0, 0, 0, 1);
            text-align: center;
            transition: 0.3s;
            line-height: 48px;
          }

          .info-2-background-border-shadow1 {
            gap: 35px;
            top: 96px;
            left: 0px;
            width: 272px;
            height: 321.20001220703125px;
            display: flex;
            padding: 17.600000381469727px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .info-2-meme-coin-roi {
            height: 200px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-2-funsvgfill {
            width: 56px;
            height: 55px;
          }
          .info-2-text11 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info-2-text12 {
            color: var(--dl-color-dawgz.ai-black60);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-2-background-border-shadow2 {
            gap: 34px;
            top: 96px;
            left: 296.5px;
            width: 272px;
            height: 321.20001220703125px;
            display: flex;
            padding: 17.600000381469727px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .info-2-advanced-technology {
            height: 100px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-2-diamondsvgfill {
            width: 56px;
            height: 56px;
          }
          .info-2-text26 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info-2-text30 {
            color: var(--dl-color-dawgz.ai-black60);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-2-background-border-shadow3 {
            gap: 34px;
            top: 96px;
            left: 593px;
            width: 272px;
            height: 321.20001220703125px;
            display: flex;
            padding: 17.600000381469727px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .info-2-accessible-investment {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-2-peoplesvgfill {
            width: 56px;
            height: 56px;
          }
          .info-2-text42 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info-2-text46 {
            color: var(--dl-color-dawgz.ai-black60);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .info-2-background-border-shadow4 {
            gap: 34px;
            top: 96px;
            left: 889.5px;
            width: 272px;
            height: 321.20001220703125px;
            display: flex;
            padding: 17.600000381469727px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-dawgz.ai-athsspecial);
          }
          .info-2-community-hype {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .info-2-upsvgfill {
            width: 56px;
            height: 56px;
          }
          .info-2-text56 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .info-2-text57 {
            color: var(--dl-color-dawgz.ai-black60);
            height: auto;
            text-align: left;
            line-height: 20px;
          }

          @media (max-width: 1600px) {
            .info-2-background-border {
              width: 100%;
              background-size: cover;
              background-image: url('/background-2-1600w.png');
            }
            .info-2-text10 {
              color: rgba(255, 126, 3, 0.97);
              font-size: 32px;
              box-shadow: rgb(0, 0, 0) -2.59586px -1.50383px 0px 0px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 0px;
              letter-spacing: 1.28px;
            }
            .info-2-background-border-shadow1 {
              background-color: rgba(238, 227, 210, 0.99);
            }
            .info-2-meme-coin-roi {
              height: 200px;
            }
            .info-2-funsvgfill {
              height: 45px;
            }
            .info-2-background-border-shadow2 {
              background-color: #eee3d2;
            }
            .info-2-advanced-technology {
              width: auto;
              height: auto;
              display: flex;
              flex-direction: column;
            }
            .info-2-diamondsvgfill {
              width: 42px;
              height: 38px;
            }
            .info-2-background-border-shadow3 {
              background-color: rgba(238, 227, 210, 0.99);
            }
            .info-2-background-border-shadow4 {
              background-color: rgba(238, 227, 210, 0.99);
            }
          }
        `}
      </style>
    </>
  )
}

Info2.defaultProps = {
  rootClassName: '',
}

Info2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Info2
