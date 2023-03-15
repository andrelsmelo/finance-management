
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Button from "../components/Button";
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
        <header>
          <div className={styles['header-title']}>
            <h1 className={'color-primary'}>FINANCE <span className='color-secondary'>MANAGEMENT</span></h1>
          </div>
          <div className={styles['header-buttons']}>
            <Button text="About Us" variant="plain" />
            <Button text="Login" variant="outlined" />
          </div>
        </header>
        <Component {...pageProps} />
        <footer>
          <div className={styles['footer-content']}>
            <div className={styles['footer-contact']}>
              <p>Entre em contato:</p>
              <p>Telefone: (xx) xxxx-xxxx</p>
              <p>E-mail: exemplo@exemplo.com</p>
            </div>
          </div>
        </footer>
    </>
  );
}
