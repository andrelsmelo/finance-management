
import Head from "next/head";
import api from '../service/api';
import React, { useState, useEffect } from 'react';
import ClientCard from "@/components/ClientCard";
import CategoryModal from "@/components/CategoryModal";
import styles from '../styles/Card.module.css';

export default function Clients() {

    const [clients, setClients] = useState('');
    const [categories, setCategories] = useState('');
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        api.get('clients').then(res => {
            setClients(res.data);
        })

        api.get('categories').then(res => {
            setCategories(res.data);
        })
    }, []);

    return (
        <div>
            <Head>
                <title>Clients</title>
            </Head>
            <main className={styles['card-main']}>
                <section className={styles['category-container']}>
                    <button onClick={toggleModal}>Editar Categorias</button>
                </section>
                <section className={styles['card-container']}>
                    {clients && clients.map((client) =>
                        <ClientCard id={client.id} name={client.name} gender={client.gender} wage_date={client.wage_date} wage_value={client.wage_value} />
                    )}
                </section>
                <CategoryModal
                    show={showModal}
                    onClose={toggleModal}
                    data={categories}
                />
            </main>

        </div>
    )
}