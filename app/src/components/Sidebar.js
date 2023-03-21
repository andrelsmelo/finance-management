import styles from '../styles/Sidebar.module.css';

import {
  faBars,
  faHome,
  faUser,
  faCog,
  faChartSimple,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/AuthContext';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoggedIn, logout } = useAuth();

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    isLoggedIn ?
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles['sidebar-inner']}>
        <header className={styles['sidebar-header']}>
          <button
            type='button'
            className={styles['sidebar-burger']}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          </button>
          <img src='logo.png' alt='' className={styles['sidebar-logo']} />
        </header>
        <nav className={styles['sidebar-menu']}>
          <Link href='/'>
            <button type='button'>
              <FontAwesomeIcon icon={faHome} style={{ color: '#ffffff' }} />
              <span>Home</span>
            </button>
          </Link>
          {/* isAdmin */}
          <Link href='/clients'>
            <button type='button'>
              <FontAwesomeIcon icon={faCog} style={{ color: '#ffffff' }} />
              <span>Admin</span>
            </button>
          </Link>
          {/* isNotAdmin */}
          <Link href='/resume'>
            <button type='button'>
              <FontAwesomeIcon icon={faChartSimple} style={{ color: '#ffffff' }} />
              <span>Resume</span>
            </button>
          </Link>
          <Link href='/register'>
            <button type='button'>
              <FontAwesomeIcon icon={faPlus} style={{ color: '#ffffff' }} />
              <span>Register</span>
            </button>
          </Link>
          <Link href='/client/1'>
            <button type='button'>
              <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} />
              <span>Profile</span>
            </button>
          </Link>
        </nav>
      </div>
    </nav> : ''
  );
}
