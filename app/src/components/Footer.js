
import styles from '../styles/Home.module.css';

export default function Footer() {
    
    return(
        <footer>
            <div className={styles['footer-content']}>
                <div className={styles['footer-contact']}>
                    <p>Entre em contato:</p>
                    <p>Telefone: (xx) xxxx-xxxx</p>
                    <p>E-mail: exemplo@exemplo.com</p>
                </div>
            </div>
        </footer>
    )
}
