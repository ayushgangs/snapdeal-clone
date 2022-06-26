import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Cart from "./components/cartpage/Cart"
import Content from './components/Content';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Watch from './components/watch/Watch';
import Shoe from './components/shoe/Shoe'
import Footer from './components/Footer';


function App() {
  let [inputState, setInputState] = useState("")
  let [cart, setCart] = useState([])
  let [totCartPrice, setTotCartPrice] = useState(0)  //to get the grand total of all the products
  

  function addToCart(product) {


    let prodInCart = cart.find(ele => ele.id === product.id)
    if (prodInCart) {
      if (prodInCart.quantity < prodInCart.stock) {
        setCart(cart.map(ele => ele.id === product.id ? { ...prodInCart, quantity: prodInCart.quantity + 1 } : ele))
        setTotCartPrice(totCartPrice + prodInCart.price)
      }

    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
      setTotCartPrice(totCartPrice + product.price)
    }


  }
  // console.log(cart)
  // console.log(totCartPrice)


  function reduceQuantity(product) {
    if (product.quantity > 1) {
      setCart(cart.map(ele => ele.id === product.id ? { ...product, quantity: product.quantity - 1 } : ele))
    }
    else {
      setCart(cart.filter(ele => ele.id !== product.id))  //the products that match the condition stay in the new array, others are removed
    }

    setTotCartPrice(totCartPrice - product.price)
  }

  function deleteItem(product) {
    setCart(cart.filter(ele => ele.id !== product.id))
    setTotCartPrice(totCartPrice - (product.quantity*product.price))
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SubHeader setInp={{ setInputState, cart }} />
        <Routes>
          <Route path="/" element={<Content inp={{ inputState, addToCart }} />}></Route>
          <Route path="/cartpage" element={<Cart item={{ cart, addToCart, reduceQuantity, deleteItem, totCartPrice }} />}></Route>
          <Route path="/watches" element={<Watch info={addToCart}/>}></Route>
          <Route path="/shoes" element={<Shoe info={addToCart}/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
