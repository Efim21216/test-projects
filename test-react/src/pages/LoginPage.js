import React, {useContext} from 'react';
import MyImplInput from "../components/UI/input/MyImplInput";
import MyImplButton from "../components/UI/button/MyImplButton";
import {AuthContext} from "../context";

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true")
    }
    return (
        <div>
            <h1>Log in to your account</h1>
            <form onSubmit={login}>
                <MyImplInput type="text" placeholder="login"/>
                <MyImplInput type="password" placeholder="password"/>
                <MyImplButton>Log in</MyImplButton>
            </form>
        </div>
    );
};

export default LoginPage;