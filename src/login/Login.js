import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase/firebase";
import { useStateValue } from "../state/StateProvider";
import { actionTypes } from "../state/reducer";

const Login = () => {
    const [{user}, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(err => alert(err.message))
    }

  return (
    <div className="login">
      <div className="login__container">
        <img
        src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-picture-download-9.png"
        alt="" 
        />
        <div className="login__text">
        <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
        Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
