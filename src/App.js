import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signin from './components/Signin';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Error from './components/Error';
import { Productprovider } from './context/product';
import Product from './components/Product';
import Singleproduct from './components/Singleproduct';
import AddtoCart from './components/AddtoCart';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
   <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
