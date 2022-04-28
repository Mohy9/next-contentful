import Layout from '../layout/layout';
import '../styles/globals.css';
import '../components/card/card.scss';
import '../layout/layout.scss';
import '../components/nav-bar/nav-bar.scss';
import '../components/footer/footer.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
