import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function App({ Component, pageProps }: AppProps) {

//   useEffect(() => {
//     if (
//         localStorage.theme === 'dark' ||
//         (!('theme' in localStorage) &&
//             window.matchMedia('(prefers-color-scheme: dark)').matches)
//     ) {
//         document.documentElement.classList.add('dark')
//     } else {
//         document.documentElement.classList.remove('dark')
//     }
// })

  return (<>
    <Head>
      <title>The Coding Home of Piper Bates</title>
      <link rel="icon" href="/favicon.ico" type="image/png" />
    </Head>

    <Component {...pageProps} />
    </>
    )
}
