import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    let [isAuth, setIsAuth] = useState(false)
    let [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, []);
    if (isLoading) {
        return (
          <Loader />
        );
    }
    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <Routes>
                <Route path="/" element=
                    {<Navbar/>}>
                    {isAuth
                        ? privateRoutes.map(route =>
                            <Route path={route.path}
                                   element={route.element}
                                   key={route.path}
                            />)
                        : publicRoutes.map(route =>
                            <Route path={route.path}
                                   element={route.element}
                                   key={route.path}
                            />)
                    }
                </Route>
            </Routes>
        </AuthContext.Provider>
    );
};

export default AppRouter;