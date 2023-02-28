import React, { useState } from "react";
import MyContext from "./MyContext";

function MyProvider(props) {
  const [nome, setNome] =  useState('')
  const [sobrenome, setSobrenome] =  useState('')
  const [email, setEmail] =  useState('')

  function handleNome(event) {
    setNome(event.target.value)
  }

  function handleSobrenome(event) {
    setSobrenome(event.target.value)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }
  const context = {nome, sobrenome, email, handleNome, handleSobrenome, handleEmail}
  return(
    <MyContext.Provider value={context}>
      {props.children}
    </MyContext.Provider>
  )
};

export default MyProvider