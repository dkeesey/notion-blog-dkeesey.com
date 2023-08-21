import { AppProps } from 'next/app'
import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
