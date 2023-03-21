
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../styles/Register.module.css';
import api from '../service/api';
import Cookies from 'universal-cookie';
import TableComponent from "@/components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Register() {

    const cookies = new Cookies();
    const [registers, setRegisters] = useState('');
    const headers = ['id', 'Data de Registro', 'Valor', 'Categoria', 'Tipo', 'Ações'];
    const id = cookies.get('client_id');

    useEffect(() => {
        api.get(`register/client/${id}`).then(res => {
            setRegisters(res.data)
        });
    }, []);

    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            <main className={styles['register-main']}>
                <section className={styles['register-history']}>
                    <div className={styles['register-history-header']}>
                        <div className={styles['register-title']}>
                            HISTORICO
                        </div>
                        <div className={styles['register-history-filter']}>
                                <FontAwesomeIcon icon={faFilter}/>
                        </div>
                    </div>
                    <div className={styles['register-table']}>
                        <TableComponent
                            headers={headers}
                            datas={registers}
                            actions={true}
                        >
                        </TableComponent>
                    </div>
                </section>
                <section className={styles['register-sidebar']}>
                    <div className={styles['register-container']}>
                        <div className={styles['register-input-selections']}>
                            <label htmlFor="fname">Valor:</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Data:</label>
                            <input type="date" id="lname" name="lname" />
                            <label htmlFor="cars">Categoria:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Option A</option>
                                <option value="saab">Option B</option>
                                <option value="mercedes">Option C</option>
                                <option value="audi">Option D</option>
                            </select>
                            <button className={styles['btn-confirm-register']}>A</button>
                        </div>
                        <div className={styles['register-selected-inputs']}>
                            <span>
                                R$ 1230,00 | 17/03/2023 | Investimentos
                            </span>
                            <span>
                                R$ 1230,00 | 17/03/2023 | Investimentos
                            </span>
                            <span>
                                R$ 1230,00 | 17/03/2023 | Investimentos
                            </span>
                        </div>
                    </div>
                    <div className={styles['register-buttons']}>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                    <div className={styles['download-container']}>
                        <div className={styles['download-input-selections']}>
                            <label htmlFor="lname">Data Inicial:</label>
                            <input type="date" id="lname" name="lname" />
                            <label htmlFor="lname">Data Final:</label>
                            <input type="date" id="lname" name="lname" />
                        </div>
                        <div className={styles['download-icons']}>
                            <button>
                                PDF
                            </button>
                            <button>
                                CSV
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}