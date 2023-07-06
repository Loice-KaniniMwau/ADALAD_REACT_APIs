import logo from './logo.svg';
import './App.css';
import Products from './ALLPRODUCTS'
import Login from './Login';
import NavBar from './NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Details from './Details';
// import Addproduct from './Addproduct';
// import addProduct from './Addproduct/addproduct';
function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        {/* <Route path='Addproduct' element={<Addproduct />} /> */}

       
        <Route path='/Details/:productId' element={<Details/>}/>
        
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;


