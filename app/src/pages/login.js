import Button from "../components/Button";
import Head from "next/head";
import Link from "next/link";
import '../styles/Home.module.css';

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
                <Link href="/admin">
                    <Button text="Admin" variant="primary" />
                </Link>
                <Link href="/categories">
                    <Button text="Categories" variant="primary" />
                </Link>
                <Link href="/clients">
                    <Button text="Clients" variant="primary" />
                </Link>
                <Link href="/download">
                    <Button text="Download" variant="primary" />
                </Link>
                <Link href="/home">
                    <Button text="Home" variant="primary" />
                </Link>
                <Link href="/login">
                    <Button text="Login" variant="primaryOutlined" />
                </Link>
                <Link href="/profile">
                    <Button text="Profile" variant="primary" />
                </Link>
                <Link href="/register">
                    <Button text="Register" variant="primary" />
                </Link>
                <Link href="/resume">
                    <Button text="Resume" variant="primary" />
                </Link>
                <Link href="/users">
                    <Button text="Users" variant="primary" />
                </Link>
            </main>
        </div>
    )
}