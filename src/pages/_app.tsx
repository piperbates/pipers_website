import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ModalContext from '@/utils/context/ModalContext';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';

// config.autoAddCss = false;

// TODO - There's a bug in next/fonts 
// - https://github.com/vercel/next.js/issues/44433
// can't import fonts this way until this is fixed

export default function App({ Component, pageProps }: AppProps) {


  return (<>
    <Head>
      <title>The Coding Home of Piper Bates</title>
      <link rel="icon" href="/favicon.ico" type="image/png" />
    </Head>
    <ModalContext>
        <Component {...pageProps} />
    </ModalContext>
    </>
    )
};
