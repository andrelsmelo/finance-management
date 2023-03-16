import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Admin', href: '/admin', variant: 'primary' },
    { label: 'Categories', href: '/categories', variant: 'primary' },
    { label: 'Clients', href: '/clients', variant: 'primary' },
    { label: 'Download', href: '/download', variant: 'primary' },
    { label: 'Home', href: '/home', variant: 'primary' },
    { label: 'Login', href: '/login', variant: 'primary' },
    { label: 'Register', href: '/register', variant: 'primary' },
    { label: 'Resume', href: '/resume', variant: 'primary' },
    { label: 'Users', href: '/users', variant: 'primary' },
  ];

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <Button text="Menu" variant="secondary" onClick={toggleMenu} />
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
