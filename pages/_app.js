import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
import { WalletProvider } from '../wallet-context'

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </GlobalProvider>
    </NextIntlProvider>
  )
}
