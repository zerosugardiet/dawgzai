import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { ethers } from 'ethers'
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
import { ConnectWallet } from '../components/ConnectWallet'

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint256 value) returns (bool)"
]

const USDT_ADDRESS = {
  1: process.env.NEXT_PUBLIC_ETH_USDT_ADDRESS, // Ethereum Mainnet USDT
  56: process.env.NEXT_PUBLIC_BSC_USDT_ADDRESS // BSC USDT
}

const USDC_ADDRESS = {
  1: process.env.NEXT_PUBLIC_ETH_USDC_ADDRESS, // Ethereum Mainnet USDC
  56: process.env.NEXT_PUBLIC_BSC_USDC_ADDRESS // BSC USDC
}

const Home = (props) => {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [address, setAddress] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [selectedChain, setSelectedChain] = useState(56) // Default to BSC
  const [selectedToken, setSelectedToken] = useState('NATIVE')
  const [ethAmount, setEthAmount] = useState('')
  const [dagzAmount, setDagzAmount] = useState('')
  const [maxBalance, setMaxBalance] = useState('0')
  const [nativeBalance, setNativeBalance] = useState('0')
  const [usdtBalance, setUsdtBalance] = useState('0')
  const [usdcBalance, setUsdcBalance] = useState('0')
  const [countdown, setCountdown] = useState(0)
  const [isEditing, setIsEditing] = useState(false) // Track if user is editing input

  // Initialize provider and handle wallet connection
  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          setProvider(provider)
          
          // Request account access
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          if (accounts.length > 0) {
            const signer = provider.getSigner()
            setSigner(signer)
            setAddress(accounts[0].toLowerCase())
            setIsConnected(true)
          }

          // Listen for account changes
          window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
              setAddress(accounts[0].toLowerCase())
            } else {
              setAddress(null)
              setIsConnected(false)
            }
          })

          // Listen for chain changes
          window.ethereum.on('chainChanged', (chainId) => {
            const newChainId = parseInt(chainId, 16)
            setSelectedChain(newChainId)
            window.location.reload()
          })
        } catch (error) {
          console.error('Error initializing provider:', error)
        }
      }
    }

    initProvider()
  }, [])

  // Fetch balances
  useEffect(() => {
    const fetchBalances = async () => {
      if (!provider || !address) return

      try {
        // Fetch native balance
        const nativeBalance = await provider.getBalance(address)
        setNativeBalance(ethers.utils.formatEther(nativeBalance))

        // Fetch USDT balance
        if (USDT_ADDRESS[selectedChain]) {
          const usdtContract = new ethers.Contract(USDT_ADDRESS[selectedChain], ERC20_ABI, provider)
          const usdtBalance = await usdtContract.balanceOf(address)
          const decimals = await usdtContract.decimals()
          setUsdtBalance(ethers.utils.formatUnits(usdtBalance, decimals))
        }

        // Fetch USDC balance
        if (USDC_ADDRESS[selectedChain]) {
          const usdcContract = new ethers.Contract(USDC_ADDRESS[selectedChain], ERC20_ABI, provider)
          const usdcBalance = await usdcContract.balanceOf(address)
          const decimals = await usdcContract.decimals()
          setUsdcBalance(ethers.utils.formatUnits(usdcBalance, decimals))
        }
      } catch (error) {
        console.error('Error fetching balances:', error)
      }
    }

    fetchBalances()
  }, [provider, address, selectedChain])

  // Update max balance when token changes
  useEffect(() => {
    if (!isConnected) {
      setMaxBalance('0')
      // Only reset ethAmount if user is not currently editing
      if (!isEditing) {
        setEthAmount('0')
        calculateDagz('0')
      }
      return
    }

    let balance = '0'
    switch (selectedToken) {
      case 'NATIVE':
        balance = nativeBalance * 0.95
        break
      case 'USDT':
        balance = usdtBalance * 0.99
        break
      case 'USDC':
        balance = usdcBalance * 0.99
        break
    }

    balance = Math.round(balance * 10000) / 10000

    setMaxBalance(balance)
    // Only update ethAmount if user is not currently editing
    if (!isEditing) {
      setEthAmount(balance)
      calculateDagz(balance)
    }
  }, [selectedToken, nativeBalance, usdtBalance, usdcBalance, isConnected, isEditing])

  // Countdown timer effect
  useEffect(() => {
    const targetTime = parseInt(process.env.NEXT_PUBLIC_TARGET_EPOCH); // Target epoch time
    let intervalId;

    const updateCountdown = () => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, targetTime - now);
      setCountdown(remaining);
    };

    // Update immediately
    updateCountdown();

    // Update every second
    intervalId = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // Format countdown to days, hours, minutes, seconds
  const formatCountdown = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  // Add console.log to debug the countdown values
  useEffect(() => {
    console.log('Countdown updated:', formatCountdown(countdown));
  }, [countdown]);

  const handleChainSelect = async (chainId) => {
    if (chainId === 'SOL') return
    
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
      setSelectedChain(chainId)
      setSelectedToken('NATIVE')
    } catch (error) {
      console.error('Error switching chain:', error)
    }
  }

  const handleTokenSelect = (token) => {
    setSelectedToken(token)
  }

  const handleBuyClick = async () => {
    if (!isConnected || !signer) return
    if (!ethAmount || parseFloat(ethAmount) <= 0) return

    const RECIPIENT_ADDRESS = process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS

    try {
      switch (selectedToken) {
        case 'NATIVE':
          const tx = await signer.sendTransaction({
            to: RECIPIENT_ADDRESS,
            value: ethers.utils.parseEther(ethAmount.toString())
          })
          await tx.wait()
          break

        case 'USDT':
          const usdtContract = new ethers.Contract(USDT_ADDRESS[selectedChain], ERC20_ABI, signer)
          const usdtDecimals = await usdtContract.decimals()
          const usdtTx = await usdtContract.transfer(
            RECIPIENT_ADDRESS,
            ethers.utils.parseUnits(ethAmount.toString(), usdtDecimals)
          )
          await usdtTx.wait()
          break

        case 'USDC':
          const usdcContract = new ethers.Contract(USDC_ADDRESS[selectedChain], ERC20_ABI, signer)
          const usdcDecimals = await usdcContract.decimals()
          const usdcTx = await usdcContract.transfer(
            RECIPIENT_ADDRESS,
            ethers.utils.parseUnits(ethAmount.toString(), usdcDecimals)
          )
          await usdcTx.wait()
          break
      }
    } catch (error) {
      console.error('Transaction failed:', error)
    }
  }

  const calculateDagz = (amount) => {
    console.log('[DEBUG] Calculating DAGZ from amount:', amount)
    const dagz = (parseFloat(amount || 0) * 100000).toFixed(4)
    console.log('[DEBUG] Calculated DAGZ amount:', dagz)
    setDagzAmount(dagz)
  }

  const handleEthChange = (e) => {
    // Mark that user is editing
    setIsEditing(true)
    
    let value = e.target.value
    // Remove any non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '')
    
    // Handle multiple decimal points
    // const decimalPoints = value.match(/\./g)
    // if (decimalPoints && decimalPoints.length > 1) {
    //   value = value.substring(0, value.lastIndexOf('.'))
    // }

    // Only format if not actively editing (i.e., not the last character is a decimal)
    if (value) {
      // Format to 4 decimal places if there's a decimal point
      if (value.includes('.')) {
        const parts = value.split('.')
        // Don't manipulate the input if user is still typing after decimal
        if (parts[1].length > 4) {
          value = `${parts[0]}.${parts[1].slice(0, 4)}`
        }
      }
    }
    
    // // Ensure value doesn't exceed max balance
    // if (Number(value) > Number(maxBalance)) {
    //   value = Number(maxBalance).toFixed(4)
    // }
    
    setEthAmount(value)
    calculateDagz(value)
  }

  const handleDagzChange = (e) => {
    // Mark that user is editing
    setIsEditing(true)
    
    let value = e.target.value
    // Remove any non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '')
    
    // Handle multiple decimal points
    const decimalPoints = value.match(/\./g)
    if (decimalPoints && decimalPoints.length > 1) {
      value = value.substring(0, value.lastIndexOf('.'))
    }

    // Only format if not actively editing
    if (value && !value.endsWith('.')) {
      // Format to 4 decimal places if there's a decimal point
      if (value.includes('.')) {
        const parts = value.split('.')
        // Don't manipulate the input if user is still typing after decimal
        if (parts[1].length > 4) {
          value = `${parts[0]}.${parts[1].slice(0, 4)}`
        }
      }
    }
    
    // Calculate equivalent ETH amount
    const ethValue = (parseFloat(value || 0) / 100000).toFixed(4)
    if (Number(ethValue) <= Number(maxBalance)) {
      setEthAmount(ethValue)
      setDagzAmount(value)
    }
  }

  const getTokenSymbol = () => {
    switch(selectedToken) {
      case 'NATIVE':
        return selectedChain === 1 ? 'ETH' : 'BNB'
      case 'USDT':
        return 'USDT'
      case 'USDC':
        return 'USDC'
      default:
        return selectedChain === 1 ? 'ETH' : 'BNB'
    }
  }

  const getTokenIcon = () => {
    switch(selectedToken) {
      case 'NATIVE':
        return selectedChain === 1 ? "/external/ethsvgfilli121-bglp.svg" : "/external/bnbsvgfilli121-vfja.svg"
      case 'USDT':
        return "/external/usdtsvgfilli122-tgt.svg"
      case 'USDC':
        return "/external/usdcsvgfilli122-s74b.svg"
      default:
        return selectedChain === 1 ? "/external/ethsvgfilli121-bglp.svg" : "/external/bnbsvgfilli121-vfja.svg"
    }
  }

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Dawgz.ai || New tricks in Crypto Trading || Presale live Now</title>
          <meta name="description" content="Dawgz.ai - Revolutionizing crypto trading with AI-powered rewards. Join the presale now and be part of the future of trading." />
          <meta property="og:title" content="Dawgz.ai || New tricks in Crypto Trading || Presale live Now" />
          <meta property="og:description" content="Dawgz.ai - Revolutionizing crypto trading with AI-powered rewards. Join the presale now and be part of the future of trading." />
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
              <div className="countdown-container">
                <div className="countdown-box">
                  <span className="countdown-value">{formatCountdown(countdown).days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-value">{formatCountdown(countdown).hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-value">{formatCountdown(countdown).minutes}</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-value">{formatCountdown(countdown).seconds}</span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
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
              <div className={`home-component21 ${selectedChain === 1 ? 'selected' : ''}`} onClick={() => handleChainSelect(1)}>
                <div className="home-arrow1">
                  <img
                    alt="ETH Chain"
                    src="/external/ethsvgfilli121-girr.svg"
                    className="home-ethsvgfill1"
                  />
                </div>
                <span className={`home-text43 ${selectedChain === 1 ? 'selected-text' : ''}`}>ETH</span>
              </div>
              <div className={`home-component22 ${selectedChain === 56 ? 'selected' : ''}`} onClick={() => handleChainSelect(56)}>
                <div className="home-arrow2">
                  <img
                    alt="BNB Chain"
                    src="/external/bnbsvgfilli121-vfja.svg"
                    className="home-bnbsvgfill"
                  />
                </div>
                <span className={`home-text44 ${selectedChain === 56 ? 'selected-text' : ''}`}>BNB</span>
              </div>
              <div className="home-component23">
                <div className="home-arrow3">
                  <img
                    alt="SOL Chain"
                    src="/external/solsvgfilli121-77i.svg"
                    className="home-solsvgfill"
                  />
                </div>
                <span className="home-text45">SOL</span>
              </div>
              <div className={`home-component24 ${selectedToken === 'NATIVE' ? 'selected' : ''}`} onClick={() => handleTokenSelect('NATIVE')}>
                <div className="home-arrow4">
                  <img
                    alt="Native Token"
                    src={selectedChain === 1 ? "/external/ethsvgfilli121-bglp.svg" : "/external/bnbsvgfilli121-vfja.svg"}
                    className="home-ethsvgfill2"
                  />
                </div>
                <span className={`home-text46 ${selectedToken === 'NATIVE' ? 'selected-text' : ''}`}>
                  {selectedChain === 1 ? 'ETH' : 'BNB'}
                </span>
              </div>
              <div className={`home-component25 ${selectedToken === 'USDT' ? 'selected' : ''}`} onClick={() => handleTokenSelect('USDT')}>
                <div className="home-arrow5">
                  <img
                    alt="USDT Token"
                    src="/external/usdtsvgfilli122-tgt.svg"
                    className="home-usdtsvgfill"
                  />
                </div>
                <span className={`home-text47 ${selectedToken === 'USDT' ? 'selected-text' : ''}`}>USDT</span>
              </div>
              <div className={`home-component26 ${selectedToken === 'USDC' ? 'selected' : ''}`} onClick={() => handleTokenSelect('USDC')}>
                <div className="home-arrow6">
                  <img
                    alt="USDC Token"
                    src="/external/usdcsvgfilli122-s74b.svg"
                    className="home-usdcsvgfill"
                  />
                </div>
                <span className={`home-text48 ${selectedToken === 'USDC' ? 'selected-text' : ''}`}>USDC</span>
              </div>
              <span className="home-text49 dawgz.aiArchitectsDaughterRegular6">
                You pay
              </span>
              <div className="home-input1">
                <input 
                  type="text"
                  value={ethAmount}
                  onChange={handleEthChange}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => {
                    setIsEditing(false);
                    if (ethAmount && !ethAmount.endsWith('.')) {
                      // Format when user leaves the input
                      const formatted = parseFloat(ethAmount).toFixed(4);
                      setEthAmount(formatted);
                      calculateDagz(formatted);
                    }
                  }}
                  placeholder="0.0000"
                  className="eth-input"
                />
              </div>
              <span className="home-text50">{getTokenSymbol()}</span>
              <div className="home-arrow7">
                <img
                  alt="Token Icon"
                  src={getTokenIcon()}
                  className="home-ethsvgfill3"
                />
              </div>
              <span className="home-text51 dawgz.aiArchitectsDaughterRegular6">
                You receive
              </span>
              <div className="home-input2">
                <input 
                  type="text"
                  value={dagzAmount}
                  onChange={handleDagzChange}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => {
                    setIsEditing(false);
                    if (dagzAmount && !dagzAmount.endsWith('.')) {
                      // Format when user leaves the input
                      const formatted = parseFloat(dagzAmount).toFixed(4);
                      setDagzAmount(formatted);
                    }
                  }}
                  placeholder="0.0000"
                  className="dagz-input"
                />
              </div>
              <span className="home-text52 dawgz.aiMontserratSemiBold">
                $DAGZ
              </span>
              <div className="home-arrow8"></div>
              <div className="home-button-container" onClick={handleBuyClick}>
                <ConnectWallet variant="buy" />
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
            font-family: 'Architects Daughter';
            text-align: center;
            line-height: 20px;
          }
          .home-text29 {
            top: 125.80000305175781px;
            left: 25.600000381469727px;
            color: var(--dl-color-dawgz.ai-black);
            width: 113px;
            height: auto;
            position: absolute;
            font-family: 'Architects Daughter';
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
            font-family: 'Architects Daughter';
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
            font-family: 'Architects Daughter';
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
            font-family: 'Architects Daughter';
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
            font-family: 'Architects Daughter';
            text-align: left;
            line-height: normal;
          }
          .home-paragraph-background1 {
            gap: 72.61000061035156px;
            top: 241.39999389648438px;
            left: 25.600000381469727px;
            width: 244px;
            height: 66px;
            display: flex;
            padding: 14px 12px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            justify-content: center;
            background-color: #FFF7CB;
          }
          .home-text34 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            font-family: 'Architects Daughter';
            text-align: left;
            line-height: 20px;
          }
          .home-paragraph-background2 {
            gap: 72.76000213623047px;
            top: 241.39999389648438px;
            left: 281.5px;
            width: 244px;
            height: 66px;
            display: flex;
            padding: 14px 12px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            justify-content: center;
            background-color: #FFF7CB;
          }
          .home-text38 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            font-family: 'Architects Daughter';
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
          .home-component21, .home-component22, .home-component24, .home-component25, .home-component26 {
            cursor: pointer !important;
            transition: all 0.3s ease;
            pointer-events: auto !important;
            position: relative;
            z-index: 10;
          }
          
          .home-component21:hover, .home-component22:hover, .home-component24:hover, .home-component25:hover, .home-component26:hover {
            opacity: 0.8;
            transform: translateY(-2px);
          }
          
          .home-component21.selected, .home-component22.selected,
          .home-component24.selected, .home-component25.selected,
          .home-component26.selected {
            background-color: #000000 !important;
          }
          
          .home-component21.selected .home-text43,
          .home-component22.selected .home-text44,
          .home-component24.selected .home-text46,
          .home-component25.selected .home-text47,
          .home-component26.selected .home-text48 {
            color: #ffffff !important;
          }
          
          .selected-text {
            color: #ffffff !important;
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
            background-color: rgba(238, 227, 210, 1);
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
            opacity: 0.5;
            cursor: not-allowed;
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
            background-color: rgba(238, 227, 210, 1);
            cursor: pointer;
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
            cursor: pointer;
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
            cursor: pointer;
          }
          .home-arrow1, .home-arrow2, .home-arrow3,
          .home-arrow4, .home-arrow5, .home-arrow6 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-ethsvgfill1, .home-bnbsvgfill, .home-solsvgfill,
          .home-ethsvgfill2, .home-usdtsvgfill, .home-usdcsvgfill {
            width: 24px;
            height: 24px;
          }
          .eth-input, .dagz-input {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
            font-family: 'Architects Daughter';
            font-size: 16px;
            color: var(--dl-color-dawgz.ai-black);
            outline: none;
          }
          
          .eth-input:focus, .dagz-input:focus {
            outline: none;
          }
          
          .eth-input::placeholder, .dagz-input::placeholder {
            color: var(--dl-color-dawgz.ai-black60);
          }
          
          .home-input1, .home-input2 {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-text43 {
            color: var(--dl-color-dawgz.ai-white);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-text44 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-text45 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-text46 {
            color: var(--dl-color-dawgz.ai-white);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .home-text47 {
            color: var(--dl-color-dawgz.ai-black);
            height: auto;
            text-align: left;
            line-height: normal;
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
            font-family: 'Architects Daughter';
            text-align: left;
            line-height: 20px;
          }
          .home-input1 {
            top: 525.1300048828125px;
            left: 25.600000381469727px;
            width: 244px;
            height: 56px;
            display: flex;
            padding: 19.600000381469727px 17.600000381469727px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
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
            font-family: 'Architects Daughter';
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
            font-family: 'Architects Daughter';
            text-align: left;
            line-height: 20px;
          }
          .home-input2 {
            top: 525.1300048828125px;
            left: 281.5px;
            width: 244px;
            height: 56px;
            display: flex;
            padding: 19.600000381469727px 17.600000381469727px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
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
            font-family: 'Architects Daughter';
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
          .home-button-container {
            top: 597.1300048828125px;
            left: 25.600000381469727px;
            width: 500px;
            height: 51.2px;
            display: flex;
            padding: 13.600000381469727px 25.600000381469727px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            justify-content: center;
            background: linear-gradient(127deg, rgba(255, 214, 0, 1) 24%, rgba(255, 124, 2, 1) 100%);
            box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 1);
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
          .countdown-container {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
          }
          
          .countdown-box {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 116px;
            height: 52px;
            margin-right: 10px;
            border: 1px solid rgba(0, 0, 0, 1);
            border-radius: 12px;
            background-color: rgba(255, 255, 255, 0.97);
            flex-direction: column;
            padding: 5px;
          }
          
          .countdown-value {
            color: var(--dl-color-dawgz.ai-black);
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            text-align: center;
            font-family: 'Architects Daughter';
          }
          
          .countdown-label {
            color: var(--dl-color-dawgz.ai-black);
            font-size: 14px;
            text-align: center;
            line-height: 16px;
            font-family: 'Architects Daughter';
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
