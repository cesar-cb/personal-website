import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
