import { createContext, useContext, useEffect, useState } from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Get Project ID from environment variables
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!projectId) {
  console.error('WalletConnect Project ID is not set. Please add NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to your .env file');
}

const { chains, publicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId }), publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!projectId) {
    console.error('WalletConnect Project ID is missing');
    return children;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <WalletContext.Provider value={{}}>
        {children}
        {mounted && (
          <Web3Modal 
            projectId={projectId} 
            ethereumClient={ethereumClient}
            themeMode="dark"
            themeVariables={{
              '--w3m-font-family': 'Roboto, sans-serif',
              '--w3m-accent-color': '#3B82F6',
              '--w3m-background-color': '#1F2937',
              '--w3m-background-border-radius': '12px',
              '--w3m-container-border-radius': '12px',
              '--w3m-wallet-icon-border-radius': '12px',
              '--w3m-button-border-radius': '12px',
              '--w3m-notification-border-radius': '12px',
              '--w3m-input-border-radius': '12px',
            }}
            mobileWallets={[
              {
                id: 'metamask',
                name: 'MetaMask',
                links: {
                  native: 'metamask://',
                  universal: 'https://metamask.app.link',
                },
              },
            ]}
            desktopWallets={[
              {
                id: 'metamask',
                name: 'MetaMask',
                links: {
                  native: 'metamask://',
                  universal: 'https://metamask.app.link',
                },
              },
            ]}
          />
        )}
      </WalletContext.Provider>
    </WagmiConfig>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
} 