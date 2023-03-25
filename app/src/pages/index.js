import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import KUTE from 'kute.js';
import { useEffect } from 'react';

export default function Home() {


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles['grid-container']}>
        <div className={styles['main-title']}>
          Comece agora a construir o seu futuro financeiro!
        </div>
        <div className={styles['main-text']}>
          Com o Finance Management, você pode rastrear facilmente seus gastos e
          receber insights valiosos sobre seus hábitos financeiros.
        </div>
        <div className={styles['main-details']}>
          <span>Organização</span>
          <span>Controle</span>
          <span>Eficiência</span>
          <span>Facilidade</span>
        </div>
        <div className={styles['main-email']}>
          <input type='text' placeholder='E-mail' />
          <p>Gerencie suas finanças de forma fácil e eficaz</p>
                <span>
                  Já tem cadastro?{' '}
                  <Link href='/login'>
                    <u>Login</u>
                  </Link>
                </span>
        </div>
        <img src='/mock2.jpeg' alt='' className={styles['image-1']}/>
        <img src='/mock1.jpeg' alt='' className={styles['image-2']}/>
        <img src='/mock3.jpeg' alt='' className={styles['image-3']}/>
      </main>
    </div>
  );
}
