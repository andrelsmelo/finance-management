
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
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
        <Sidebar/>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
    </div>
  );
}
