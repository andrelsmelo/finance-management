import Button from "../components/Button";
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useAuth } from "@/hooks/AuthContext";

export default function Header() {

    const { isLoggedIn, logout } = useAuth();

    return (
        <header className={styles['header-container']}>
            <div className={styles['header-title']}>
                <Link href="/"
                    style={{
                        textDecoration: 'none'
                    }}>
                    <h1 className={'color-primary'}>MONEY <span className='color-secondary'>MATTERS</span></h1>
                </Link>
            </div>
            <div>
                <Button text="About Us" variant="primaryTransparent" />
                {isLoggedIn ?
                    (   <Link href="/">
                            <Button text="Logout" variant="primaryOutlined" onClick={() => logout()} />
                    </Link>
                    ) : (
                        <Link href="/login">
                            <Button text="Login" variant="primaryOutlined" />
                        </Link>
                    )
                }

            </div>
        </header>
    )
}
