import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
      </main>
      <div className={styles['bola']}>
        <img src='/histerica.png' alt='histeric' />
      </div>
    </div>
  );
}
