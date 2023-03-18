
import Link from 'next/link';
import styles from '../styles/Card.module.css';

export default function ClientCard(props) {

    const { id, name, gender, wage_date, wage_value } = props;

    return (
        <div className={styles['card']}>
            <div className={styles['card-header']}>
                <Link href={`/client/${id}`}>
                    <h2 className={styles['card-title']}>{name}</h2>
                </Link>
                <div className={styles['card-subtitle']}>{gender}</div>
            </div>
            <div className={styles['card-body']}>
                <div className={styles['card-info']}>
                    <div className={styles['card-info-label']}>Data de pagamento:</div>
                    <div className={styles['card-info-value']}>{wage_date}</div>
                </div>
                <div className={styles['card-info']}>
                    <div className={styles['card-info-label']}>Valor do pagamento:</div>
                    <div className={styles['card-info-value']}>R$ {wage_value}</div>
                </div>
            </div>
        </div>
    );
}
