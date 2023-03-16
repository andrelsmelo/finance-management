
import React, { useState, useEffect } from "react";
import api from '../../service/api';
import { useRouter } from 'next/router';

export default function Client() {
    const [client, setClient] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
           api.get(`client/${id}`).then(res => {
              setClient(res.data);
           });
        }
     }, [id]);

    return (
        <div>
            <h1>{client && client[0].name}</h1>
        </div>
    );
}
