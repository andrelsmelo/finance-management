import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import KUTE from 'kute.js';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob3' },
      { repeat: 9999, duration: 3000, yoyo: true }
    );

    tween.start();
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles['landing-container']}>
        <div className={styles['custom-shape-divider-top-1679414708']}>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className={styles['shape-fill']}
            ></path>
          </svg>
        </div>
        <div className={styles['titles-container']}>
          <div className={styles['main-title']}>
            Com a MoneyMatters Management, você pode rastrear facilmente seus
            gastos e receber insights valiosos sobre seus hábitos financeiros.
          </div>
          <div className={styles['main-images']}>
            <div className={styles['image']}>
              <img src='/mock1.jpeg' alt='oldman' />
            </div>
            <div className={styles['image']}>
              <img src='/mock2.jpeg' alt='oldman' />
            </div>
            <div className={styles['image']}>
              <img src='/mock3.jpeg' alt='oldman' />
            </div>
          </div>
          <div className={styles['login-container']}>
            <div className={styles['email-input']}>
              <input type='email' placeholder='Email' />
            </div>
            <div className={styles['login-register-container']}>
              <button className={styles['register-btn']}>Cadastre-se</button>
              <div className={styles['already-register']}>
                <p>Gerencie suas finanças de forma fácil e eficaz</p>
                <span>
                  Já tem cadastro?{' '}
                  <Link href='/login'>
                    <u>Login</u>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            id='visual'
            viewBox='0 0 900 600'
            width='900'
            height='600'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
          >
            <g transform='translate(474.17176399009475 333.9872918157705)'>
              <path
                id='blob1'
                d='M79.4 -154.1C105.1 -122.6 129.6 -105.8 144.5 -82.6C159.4 -59.3 164.7 -29.7 182.3 10.2C199.9 50 229.9 100 214.9 123.1C199.9 146.2 139.9 142.4 96.6 142.4C53.3 142.4 26.7 146.2 -3.1 151.5C-32.8 156.9 -65.7 163.7 -105.9 162C-146.2 160.2 -193.9 149.9 -225.8 121.4C-257.7 93 -273.9 46.5 -264.8 5.3C-255.7 -36 -221.4 -72 -185.5 -93.7C-149.7 -115.3 -112.4 -122.6 -81.2 -150.9C-50 -179.3 -25 -228.6 0.9 -230.2C26.8 -231.8 53.7 -185.6 79.4 -154.1'
                fill='none'
                className={styles['blob-line']}
                strokeWidth='9'
              ></path>
            </g>
{/*             <g
              transform='translate(406.386090703667 328.9174203380071)'
              style={{ visibility: 'hidden' }}
            >
              <path
                id='blob2'
                d='M98.1 -188.6C125.3 -154.3 144 -124.2 171.6 -93.4C199.2 -62.7 235.6 -31.3 245.3 5.6C254.9 42.5 237.9 85 212.1 118.8C186.2 152.5 151.6 177.6 114.8 190.5C78 203.4 39 204.2 1.1 202.3C-36.8 200.5 -73.7 195.9 -95.3 174.3C-117 152.6 -123.4 113.8 -132.5 81.9C-141.6 50 -153.3 25 -158.2 -2.8C-163.1 -30.7 -161.2 -61.3 -151.1 -91.5C-141.1 -121.7 -122.8 -151.3 -96.2 -186C-69.7 -220.7 -34.8 -260.3 0.3 -260.9C35.5 -261.5 71 -223 98.1 -188.6'
                fill='none'
                stroke='#BB004B'
                strokeWidth='9'
              ></path>
            </g> */}
            <g
              transform='translate(472.03809690196823 292.45431208364545)'
              style={{ visibility: 'hidden' }}
            >
              <path
                id='blob3'
                d='M101.7 -129C144.7 -108.8 201.2 -96.3 217.6 -66C234 -35.6 210.2 12.5 194.4 63.8C178.5 115.1 170.7 169.6 139.6 185.8C108.5 202.1 54.3 180 -0.2 180.3C-54.7 180.6 -109.3 203.1 -152.8 190.9C-196.2 178.7 -228.4 131.7 -248.6 78.6C-268.8 25.5 -277.1 -33.6 -249.9 -70.1C-222.7 -106.6 -160.2 -120.4 -112.6 -139.1C-65 -157.9 -32.5 -181.4 -1.6 -179.3C29.4 -177.1 58.8 -149.2 101.7 -129'
                fill='none'
                className={styles['blob-line']}
                stroke-width='6'
              ></path>
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}
