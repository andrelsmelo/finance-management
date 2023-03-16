
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Button from "../components/Button";
import { useEffect, useState } from "react";

import api from '../service/api';
import Link from 'next/link';

export default function App({ Component, pageProps }) {

  const [data, setData] = useState('');

  useEffect(() => {
    api.get('is-alive').then(res => {
      setData(res.data.message);
    })
  }, []);

  return (
    <div>
      <header>
        <Link href="/"
          style={{
            textDecoration: 'none'
          }}>
          <div className={styles['header-title']}>
            <h1 className={'color-primary'}>FINANCE <span className='color-secondary'>MANAGEMENT</span></h1>
          </div>
        </Link>
        <div className={styles['header-buttons']}>
          <Button text="About Us" variant="primaryTransparent" />
          <Link href="/login">
            <Button text="Login" variant="primaryOutlined" />
          </Link>
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
        <div>{data && data}</div>
      </footer>
    </div>
  );
}
