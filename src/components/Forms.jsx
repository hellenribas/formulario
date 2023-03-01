import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Forms(){
const contexto = useContext(MyContext)

return (
  <form>
    <label>
      nome 
      <input type='text'
       name="nome" 
       value={contexto.nome}
       onChange={(event) => contexto.handleNome(event)}
       />
    </label>
    <label>
     sobrenome
      <input type='text' name="sobrenome" value={contexto.sobrenome}
       onChange={(event) => contexto.handleSobrenome(event)}/>
    </label>
    <label>
    e-mail 
      <input type='text' name="email" value={contexto.email}
       onChange={(event) => contexto.handleEmail(event)}/>
    </label>
    <button type="button" onClick={contexto.handleClick}>
      Cadastrar
    </button>
  </form>
)
}

export default Forms