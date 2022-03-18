import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return ( 
        <>
        <div className = 'navBar' >
            <div className = 'logo'>
            <img src='./image/bethemestore.png'alt=''/>
        </div>
            <div className = 'list'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
        </div>
        <CartWidget/>
        </>
    )
}
 
export default Navbar;
