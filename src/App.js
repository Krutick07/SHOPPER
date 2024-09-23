import './App.css';
import { Nav } from './componnents/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/S';
import { ShopCategory} from './pages/ShopCategory';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Loginsignup } from './pages/loginsignup';
import { Footer } from './componnents/footer/Footer';
import men_banner from './componnents/Assets/men_banner.png'
import women_banner from './componnents/Assets/women_banner.jpg'
import kid_banner from './componnents/Assets/kid_banner.png'

function App() {
  return (
    <div > 
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/prodcut' element={<Products/>}>
            <Route path=':productId' element={<Products/>}/>
          </Route>

          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
