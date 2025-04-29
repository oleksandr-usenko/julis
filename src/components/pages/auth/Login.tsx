import {Button, TextField, Typography} from "@mui/material";
import { login as signin } from "../../../services/api.ts";
import {useState} from "react";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        signin({ email, password }).then(res => console.log(res));
    }

    return (<div>
        <form className={styles.form} onSubmit={login}>
            <Typography align="center" variant="h4" color="textSecondary" gutterBottom>Sign in</Typography>
            <TextField label="login" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />
            <TextField label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button className={styles.button} color="primary" variant="contained" onClick={login}>Login</Button>
        </form>
    </div>);
}

export default Login;