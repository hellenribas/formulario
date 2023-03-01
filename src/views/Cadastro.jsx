import React, {useContext} from "react";
import Forms from "../components/Forms";
import Preview from "../components/Preview";
import MyContext from "../context/MyContext";

function Cadastro(){
  const contexto = useContext(MyContext)

return (
  <>
  <Forms/>
  {contexto.visualizar && <Preview/>}
  </>
)
}

export default Cadastro