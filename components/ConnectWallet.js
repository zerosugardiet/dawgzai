import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork, useBalance } from 'wagmi';
import { useWallet } from '../wallet-context';

export function ConnectWallet({ variant = 'default' }) {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
    watch: true
  });
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onError(error) {
      console.error('Connection error:', error);
    },
    onSuccess(data) {
      console.log('Successfully connected:', data);
    }
  });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const handleConnect = async () => {
    try {
      if (connectors.length === 0) {
        console.error('No connectors available');
        return;
      }

      let connector = connectors.find(connector => connector.name === 'MetaMask');
      if (!connector) {
        connector = connectors.find(connector => connector.name === 'WalletConnect');
      }

      if (!connector) {
        console.error('No suitable connector found');
        return;
      }

      console.log('Attempting to connect with:', connector.name);
      await connect({ connector });
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  const handleSwitchNetwork = async () => {
    try {
      if (switchNetwork) {
        console.log('Switching to Ethereum Mainnet');
        await switchNetwork(1);
      } else {
        console.error('Switch network function not available');
      }
    } catch (error) {
      console.error('Network switch failed:', error);
    }
  };

  if (isConnected) {
    const formattedBalance = balance ? Number(balance.formatted).toFixed(4) : '0.0000';
    
    if (variant === 'buy') {
      return (
        <button 
          className="w-full px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Buy Now
        </button>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <p className="text-sm font-medium">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
        </div>
        <button 
          onClick={() => disconnect()}
          className="px-3 py-1.5 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
        </button>
      </div>
    );
  }

  if (variant === 'buy') {
    return (
      <button 
        onClick={handleConnect}
        disabled={isLoading}
        className="w-full px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50"
      >
        {isLoading ? 'Connecting...' : 'Connect Wallet to Buy'}
      </button>
    );
  }

  return (
    <button 
      onClick={handleConnect} 
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
    >
      {isLoading ? `Connecting to ${pendingConnector?.name}...` : 'Connect Wallet'}
    </button>
  );
} 