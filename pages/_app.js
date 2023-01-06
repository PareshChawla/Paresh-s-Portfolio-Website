import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import 'hover.css/css/hover-min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp;
