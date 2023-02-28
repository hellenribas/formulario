import Cadastro from './views/Cadastro';
import './App.css';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Cadastro/>
    </MyProvider>
  );
}

export default App;
