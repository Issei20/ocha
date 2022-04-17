import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./styles/navBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faCartShopping, faBars  } from '@fortawesome/free-solid-svg-icons'


const logoIcon = <FontAwesomeIcon className="logoIcon" icon={faLeaf} />
const cartIcon = <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
const barsIcon = <FontAwesomeIcon className="barsIcon" icon={faBars} />

const NavBar = ({cartQuantity, setCartQuantity}) => {
    const [openBurger, setOpenBurger] = useState(false)

    function renderMenu() {
        
       return( 
       <ul className="ulBurger">
        <Link to="/ocha" style={{ textDecoration: 'none'}}><li className="navLi">Home</li> </Link> 
        <Link to="shop" style={{ textDecoration: 'none' }}> <li className="navLi">Products</li> </Link> 
        <Link to='/shop/cart' style={{ textDecoration: 'none' }}><li className="barCart">  Cart {cartIcon} {cartQuantity} </li></Link>
       </ul>)

    }

    function handleClick() {
        setOpenBurger(!openBurger)
    }

    return (
        <nav>
        <Link to="/ocha" style={{ textDecoration: 'none'}} className="ocha-log"><h1 className="ocha-log">ocha {logoIcon}</h1></Link> 
    
        <ul className="navBarUl">
        <Link to="/ocha" style={{ textDecoration: 'none'}}><li className="navLi">Home</li> </Link> 
        <Link to="shop" style={{ textDecoration: 'none' }}> <li className="navLi">Products</li> </Link> 
        <Link to='/shop/cart' style={{ textDecoration: 'none' }}><li className="barCart">  Cart {cartIcon} {cartQuantity} </li></Link>
        </ul>
        <div className="menu-burger" onClick={() => handleClick() }>
            {barsIcon}
        
        {openBurger ? renderMenu() : null}
        </div>
        <Link to="/ocha" style={{ textDecoration: 'none'}} className="ocha-burger"><h1 className="ocha-burger">ocha {logoIcon}</h1></Link> 
     
   
        </nav>
    )
}

export default NavBar;