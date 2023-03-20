import React from "react";
import styles from "../styles/Table.module.css";

function TableComponent({ headers, datas, actions }) {

    const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).\d{3}Z$/;

    return (
        <div className={styles["table-container"]}>
            <table className={styles["table-content"]}>
                <thead className={styles["table-header"]}>
                    <tr>
                        {headers && headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles["table-body"]}>
                    {datas && datas.map((data, index) => (
                        <tr key={index}>
                            {Object.keys(data).map((key) => (
                                regex.exec(data[key]) ? <td key={key}>{new Date(data[key]).toLocaleDateString('pt-BR')} </td> : <td key={key}>{data[key]}</td>
                            ))}
                            {actions &&
                            <td>
                                        <button>A</button>
                                        <button>B</button>
                            </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;
