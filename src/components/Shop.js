
import React, { useState, useEffect } from "react"
import "./styles/shop.scss"

const Shop = ({ products, setProducts, cartQuantity, setCartQuantity, totalPrice, setTotalPrice }) => {
 


   
 function addToCart(e) {  
     let cartItems = products;
     let indexSelectedItem;
    // add 1 to the quantity of the item selected
    indexSelectedItem = products.findIndex(item => item.id === e.target.id);
    cartItems[indexSelectedItem].quantity = cartItems[indexSelectedItem].quantity + 1;
    setProducts(cartItems)

    //calculate th new quantity in the shoping cart 
    var totalQuantity = cartItems.reduce(function(prev, cur) {
      return prev + cur.quantity
    },0)
    setCartQuantity(totalQuantity)

    var totalPriceValue = cartItems.reduce(function(prev, cur) {
      return prev + (cur.quantity * cur.price)
    },0)
    setTotalPrice(totalPriceValue)
       
  }


  function renderList() {
    return (products.map(item => {
      return (<li className="liItemWrap" key={item.id}>
      <img className="itemImg" src={item.image} alt="imgItem"/> 
      <div className="detailsProduct">
      <p>{item.name} </p>
      <p className="priceItem">{item.price} $ </p>  
      <button id={item.id} className="addToCart" onClick={(e) => addToCart(e)}>Add to cart</button>
      </div>
      </li>)
     
    }))
  }

    return (
        <div className='shopContainer'>
          <h1 className="title-products">Products</h1>
          <div className="itemsSection">
           {renderList()}
           </div>
        </div>
      );
    };
    

export default Shop;