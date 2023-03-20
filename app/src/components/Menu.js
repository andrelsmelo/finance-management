import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { useAuth } from '../hooks/AuthContext';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, logout } = useAuth();

  const menuItems = [
    { label: 'Home', href: '/', variant: 'primary' },
    { label: 'Login', href: '/login', variant: 'primary' },
    { label: 'Clients', href: '/clients', variant: 'primary' },
    { label: 'Resume', href: '/resume', variant: 'primary' },
    { label: 'Register', href: '/register', variant: 'primary' }
  ];

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="relative">
      {/*       {isLoggedIn && (
        <Button text="Menu" variant="secondary" onClick={toggleMenu} style={{ display: isMenuOpen ? "none" : "block" }} />
      )} */}
      <div>
        <Button text="Menu" variant="secondary" onClick={toggleMenu} style={{ display: isMenuOpen ? "none" : "block" }} />
      </div>
      {isMenuOpen && (
        <ul
          onClick={toggleMenu}
        >
          {menuItems.map((item) => (
              <Link href={item.href}>
                  <Button text={item.label} variant={item.variant} />
              </Link>
            
          ))}
        </ul>
      )}
    </div>
  );
}
