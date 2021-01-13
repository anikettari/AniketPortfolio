import {Route,Switch,BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Footer from "./components/footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div >
    <Header />
      <Switch>
     
        <Route exact path="/"  component={Home}/>
        <Route exact path="/aboutme" component={Aboutme} />
        
      </Switch>
      <Footer />
    
    </div>
    // </BrowserRouter>
  );
}

export default App;
