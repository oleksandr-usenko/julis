import {Button, TextField} from "@mui/material";
import {useState} from "react";
import { register } from "../../../services/api.ts";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        register({ email, password }).then(res => console.log(res));
    }

    return (<div>
        Sign up
        <TextField label="login" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleRegister}>Register</Button>
    </div>);
}

export default Register;