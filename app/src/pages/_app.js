
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../styles/globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthProvider } from '@/hooks/AuthContext';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {

  return (
    <div>
      <AuthProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
    </div>
  );
}
