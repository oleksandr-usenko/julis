import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import { register } from "../../../services/api.ts";
import styles from "./Login.module.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        register({ email, password }).then(res => console.log(res));
    }

    return (<div className="flex items-center justify-center h-full">
        <form className="flex flex-col gap-2 w-[300px]" onSubmit={handleRegister}>
            <Typography align="center" variant="h4" color="textSecondary" gutterBottom>Register</Typography>
            <TextField className="w-full" label="login" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />
            <TextField className="w-full" label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" className={styles.button} color="primary" variant="contained">Register</Button>
        </form>
    </div>);
}

export default Register;