import React, { useEffect, useState } from "react"
import "./styles/cart.scss"
import { Link } from "react-router-dom"

const Cart = ({products,setProducts, cartQuantity, setCartQuantity, totalPrice, setTotalPrice}) => {

    function decrementQuantity(e) {
        let indexSelectedItem = products.findIndex(item => item.id === e.target.id);
        let itemsArr = products;
        itemsArr[indexSelectedItem].quantity =  itemsArr[indexSelectedItem].quantity - 1;
        setProducts(itemsArr)
        setCartQuantity(cartQuantity - 1)
        getTotalPrice(itemsArr)
        
    }

    function incrementQuantity(e) {
        let indexSelectedItem = products.findIndex(item => item.id === e.target.id);
        let itemsArr = products;
        itemsArr[indexSelectedItem].quantity =  itemsArr[indexSelectedItem].quantity + 1;
        setCartQuantity(cartQuantity + 1)
        setProducts(itemsArr)
        getTotalPrice(itemsArr)
    }
   
   function removeItem(e) {
       let indexSelectedItem = products.findIndex(item => item.id === e.target.id);
       let itemsArr = products;
       setCartQuantity(cartQuantity - itemsArr[indexSelectedItem].quantity)
       itemsArr[indexSelectedItem].quantity = 0;
       setProducts(itemsArr)
       getTotalPrice(itemsArr)
       
   }

   function getTotalPrice(itemsArr) {
       var totalPriceValue = itemsArr.reduce(function(prev, cur) {
        return prev + (cur.quantity * cur.price)
       },0)
       setTotalPrice(totalPriceValue)
   }


   function handle(e) {
    let indexSelectedItem = products.findIndex(item => item.id === e.target.id);
    let itemsArr = products;
    if(e.target.value < 1 ) {
        itemsArr[indexSelectedItem].quantity = 1
        setProducts(itemsArr)
          let totalPriceValue = itemsArr.reduce(function(prev, cur) {
            return prev + (cur.quantity * cur.price)
          },0)
          setTotalPrice(totalPriceValue)
          let totalQuantity = itemsArr.reduce(function(prev, cur) {
            return prev + cur.quantity
          },0)
          setCartQuantity(totalQuantity)
     } else if (e.target.value >= 0) {
          itemsArr[indexSelectedItem].quantity = parseInt(e.target.value);
         setProducts(itemsArr)
          let totalPriceValueIf = itemsArr.reduce(function(prev, cur) {
          return prev + (cur.quantity * cur.price)
      },0)
          setTotalPrice(totalPriceValueIf)
          let totalQuantityIf = itemsArr.reduce(function(prev, cur) {
          return prev + cur.quantity
      },0)
          setCartQuantity(totalQuantityIf)
    }

   }


    return (
        <div className="containerItemsCart">
            <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
        {products.map(item => {
           if(item.quantity > 0) { 
           return <tbody>

                <tr>
                    <td><img className="cartImgItem" src={item.image} alt="imgItem"></img><div className="itemName">{item.name}</div></td>
                    <td><div className="cardCheck">{item.price} $ </div></td>
                    <td><div className="quantityCart">
                <div className="quantityCheck">
                <button id={item.id} onClick={(e) => decrementQuantity(e)} className="incrDecr">-</button>
                <input className="inputQuantity" id={item.id} value={item.quantity || 0} onChange={(e) => handle(e)}/>
                <button id={item.id} onClick={(e) => incrementQuantity(e)} className="incrDecr">+</button>
                </div>
                <button id={item.id} className="btnRemove" onClick={(e) => removeItem(e)}>Remove</button>
                </div></td>
                    <td><div className="cardCheck">{item.price*parseInt(item.quantity)} $</div></td>
                </tr>
                
                </tbody>
                
            }})}
            
                </table>
                <div className="totalPriceCell">Subtotal : {totalPrice} $</div>
                 <div className="btnCheckoutContainer">
                <Link to="/shop" style={{ textDecoration: 'none' }}> <button className="checkoutBtnShop">Continue shopping</button></Link> 
                     <button className="checkoutBtn" onClick={() => alert("Thank you !")}>Checkout</button>
                 </div>
         </div>
        
        )
}

export default Cart;