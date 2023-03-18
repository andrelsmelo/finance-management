import Button from "../components/Button";
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Menu from "./Menu";
import { useAuth } from "@/hooks/AuthContext";

export default function Header() {

    const { isLoggedIn, logout } = useAuth();

    return(
        <header>
            <Link href="/"
            style={{
                textDecoration: 'none'
            }}>
                <div className={styles['header-title']}>
                    <h1 className={'color-primary'}>FINANCE <span className='color-secondary'>MANAGEMENT</span></h1>
                </div>
            </Link>
            <Menu />
            <div className={styles['header-buttons']}>
                <Button text="About Us" variant="primaryTransparent" />
                {isLoggedIn ? (
                    <Button text="Logout" variant="primaryOutlined" onClick={() => logout()} />
                ) : (
                    <Link href="/login">
                        <Button text="Login" variant="primaryOutlined" />
                    </Link>
                )}
            </div>
            
        </header>
    )
}
