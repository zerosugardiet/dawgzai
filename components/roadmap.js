import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Roadmap = (props) => {
  return (
    <>
      <div className={`roadmap-container1 ${props.rootClassName} `}>
        <div className="roadmap-background1">
          <div className="roadmap-container2">
            <div className="roadmap-background-border1">
              <div className="roadmap-background2"></div>
              <span className="roadmap-text1 dawgz.aiArchitectsDaughterRegular9">
                Growing the Pack
              </span>
              <span className="roadmap-text2 dawgz.aiArchitectsDaughterRegular5">
                (Building the Community)
              </span>
              <div className="roadmap-background-border2">
                <img
                  alt="arrowaccordionsvg1184"
                  src="/arrow-accordion.svg"
                  className="roadmap-arrowaccordionsvg1"
                />
              </div>
            </div>
            <div className="roadmap-background-border3">
              <div className="roadmap-background3"></div>
              <span className="roadmap-text3 dawgz.aiArchitectsDaughterRegular9">
                The Big Dog Stage
              </span>
              <span className="roadmap-text4 dawgz.aiArchitectsDaughterRegular5">
                (Expansion and Innovation)
              </span>
              <div className="roadmap-background-border4">
                <img
                  alt="arrowaccordionsvg1185"
                  src="/arrow-accordion.svg"
                  className="roadmap-arrowaccordionsvg2"
                />
              </div>
            </div>
            <div className="roadmap-background-border5">
              <div className="roadmap-background4"></div>
              <span className="roadmap-text5 dawgz.aiArchitectsDaughterRegular9">
                Alpha Dog Status
              </span>
              <span className="roadmap-text6 dawgz.aiArchitectsDaughterRegular5">
                (Long-term Vision)
              </span>
              <div className="roadmap-background-border6">
                <img
                  alt="arrowaccordionsvg1186"
                  src="/arrow-accordion.svg"
                  className="roadmap-arrowaccordionsvg3"
                />
              </div>
            </div>
            <div className="roadmap-transformed10webp"></div>
            <div className="roadmap-container3">
              <div className="roadmap-container4">
                <div className="roadmap-background-border7">
                  <div className="roadmap-background5"></div>
                  <span className="roadmap-text7 dawgz.aiArchitectsDaughterRegular9">
                    Puppyhood
                  </span>
                  <span className="roadmap-text8 dawgz.aiArchitectsDaughterRegular5">
                    (Conception and Launch)
                  </span>
                  <div className="roadmap-background-border8">
                    <img
                      alt="arrowaccordionsvg1183"
                      src="/arrow-accordion.svg"
                      className="roadmap-arrowaccordionsvg4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="roadmap-text9">OUR ROADMAP</span>
        </div>
      </div>
      <style jsx>
        {`
          .roadmap-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .roadmap-background1 {
            gap: 42.65999984741211px;
            width: 1521px;
            height: auto;
            display: flex;
            padding: 60px 0 132px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-dawgz.ai-pampas);
          }
          .roadmap-container2 {
            gap: 12px;
            width: 1162px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .roadmap-background-border1 {
            width: 1162px;
            height: 101.19999694824219px;
            display: flex;
            z-index: 2;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .roadmap-background2 {
            top: 26.600000381469727px;
            left: 15.600000381469727px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 2.200000047683716px 0 2.799999952316284px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 80px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-pampas);
          }
          .roadmap-text1 {
            top: 22.600000381469727px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black);
            width: 202px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 32px;
          }
          .roadmap-text2 {
            top: 54.599998474121094px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black40);
            width: 212px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .roadmap-background-border2 {
            top: 26.600000381469727px;
            left: 569.4000244140625px;
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
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .roadmap-arrowaccordionsvg1 {
            width: 12px;
            height: 6px;
          }
          .roadmap-background-border3 {
            width: 1162px;
            height: 101.19999694824219px;
            display: flex;
            z-index: 3;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .roadmap-background3 {
            top: 26.600000381469727px;
            left: 15.600000381469727px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 2.200000047683716px 0 2.799999952316284px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 80px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-pampas);
          }
          .roadmap-text3 {
            top: 22.600000381469727px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black);
            width: 206px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 32px;
          }
          .roadmap-text4 {
            top: 54.599998474121094px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black40);
            width: 224px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .roadmap-background-border4 {
            top: 26.600000381469727px;
            left: 569.4000244140625px;
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
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .roadmap-arrowaccordionsvg2 {
            width: 12px;
            height: 6px;
          }
          .roadmap-background-border5 {
            width: 1162px;
            height: 101.19999694824219px;
            display: flex;
            z-index: 4;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .roadmap-background4 {
            top: 26.600000381469727px;
            left: 15.600000381469727px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 2.200000047683716px 0 2.799999952316284px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 80px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-pampas);
          }
          .roadmap-text5 {
            top: 22.600000381469727px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black);
            width: 189px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 32px;
          }
          .roadmap-text6 {
            top: 54.599998474121094px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black40);
            width: 161px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .roadmap-background-border6 {
            top: 26.600000381469727px;
            left: 569.4000244140625px;
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
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .roadmap-arrowaccordionsvg3 {
            width: 12px;
            height: 6px;
          }
          .roadmap-transformed10webp {
            width: 671px;
            height: 671px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .roadmap-container3 {
            flex: 0 0 auto;
            width: auto;
            height: 671px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .roadmap-container4 {
            flex: 0 0 auto;
            width: auto;
            height: 671px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .roadmap-background-border7 {
            width: 1162px;
            height: 101.19999694824219px;
            display: flex;
            z-index: 1;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .roadmap-background5 {
            top: 26.600000381469727px;
            left: 15.600000381469727px;
            width: 48px;
            height: 48px;
            display: flex;
            padding: 2.200000047683716px 0 2.799999952316284px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 80px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-pampas);
          }
          .roadmap-text7 {
            top: 22.600000381469727px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black);
            width: 119px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 32px;
          }
          .roadmap-text8 {
            top: 54.599998474121094px;
            left: 87.5999984741211px;
            color: var(--dl-color-dawgz.ai-black40);
            width: 220px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 24px;
          }
          .roadmap-background-border8 {
            top: 26.600000381469727px;
            left: 569.4000244140625px;
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
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
          }
          .roadmap-arrowaccordionsvg4 {
            width: 12px;
            height: 6px;
          }
          .roadmap-text9 {
            color: var(--dl-color-dawgz.ai-selectiveyellow);
            height: auto;
            box-shadow: -2.595860004425049px -1.5038299560546875px 0px 0px rgba(0, 0, 0, 1);
            text-align: center;
            line-height: 48px;
          }

          @media (max-width: 1600px) {
            .roadmap-container1 {
              height: 872px;
            }
            .roadmap-background1 {
              gap: 0;
              height: 898px;
              overflow: hidden;
              position: relative;
              margin-top: 0px;
              align-items: stretch;
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: space-between;
              background-color: #f5f3f1;
            }
            .roadmap-container2 {
              left: 0px;
              width: 1508px;
              bottom: 0px;
              height: 692px;
              position: absolute;
              padding-left: 0px;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .roadmap-background-border1 {
              width: 864px;
              height: 125px;
              z-index: 1000;
              margin-left: 45px;
              border-width: 3px;
              margin-right: 0px;
              background-color: #ffffff;
            }
            .roadmap-background-border2 {
              border-width: 3px;
            }
            .roadmap-arrowaccordionsvg1 {
              width: 17px;
              height: 9px;
            }
            .roadmap-background-border3 {
              width: 863px;
              height: 120px;
              z-index: 1000;
              margin-left: 45px;
              border-width: 3px;
              margin-right: 0px;
              background-color: rgba(255, 255, 255, 0.98);
            }
            .roadmap-background-border4 {
              border-width: 3px;
            }
            .roadmap-arrowaccordionsvg2 {
              width: 17px;
              height: 9px;
            }
            .roadmap-background-border5 {
              width: 862px;
              z-index: 1000;
              margin-left: 45px;
              border-width: 3px;
              background-color: #ffffff;
            }
            .roadmap-background-border6 {
              border-width: 3px;
            }
            .roadmap-arrowaccordionsvg3 {
              width: 17px;
              height: 9px;
            }
            .roadmap-transformed10webp {
              top: -66px;
              flex: 1;
              right: 1px;
              width: 665px;
              display: block;
              z-index: 0;
              overflow: auto;
              position: absolute;
              align-self: flex-end;
              background-image: url('/dawg-700h.png');
            }
            .roadmap-container3 {
              height: 140px;
              position: relative;
            }
            .roadmap-container4 {
              height: 135px;
              position: relative;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .roadmap-background-border7 {
              top: 1px;
              left: 44px;
              width: 862px;
              height: 129px;
              z-index: 1000;
              position: absolute;
              border-width: 3px;
              background-color: #ffffff;
            }
            .roadmap-background-border8 {
              border-width: 3px;
            }
            .roadmap-arrowaccordionsvg4 {
              width: 17px;
              height: 9px;
            }
            .roadmap-text9 {
              color: rgba(255, 126, 3, 0.99);
              display: block;
              font-size: 65px;
              box-shadow: inherit;
              font-style: normal;
              margin-top: 50px;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 0px;
              letter-spacing: 1.28px;
            }
          }
        `}
      </style>
    </>
  )
}

Roadmap.defaultProps = {
  rootClassName: '',
}

Roadmap.propTypes = {
  rootClassName: PropTypes.string,
}

export default Roadmap
