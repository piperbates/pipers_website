import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ModalContext, { Modal_Data } from '@/utils/context/ModalContext'
import { useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const { modalOpen } = useContext(Modal_Data)

  return (<>
    <Head>
    <script src="https://kit.fontawesome.com/3814ef41bb.js" crossOrigin="anonymous"></script>
      <title>The Coding Home of Piper Bates</title>
      <link rel="icon" href="/favicon.ico" type="image/png" />
    </Head>

    <ModalContext>
        <Component {...pageProps} />
    </ModalContext>
    </>
    )
}
