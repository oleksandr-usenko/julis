import { Typography } from "@mui/material";
import { login as signin } from "../../../services/api.ts";
import { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import useLocalStorage from "../../../composables/useLocalStorage.ts";
import { navigate } from "../../../utilities/navigation.ts";
import { UIInput } from "../../UI/UIInput.tsx";
import { UIButton } from "../../UI/UIButton.tsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setItem } = useLocalStorage();

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin({ email, password }).then((res) => {
      console.log(res);
      setItem("accessToken", res.data.token);
      navigate("/");
    });
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-4 bg-white rounded-3xl shadow-xl">
        <form className="flex flex-col gap-2 w-[300px]" onSubmit={login}>
          <Typography
            align="center"
            variant="h4"
            color="textSecondary"
            gutterBottom
          >
            Sign in
          </Typography>
          <UIInput
            className="w-full"
            label="login"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <UIInput
            className="w-full"
            label="password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <UIButton
            type="submit"
            className={styles.button}
            color="primary"
            variant="contained"
          >
            Login
          </UIButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
