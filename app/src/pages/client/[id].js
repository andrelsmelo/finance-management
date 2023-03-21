
import React, { useState, useEffect } from "react";
import api from '../../service/api';
import { useRouter } from 'next/router';
import Head from "next/head";
import TableComponent from "@/components/Table";
import ClientCard from "@/components/ClientCard";

export default function Client() {
    const [client, setClient] = useState(null);
    const [registers, setRegisters] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    const headers = ['id', 'Data de Registro', 'Valor', 'Categoria', 'Tipo', 'Ações'];

    useEffect(() => {
        if (id) {
            api.get(`client/${id}`).then(res => {
                setClient(res.data);
            });
            api.get(`register/client/${id}`).then(res => {
                setRegisters(res.data);
            });
        }
    }, [id]);

    return (
        <div>
            <Head>
                <title>{client && client[0].name}</title>
            </Head>
            {client &&
                <ClientCard id={client[0].id} name={client[0].name} gender={client[0].gender} wage_date={client[0].wage_date} wage_value={client[0].wage_value} />
            }
            <TableComponent
                headers={headers}
                datas={registers}
                actions={true}
            >
            </TableComponent>
        </div>
    );
}
