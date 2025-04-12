import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Faq = (props) => {
  return (
    <>
      <div className={`faq-container1 ${props.rootClassName} `}>
        <div className="faq-background">
          <span className="faq-text10">Frequently Asked Questions</span>
          <div className="faq-container2">
            <div className="faq-background-border10">
              <span className="faq-text11">Q: What is DAWGZ AI exactly?</span>
              <div className="faq-background-border11">
                <img
                  alt="arrowaccordionsvg1195"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg1"
                />
              </div>
            </div>
            <div className="faq-background-border12">
              <span className="faq-text12 dawgz.aiMontserratBold1">
                Q: How can I participate in DAWGZ AI Presale?
              </span>
              <div className="faq-background-border13">
                <img
                  alt="arrowaccordionsvg1196"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg2"
                />
              </div>
            </div>
            <div className="faq-background-border14">
              <span className="faq-text13 dawgz.aiMontserratBold1">
                Q: How do I view my $DAGZ tokens after purchase?
              </span>
              <div className="faq-background-border15">
                <img
                  alt="arrowaccordionsvg1196"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg3"
                />
              </div>
            </div>
            <div className="faq-background-border16">
              <span className="faq-text14 dawgz.aiMontserratBold1">
                Q: Is DAWGZ AI considered a meme coin?
              </span>
              <div className="faq-background-border17">
                <img
                  alt="arrowaccordionsvg1197"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg4"
                />
              </div>
            </div>
            <div className="faq-background-border18">
              <span className="faq-text15 dawgz.aiMontserratBold1">
                Q: Is the $DAGZ presale smart contract safe?
              </span>
              <div className="faq-background-border19">
                <img
                  alt="arrowaccordionsvg1198"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg5"
                />
              </div>
            </div>
            <div className="faq-background-border20">
              <span className="faq-text16 dawgz.aiMontserratBold1">
                <span>
                  Q: Do I need a specific type of cryptocurrency wallet to
                  purchase
                </span>
                <br></br>
                <span>$DAGZ tokens?</span>
              </span>
              <div className="faq-background-border21">
                <img
                  alt="arrowaccordionsvg1199"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="faq-arrowaccordionsvg6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq-background {
            gap: 37.31999969482422px;
            width: 1521px;
            height: auto;
            display: flex;
            padding: 60px 0 67.01000213623047px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .faq-text10 {
            color: var(--dl-color-dawgz.ai-selectiveyellow);
            height: auto;
            box-shadow: -2.595860004425049px -1.5038299560546875px 0px 0px rgba(0, 0, 0, 1);
            text-align: center;
            line-height: 48px;
          }
          .faq-container2 {
            gap: 12px;
            width: 800px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq-background-border10 {
            gap: 410.9100036621094px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text11 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border11 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg1 {
            width: 12px;
            height: 6px;
          }
          .faq-background-border12 {
            gap: 248.32000732421875px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text12 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border13 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg2 {
            width: 12px;
            height: 6px;
          }
          .faq-background-border14 {
            gap: 197.6300048828125px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text13 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border15 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg3 {
            width: 12px;
            height: 6px;
          }
          .faq-background-border16 {
            gap: 296.8900146484375px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text14 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border17 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg4 {
            width: 12px;
            height: 6px;
          }
          .faq-background-border18 {
            gap: 266.57000732421875px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text15 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border19 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg5 {
            width: 12px;
            height: 6px;
          }
          .faq-background-border20 {
            gap: 65.88999938964844px;
            display: flex;
            padding: 13.600000381469727px 17.600000381469727px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .faq-text16 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .faq-background-border21 {
            width: 48px;
            height: 48px;
            display: flex;
            padding: 1.600000023841858px;
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
          .faq-arrowaccordionsvg6 {
            width: 12px;
            height: 6px;
          }

          @media (max-width: 1600px) {
            .faq-container1 {
              height: 741px;
            }
            .faq-background {
              height: 100%;
              background-image: url('/background-5-1600w.png');
            }
            .faq-text10 {
              color: #ff8803;
              font-size: 32px;
              box-shadow: rgb(0, 0, 0) -2.59586px -1.50383px 0px 0px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 48px;
              letter-spacing: 1.28px;
            }
            .faq-background-border10 {
              display: flex;
              position: relative;
              padding-left: 0px;
              background-color: rgba(255, 255, 255, 0.99);
            }
            .faq-text11 {
              font-size: 20px;
              align-self: center;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: -0.4px;
            }
            .faq-background-border11 {
              border-width: 3px;
            }
            .faq-background-border12 {
              padding-left: 0px;
              background-color: #ffffff;
            }
            .faq-text12 {
              display: flex;
              align-self: center;
              text-align: justify;
              font-weight: bold;
              flex-direction: row;
              justify-content: space-between;
            }
            .faq-background-border13 {
              border-width: 3\px;
            }
            .faq-background-border14 {
              padding-left: 0px;
              background-color: rgba(255, 255, 255, 0.99);
            }
            .faq-text13 {
              font-weight: bold;
            }
            .faq-background-border15 {
              border-width: 3px;
            }
            .faq-background-border16 {
              padding-left: 0px;
              background-color: #ffffff;
            }
            .faq-text14 {
              font-weight: bold;
            }
            .faq-background-border17 {
              border-width: 3px;
            }
            .faq-background-border18 {
              padding-left: 0px;
              background-color: #ffffff;
            }
            .faq-text15 {
              font-weight: bold;
            }
            .faq-background-border19 {
              border-width: 3px;
            }
            .faq-background-border20 {
              padding-left: 0px;
              background-color: #ffffff;
            }
            .faq-text16 {
              font-weight: bold;
            }
            .faq-background-border21 {
              border-width: 3px;
            }
          }
        `}
      </style>
    </>
  )
}

Faq.defaultProps = {
  rootClassName: '',
}

Faq.propTypes = {
  rootClassName: PropTypes.string,
}

export default Faq
