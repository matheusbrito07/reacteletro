import Header from "./components/header/header"
import Body from "./components/body/body"
import Footer from "./components/footer/footer"
import Epiclogo from "./components/img/epiclogo.png"
import Home from "./components/pages/home"
import Produtos from "./components/pages/produtos"
import Contatos from "./components/pages/contatos"
import {Switch, Route} from "react-router-dom"



function App() {
  return (
    <>
      <Header titulo="Home" imagem={Epiclogo} />
      <Body>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/contatos" component={Contatos} />
        </Switch>
       
        
      </Body>
      <Footer />
    </>
  );
}

export default App;
