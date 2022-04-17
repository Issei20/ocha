import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/Home"
import Shop from "./components/Shop"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import blackImg from "./components/images/blackTea.jpg"
import greenImg from "./components/images/greentea.jpg"
import gyokuroImg from "./components/images/gyokuro.jpg"
import matchImg from "./components/images/motcha.jpg"
import oolongImg from "./components/images/oolongTea.jpg"
import puerhImg from "./components/images/puerh.jpg"
import whiteImg from "./components/images/whitetea.jpg"
import yellowImg from "./components/images/yellow.jpg"
import yerbaImg from "./components/images/yerbamate.jpeg"
import "./style.scss"

const RouteSwitch = () => {

    function createProduct(id, name, price, details, image, quantity) {
        return {  id: id, 
          name: name,
          price: price,
          details: details,
          image: image,
          quantity: quantity
        }
      }
    
    const yellowTea = createProduct("yellow", "Yellow tea", 5, "yellow", yellowImg, 0);
    const blackTea = createProduct("black", "Black tea", 6 , "black", blackImg, 0);
    const matchaTea = createProduct("match", "Matcha tea", 6, "matcha", matchImg, 0);
    const greenTea = createProduct("green", "Green tea", 7, "green", greenImg, 0);
    const whiteTea = createProduct("white", "White tea", 7, "white", whiteImg, 0);
    const yerbaTea = createProduct("yerba", "Yerba mate tea", 8, "yerba", yerbaImg, 0);
    const oolongTea = createProduct("oolong", "Oolong tea", 8, "oolong", oolongImg, 0);
    const puerhTea = createProduct("puerh", "Pu-Erh tea", 9, "puerh", puerhImg, 0);
    const gyokuroTea = createProduct("gyokuro", "Gyokuro tea", 11, "gyokuro", gyokuroImg, 0);
      
    const [products, setProducts] = useState([yellowTea, blackTea, matchaTea, greenTea, whiteTea, yerbaTea, oolongTea, puerhTea, gyokuroTea]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0) 

    return (
        <BrowserRouter>
            <NavBar cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
        <Routes>
            <Route path="/ocha" element={<Home />}/>
            <Route path="/shop" element={<Shop products={products} setProducts={setProducts} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}/>
            <Route path="shop/cart" element={<Cart products={products} setProducts={setProducts} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}/>
        </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;