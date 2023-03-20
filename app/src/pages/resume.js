import Head from "next/head";
import styles from '../styles/Resume.module.css';

export default function Resume() {

    return (
        <div>
            <Head>
                <title>Resume</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles["first-row"]}>
                    <div className={styles["resume-container"]}>
                        <div className={styles["resume-header"]}>
                            Resume
                        </div>
                        <div className={styles["resume-history"]}>
                            <ul>
                                <li>AAA</li>
                                <li>BBB</li>
                                <li>CCC</li>
                                <li>DDD</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["register-container"]}>
                        <button className={styles["new-register-btn"]}>
                            Registrar
                        </button>
                        <div className={styles["resume-graphics"]}>
                        </div>
                    </div>

                </div>
                <div className={styles["second-row"]}>
                    <div className={styles["revenue-type-graphics"]}>
                        <div className={styles["revenue-income"]}>

                        </div>
                        <div className={styles["revenue-outcome"]}>

                        </div>
                    </div>
                    <div className={styles["balance"]}>

                    </div>
                </div>
            </main>
        </div>
    )
}
