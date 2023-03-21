import Button from '../components/Button';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useAuth } from '@/hooks/AuthContext';
import { useEffect } from 'react';
import {
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const changeThemeBtn = document.getElementById('change-theme-btn');
    const root = document.documentElement;

    changeThemeBtn.addEventListener('click', () => {
      // Obtenha a cor secundária atual
      const currentSecondaryColor = root.style.getPropertyValue('--secondary');

      // Alterne para a próxima cor secundária com base na cor atual
      if (currentSecondaryColor === '#FBA239') {
        root.style.setProperty('--secondary', '#39A1FB');
        root.style.setProperty('--secondary-dark', '#2677C8');
        root.style.setProperty('--secondary-light', '#65B4FF');
      } else if (currentSecondaryColor === '#39A1FB') {
        root.style.setProperty('--secondary', '#FB3939');
        root.style.setProperty('--secondary-dark', '#C72525');
        root.style.setProperty('--secondary-light', '#FF7C7C');
      } else if (currentSecondaryColor === '#FB3939') {
        root.style.setProperty('--secondary', '#FF5733');
        root.style.setProperty('--secondary-dark', '#C83D1E');
        root.style.setProperty('--secondary-light', '#FF8C5B');
      } else if (currentSecondaryColor === '#FF5733') {
        root.style.setProperty('--secondary', '#39FB9D');
        root.style.setProperty('--secondary-dark', '#26C87B');
        root.style.setProperty('--secondary-light', '#65FFB7');
      } else {
        root.style.setProperty('--secondary', '#FBA239');
        root.style.setProperty('--secondary-dark', '#C47D23');
        root.style.setProperty('--secondary-light', '#FFC15C');
      }
    });
  }, []);

  return (
    <header className={styles['header-container']}>
      <div className={styles['header-title']}>
        <Link
          href='/'
          style={{
            textDecoration: 'none',
          }}
        >
          <h1 className={'color-primary'}>
            MONEY <span className='color-secondary'>MATTERS</span>
          </h1>
        </Link>
      </div>
        <div className={styles['header-buttons']}>
          <Button text='About Us' variant='primaryTransparent' />
          <button className={styles['theme-btn']}>
            <FontAwesomeIcon id='change-theme-btn' icon={faWandMagicSparkles} style={{ color: 'var(--primary)' }} />
          </button>
          {isLoggedIn ? (
            <Link href='/'>
              <Button
                text='Logout'
                variant='primaryOutlined'
                onClick={() => logout()}
              />
            </Link>
          ) : (
            <Link href='/login'>
              <Button text='Login' variant='primaryOutlined' />
            </Link>
          )}
        </div>
    </header>
  );
}
