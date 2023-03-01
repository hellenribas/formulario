import React, { useState } from "react";
import MyContext from "./MyContext";

function MyProvider(props) {
  const [nome, setNome] =  useState('')
  const [sobrenome, setSobrenome] =  useState('')
  const [email, setEmail] =  useState('')
  const [visualizar, setVisualizar] = useState(false)

  function handleNome(event) {
    setNome(event.target.value)
  }

  function handleSobrenome(event) {
    setSobrenome(event.target.value)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handleClick() {
  setVisualizar(true)
  }

  const context = {nome, sobrenome, email, handleNome, handleSobrenome, handleEmail, visualizar, handleClick}
  return(
    <MyContext.Provider value={context}>
      {props.children}
    </MyContext.Provider>
  )
};

export default MyProvider