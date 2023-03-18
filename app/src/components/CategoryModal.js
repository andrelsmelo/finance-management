import React from "react";
import styles from "../styles/Category.module.css";

const CategoryModal = ({ show, onClose, data }) => {

    return (
        <div className={styles["category-modal"]} style={{ display: show ? "block" : "none" }}>
            <div className={styles["category-content"]}>
                <table>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                            <th>revenue_type</th>
                            <th>actions</th>
                        </tr>
                        {data && data.map((data) =>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.revenue_type}</td>
                                <td>
                                    <button>A</button>
                                    <button>B</button>
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table>
                <button className={styles["close-button"]} onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default CategoryModal;
