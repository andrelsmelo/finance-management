import Head from "next/head";
import '../styles/Home.module.css';
import Menu from "@/components/Menu";

export default function Login() {

    return (
        <div>
            <Head>
                <title>Login</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Menu/>
            </main>
        </div>
    )
}