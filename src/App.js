import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import Details from './Details';
// import Details from './Details'

function App() {
  return (
    <div>
      <Login/>
      <Products/>
      <Details/>
      {/* <Details/> */}
    </div>
  );
}
import Details from './Details';

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Products from './Productpage';
// import Login from './Loginpage';
// import Navigationbar from './Navigationbar/navigation';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import ProductDetails from './ProductDetails/productdetails';
// // import addProduct from './Addproduct/addproduct';
// function App() {
//   return (
//     <div>
//       <Navigationbar/>
//       <BrowserRouter>
//       <Routes>
//         <Route index element={<Login/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/product' element={<Products/>}/>
//         <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
//         {/* <Route path='/addproduct' element={<Addproduct/>}/> */}
//       </Routes>
//       </BrowserRouter>
//       </div>
//   );
// }
// export default App;
