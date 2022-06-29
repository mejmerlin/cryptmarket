import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_SERVER)
  console.log(process.env.NEXT_PUBLIC_APP_ID)
  return (
    <MoralisProvider
    serverUrl="https://qslkqeofyca3.usemoralis.com:2053/server"
    appId={"pIRJIoJmirOvnF1BPk0ja1dMHctxpfFrEvUyD2G3"}
    >
      <GunProvider >
        <CoinMarketProvider>
            <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>


    </MoralisProvider>  
  )
}

export default MyApp
