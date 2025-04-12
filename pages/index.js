import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import PR from '../components/pr'
import INFO from '../components/info'
import Info2 from '../components/info-2'
import Info3 from '../components/info3'
import LiquidityPool from '../components/liquidity-pool'
import Roadmap from '../components/roadmap'
import Profit from '../components/profit'
import Join from '../components/join'
import Faq from '../components/faq'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Far Off Periodic Ibis</title>
          <meta property="og:title" content="Far Off Periodic Ibis" />
        </Head>
        <Header rootClassName="headerroot-class-name"></Header>
        <div className="home-background">
          <div className="home-container2">
            <div className="home-background-border1">
              <span className="home-text10 dawgz.aiMontserratBold4">
                FETCH PROFITS
              </span>
            </div>
            <div className="home-heading1">
              <span className="home-text11">
                <span>Dawgz AI: Enter the</span>
                <br></br>
                <span>Army for Early</span>
                <br></br>
                <span>Access to AI-</span>
                <br></br>
                <span>Powered Rewards</span>
              </span>
            </div>
            <div className="home-heading2">
              <span className="home-text19">
                <span>Buy and stake your $DAGZ now to secure a top spot</span>
                <br></br>
                <span>
                  in the Dawgz revolution. Early stakers gain exclusive
                </span>
                <br></br>
                <span>
                  access to AI-powered profits—be a part of the journey
                </span>
                <br></br>
                <span>from the start!</span>
              </span>
            </div>
            <div className="home-transformed"></div>
            <div className="home-form">
              <span className="home-text27 dawgz.aiArchitectsDaughterRegular6">
                Next price increase in
              </span>
              <div className="home-paragraph-background-border1">
                <span className="home-text28">57</span>
              </div>
              <span className="home-text29 dawgz.aiArchitectsDaughterRegular6">
                USDT raised
              </span>
              <span className="home-text30 dawgz.aiArchitectsDaughterRegular3">
                Current price
              </span>
              <span className="home-text31">$0.004</span>
              <span className="home-text32 dawgz.aiArchitectsDaughterRegular3">
                Next price
              </span>
              <span className="home-text33">$0.00438</span>
              <div className="home-paragraph-background1">
                <span className="home-text34 dawgz.aiArchitectsDaughterRegular4">
                  <span>YOUR PURCHASED</span>
                  <br></br>
                  <span>TOKENS</span>
                </span>
              </div>
              <div className="home-paragraph-background2">
                <span className="home-text38 dawgz.aiArchitectsDaughterRegular4">
                  <span>YOUR STAKEABLE</span>
                  <br></br>
                  <span>TOKENS</span>
                </span>
              </div>
              <div className="home-background-border2">
                <img
                  alt="linesvgfill1211"
                  src="/external/linesvgfill1211-vttl.svg"
                  className="home-linesvgfill"
                />
                <img
                  alt="GradientBorder1216"
                  src="/external/gradientborder1216-ixoe-200h.png"
                  className="home-gradient-border"
                />
                <span className="home-text42">$3,264,723.283 / $3,610,000</span>
              </div>
              <div className="home-component21">
                <div className="home-arrow1">
                  <img
                    alt="ethsvgfillI121"
                    src="/external/ethsvgfilli121-girr.svg"
                    className="home-ethsvgfill1"
                  />
                </div>
                <span className="home-text43">ETH</span>
              </div>
              <div className="home-component22">
                <div className="home-arrow2">
                  <img
                    alt="bnbsvgfillI121"
                    src="/external/bnbsvgfilli121-vfja.svg"
                    className="home-bnbsvgfill"
                  />
                </div>
                <span className="home-text44 dawgz.aiArchitectsDaughterRegular3">
                  BNB
                </span>
              </div>
              <div className="home-component23">
                <div className="home-arrow3">
                  <img
                    alt="solsvgfillI121"
                    src="/external/solsvgfilli121-77i.svg"
                    className="home-solsvgfill"
                  />
                </div>
                <span className="home-text45 dawgz.aiArchitectsDaughterRegular3">
                  SOL
                </span>
              </div>
              <div className="home-component24">
                <div className="home-arrow4">
                  <img
                    alt="ethsvgfillI121"
                    src="/external/ethsvgfilli121-bglp.svg"
                    className="home-ethsvgfill2"
                  />
                </div>
                <span className="home-text46">ETH</span>
              </div>
              <div className="home-component25">
                <div className="home-arrow5">
                  <img
                    alt="usdtsvgfillI122"
                    src="/external/usdtsvgfilli122-tgt.svg"
                    className="home-usdtsvgfill"
                  />
                </div>
                <span className="home-text47 dawgz.aiArchitectsDaughterRegular3">
                  USDT
                </span>
              </div>
              <div className="home-component26">
                <div className="home-arrow6">
                  <img
                    alt="usdcsvgfillI122"
                    src="/external/usdcsvgfilli122-s74b.svg"
                    className="home-usdcsvgfill"
                  />
                </div>
                <span className="home-text48 dawgz.aiArchitectsDaughterRegular3">
                  USDC
                </span>
              </div>
              <span className="home-text49 dawgz.aiArchitectsDaughterRegular6">
                You pay
              </span>
              <div className="home-input1">
                <div className="home-container3"></div>
              </div>
              <span className="home-text50 dawgz.aiMontserratSemiBold">
                ETH
              </span>
              <div className="home-arrow7">
                <img
                  alt="ethsvgfill1223"
                  src="/external/ethsvgfill1223-trye.svg"
                  className="home-ethsvgfill3"
                />
              </div>
              <span className="home-text51 dawgz.aiArchitectsDaughterRegular6">
                You receive
              </span>
              <div className="home-input2">
                <div className="home-container4"></div>
              </div>
              <span className="home-text52 dawgz.aiMontserratSemiBold">
                $DAGZ
              </span>
              <div className="home-arrow8"></div>
              <button className="home-button">
                <span className="home-text53">Connect Wallet</span>
              </button>
              <div className="home-paragraph-background-border2">
                <span className="home-text54">0</span>
              </div>
              <div className="home-paragraph-background-border3">
                <span className="home-text55">1</span>
              </div>
              <div className="home-paragraph-background-border4">
                <span className="home-text56">0</span>
              </div>
            </div>
            <div className="home-link">
              <span className="home-text57 dawgz.aiSemanticLink">
                Audited by
              </span>
              <div className="home-solidproofwebp"></div>
            </div>
          </div>
        </div>
        <PR rootClassName="p-rroot-class-name"></PR>
        <INFO rootClassName="inf-oroot-class-name"></INFO>
        <Info2 rootClassName="info2root-class-name"></Info2>
        <Info3 rootClassName="info3root-class-name"></Info3>
        <LiquidityPool rootClassName="liquidity-poolroot-class-name"></LiquidityPool>
        <Roadmap rootClassName="roadmaproot-class-name"></Roadmap>
        <Profit rootClassName="profitroot-class-name"></Profit>
        <Join rootClassName="joinroot-class-name"></Join>
        <Faq rootClassName="faqroot-class-name"></Faq>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-background {
            width: 1521px;
            height: 896px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/external/tq_bg-8nhvqvi-ny0i-900h.png');
          }
          .home-container2 {
            width: 1250px;
            height: 850px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-background-border1 {
            top: 62.400001525878906px;
            left: 0px;
            width: 123px;
            display: flex;
            padding: 3.5999999046325684px 11.600000381469727px;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text10 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .home-heading1 {
            top: 100.9000015258789px;
            left: 0px;
            width: 697px;
            display: flex;
            padding: 0 56.45000076293945px 0.699999988079071px 0;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            color: var(--dl-color-dawgz.ai-selectiveyellow);
            height: auto;
            text-align: left;
            line-height: 55px;
          }
          .home-heading2 {
            top: 337.6000061035156px;
            left: 0px;
            width: 573px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text19 {
            height: auto;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            text-align: left;
            line-height: 20px;
          }
          .home-transformed {
            top: 423.2799987792969px;
            left: 137px;
            width: 522px;
            height: 431.7300109863281px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_r-3cipx1lb-ccs9-1500h.png');
          }
          .home-form {
            top: 63px;
            left: 699px;
            width: 551px;
            height: 673.9199829101562px;
            display: flex;
            position: absolute;
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
          .home-text27 {
            top: 25.600000381469727px;
            left: 172.91000366210938px;
            color: var(--dl-color-dawgz.ai-black);
            width: 206px;
            height: auto;
            position: absolute;
            text-align: center;
            line-height: 20px;
          }
          .home-paragraph-background-border1 {
            gap: 4.690000057220459px;
            top: 52.599998474121094px;
            left: 409.45001220703125px;
            width: 116px;
            display: flex;
            padding: 9.600000381469727px 37.06999969482422px 9.600000381469727px
              37.75px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text28 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .home-text29 {
            top: 125.80000305175781px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black);
            width: 113px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .home-text30 {
            top: 203px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black);
            width: 106px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .home-text31 {
            top: 204.60000610351562px;
            left: 139.19000244140625px;
            color: var(--dl-color-dawgz.ai-black);
            width: 58px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .home-text32 {
            top: 203px;
            left: 361.8399963378906px;
            color: var(--dl-color-dawgz.ai-black);
            width: 78px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .home-text33 {
            top: 204.60000610351562px;
            left: 447.8800048828125px;
            color: var(--dl-color-dawgz.ai-flushorange);
            width: 78px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .home-paragraph-background1 {
            gap: 72.61000061035156px;
            top: 241.39999389648438px;
            left: 25.600000381469727px;
            width: 244px;
            display: flex;
            padding: 14px 12px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-lemonchiffon);
          }
          .home-text34 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .home-paragraph-background2 {
            gap: 72.76000213623047px;
            top: 241.39999389648438px;
            left: 281.5px;
            width: 244px;
            display: flex;
            padding: 14px 12px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-lemonchiffon);
          }
          .home-text38 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .home-background-border2 {
            top: 157.8000030517578px;
            left: 25.600000381469727px;
            width: 500px;
            height: 33.20000076293945px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 80px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-linesvgfill {
            top: 0px;
            left: 0px;
            width: 500px;
            height: 33px;
            position: absolute;
          }
          .home-gradient-border {
            top: 1.600000023841858px;
            left: 1.600000023841858px;
            width: 449px;
            height: 30px;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.23999999463558197);
            border-style: solid;
            border-width: 1px;
            border-radius: 80px;
          }
          .home-text42 {
            top: 3.5999999046325684px;
            left: 109.79000091552734px;
            color: var(--dl-color-dawgz.ai-black);
            width: 281px;
            height: auto;
            position: absolute;
            text-align: center;
            line-height: 24px;
          }
          .home-component21 {
            gap: 12px;
            top: 330.7300109863281px;
            left: 25.600000381469727px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(0, 0, 0, 1);
          }
          .home-arrow1 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-ethsvgfill1 {
            width: 24px;
            height: 24px;
          }
          .home-text43 {
            color: var(--dl-color-dawgz.ai-white);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-component22 {
            gap: 12px;
            top: 330.7300109863281px;
            left: 196.1999969482422px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(238, 227, 210, 1);
          }
          .home-arrow2 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-bnbsvgfill {
            width: 24px;
            height: 24px;
          }
          .home-text44 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-component23 {
            gap: 12px;
            top: 330.7300109863281px;
            left: 366.79998779296875px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(238, 227, 210, 1);
          }
          .home-arrow3 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-solsvgfill {
            width: 24px;
            height: 24px;
          }
          .home-text45 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-component24 {
            gap: 12px;
            top: 413.9200134277344px;
            left: 25.600000381469727px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(0, 0, 0, 1);
          }
          .home-arrow4 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-ethsvgfill2 {
            width: 24px;
            height: 24px;
          }
          .home-text46 {
            color: var(--dl-color-dawgz.ai-white);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-component25 {
            gap: 12px;
            top: 413.9200134277344px;
            left: 196.1999969482422px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(238, 227, 210, 1);
          }
          .home-arrow5 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-usdtsvgfill {
            width: 24px;
            height: 24px;
          }
          .home-text47 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-component26 {
            gap: 12px;
            top: 413.9200134277344px;
            left: 366.79998779296875px;
            width: 159px;
            height: 67.19999694824219px;
            display: flex;
            padding: 21.600000381469727px 1.600000023841858px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: rgba(238, 227, 210, 1);
          }
          .home-arrow6 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-usdcsvgfill {
            width: 24px;
            height: 24px;
          }
          .home-text48 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-text49 {
            top: 497.1300048828125px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 73px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .home-input1 {
            top: 525.1300048828125px;
            left: 25.600000381469727px;
            width: 244px;
            height: 56px;
            display: flex;
            padding: 19.600000381469727px 87.5999984741211px
              19.600000381469727px 17.600000381469727px;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-container3 {
            width: 138.6999969482422px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text50 {
            top: 543.1300048828125px;
            left: 192.35000610351562px;
            color: var(--dl-color-dawgz.ai-black);
            width: 30px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .home-arrow7 {
            top: 541.1300048828125px;
            left: 229.5px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-ethsvgfill3 {
            width: 24px;
            height: 24px;
          }
          .home-text51 {
            top: 497.1300048828125px;
            left: 281.5px;
            color: var(--dl-color-dawgz.ai-black60);
            width: 110px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .home-input2 {
            top: 525.1300048828125px;
            left: 281.5px;
            width: 244px;
            height: 56px;
            display: flex;
            padding: 19.600000381469727px 121.5999984741211px
              19.600000381469727px 17.600000381469727px;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-container4 {
            width: 104.69999694824219px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text52 {
            top: 543.1300048828125px;
            left: 426.7300109863281px;
            color: var(--dl-color-dawgz.ai-black);
            width: 51px;
            height: auto;
            position: absolute;
            text-align: left;
            line-height: 20px;
          }
          .home-arrow8 {
            top: 541.1300048828125px;
            left: 485.3999938964844px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_1vpkindokr-v7af-200h.png');
          }
          .home-button {
            top: 597.1300048828125px;
            left: 25.600000381469727px;
            width: 500px;
            display: flex;
            padding: 13.600000381469727px 25.600000381469727px;
            position: absolute;
            background: linear-gradient(
              127deg,
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
          .home-text53 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .home-paragraph-background-border2 {
            gap: 4.690000057220459px;
            top: 52.599998474121094px;
            left: 409.45001220703125px;
            width: 116px;
            display: flex;
            padding: 9.600000381469727px 37.06999969482422px 9.600000381469727px
              37.75px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text54 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .home-paragraph-background-border3 {
            gap: 4.690000057220459px;
            top: 52.599998474121094px;
            left: 409.45001220703125px;
            width: 116px;
            display: flex;
            padding: 9.600000381469727px 37.06999969482422px 9.600000381469727px
              37.75px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text55 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .home-paragraph-background-border4 {
            gap: 4.690000057220459px;
            top: 52.599998474121094px;
            left: 409.45001220703125px;
            width: 116px;
            display: flex;
            padding: 9.600000381469727px 37.06999969482422px 9.600000381469727px
              37.75px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text56 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: 32px;
          }
          .home-link {
            gap: 15px;
            top: 586.7999877929688px;
            left: 0px;
            width: 249px;
            height: 63.20000076293945px;
            display: flex;
            padding: 16.600000381469727px;
            position: absolute;
            box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: var(--dl-color-dawgz.ai-white);
          }
          .home-text57 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-solidproofwebp {
            width: 123.5999984741211px;
            height: 30px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-size: cover;
            background-image: url('/external/tq_s8gxp09zvz-ol-1500w.png');
          }
          @media (max-width: 1600px) {
            .home-background {
              height: 862px;
            }
            .home-container2 {
              padding-bottom: 39px;
            }
            .home-background-border1 {
              background-color: rgba(255, 255, 255, 0.97);
            }
            .home-text11 {
              color: rgba(255, 126, 3, 0.99);
              font-size: 50px;
              box-shadow: inherit;
              font-style: normal;
              font-family: Montserrat;
              font-weight: bold;
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 0px;
              border-radius: var(--dl-layout-radius-radius4);
              letter-spacing: 2px;
            }
            .home-text19 {
              color: #ffffff;
              box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
            }
            .home-transformed {
              left: -199px;
              bottom: -2px;
            }
            .home-form {
              background-color: #eee3d2;
            }
            .home-text27 {
              top: 18px;
              left: 174px;
            }
            .home-paragraph-background-border1 {
              background-color: #ffffff;
            }
            .home-text28 {
              font-size: 24px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: -0.96px;
            }
            .home-text31 {
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: normal;
              letter-spacing: 0em;
            }
            .home-text32 {
              width: 80px;
            }
            .home-text33 {
              color: rgb(255, 124, 2);
              font-weight: 700;
              line-height: normal;
            }
            .home-paragraph-background1 {
              height: 66px;
              background-color: #fff7cb;
            }
            .home-text34 {
              font-weight: bold;
            }
            .home-paragraph-background2 {
              background-color: #fff7cb;
            }
            .home-text38 {
              font-weight: bold;
            }
            .home-text42 {
              font-size: 20px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .home-text43 {
              color: #ffffff;
              font-size: 16px;
              font-style: normal;
              font-family: Architects Daughter;
              line-height: normal;
              letter-spacing: 0em;
            }
            .home-text46 {
              color: #ffffff;
              font-size: 16px;
              font-style: normal;
              font-family: Architects Daughter;
              line-height: normal;
              letter-spacing: 0em;
            }
            .home-input1 {
              background-color: #ffffff;
            }
            .home-input2 {
              background-color: rgba(255, 255, 255, 0.99);
            }
            .home-text53 {
              font-size: 20px;
              font-style: normal;
              font-family: Architects Daughter;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .home-paragraph-background-border2 {
              top: 49px;
              left: 27px;
              background-color: #ffffff;
            }
            .home-text54 {
              font-size: 24px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: -0.96px;
            }
            .home-paragraph-background-border3 {
              top: 51px;
              left: 157px;
              background-color: #ffffff;
            }
            .home-text55 {
              font-size: 24px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: -0.96px;
            }
            .home-paragraph-background-border4 {
              top: 51px;
              left: 286px;
              background-color: #ffffff;
            }
            .home-text56 {
              font-size: 24px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 32px;
              letter-spacing: -0.96px;
            }
            .home-link {
              top: 577px;
              left: 187px;
              width: 256px;
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
