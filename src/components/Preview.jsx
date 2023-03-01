import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";

function Preview(){
  const contexto = useContext(MyContext)
return(
  <>
  <p>
  {contexto.nome}
  </p>
  <p>
  {contexto.sobrenome}
  </p>
  
  <p>
  {contexto.email}
  </p>
  </>
)

}

export default Preview