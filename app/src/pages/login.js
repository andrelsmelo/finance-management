import Head from "next/head";
import '../styles/Home.module.css';
import React, { useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from '../hooks/AuthContext';
import { useRouter } from 'next/router';

import api from '../service/api';


function LoginForm() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const credentials = {
            email: email,
            password: password
          };

        api.post('login', credentials).then(res => {
            const {token} = res.data;

            console.log(token)
            login(token);
            router.push('/resume');
        }).catch(error => {
            console.error(error);
          });
    }


    return (
        <form onSubmit={handleSubmit} id="login_form" className="active">
            <span className="form_title">Login</span>
            <div className="form_input">
                <i className='bx bxs-user icon'></i>
                <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="form_input">
                <i className='bx bx-key icon' ></i>
                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <a className="form_link" href="#">Forgot the password?</a>
            <button className="form_button" type="button" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </form>
    );
}

function RegisterForm() {
    return (
        <form id="register_form">
            <span className="form_title">Register</span>
            <div className="form_input">
                <i className='bx bxs-user icon'></i>
                <input type="text" placeholder="Username" />
            </div>
            <div className="form_input">
                <i className='bx bxs-envelope icon'></i>
                <input type="email" placeholder="E-mail" />
            </div>
            <div className="form_input">
                <i className='bx bx-key icon' ></i>
                <input type="password" placeholder="Password" />
            </div>
            <div className="form_input">
                <i className='bx bx-key icon' ></i>
                <input type="password" placeholder="Repeat password" />
            </div>
            <button className="form_button" type="button">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>            <span className="terms">When clicking the button above you are acception our <a href="#">Terms and Conditions</a>.</span>
        </form>
    );
}

function FormSwitcher() {
    const [currentState, setCurrentState] = useState("login");

    function handleClick() {
        const switcher = document.getElementById("form_switcher");
        const loginForm = document.getElementById("login_form");
        const registerForm = document.getElementById("register_form");
        const formMessage = document.getElementById("form_message");
        const messageTitle = document.getElementById("message_title");

        if (currentState === "login") {
            switcher.classList.add("active");
            loginForm.classList.remove("active");
            registerForm.classList.add("active");
            formMessage.classList.add("active");
            formMessage.classList.add("animate");
            setCurrentState("register");
            setTimeout(() => {
                messageTitle.innerText = "Vamos começar!";
                formMessage.classList.remove("animate");
            }, 600);
        } else {
            switcher.classList.remove("active");
            loginForm.classList.add("active");
            registerForm.classList.remove("active");
            formMessage.classList.remove("active");
            formMessage.classList.add("animate");
            setCurrentState("login");
            setTimeout(() => {
                messageTitle.innerText = "Bem vindo de volta!";
                formMessage.classList.remove("animate");
            }, 600);
        }
    }

    return (
        <div>
            <div id="form_message">
                <button id="form_switcher" onClick={handleClick}>
                </button>
                <h2 id="message_title">Bem vindo de volta!</h2>
                <p id="message_text">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
}

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
            <main className="login-container">
                <div id="forms_container">
                    <FormSwitcher />
                    <LoginForm />
                    <RegisterForm />
                </div>
            </main>
        </div>
    )
}