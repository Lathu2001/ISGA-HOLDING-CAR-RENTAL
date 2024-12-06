import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer.jsx";




function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/signin" element={<Login/>}/>
        </Routes>
        <Footer/>
        
      </BrowserRouter>
       
  );
}

export default App;
