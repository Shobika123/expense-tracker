import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Signup from "./components/layouts/Signup";
import Expenses from "./components/pages/Expenses";
import { useSelector } from "react-redux";

function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedIn);
  

  return (
    <>
    <Header/>
    {!isLoggedin &&
      <Signup/>
    }
      {isLoggedin &&
      <Expenses/>}
    </>
  );
}

export default App;