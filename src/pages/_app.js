import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ray Luna | Developer Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
