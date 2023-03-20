
import styles from '../styles/Footer.module.css';

export default function Footer() {

    return (
        <footer className={styles['footer-container']}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-contact']}>
                    © 2023 - Todos os direitos reservados. MoneyMatters Management Inc.
                    Telefone: (41) 98781-5525 - E-mail: andrelucassmelo@gmail.com.br
                </div>
            </div>
        </footer>
    )
}
