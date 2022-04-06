import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <div className = 'navBar' >
            <div className = 'logo'>
            <img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore.png'alt=''/>
        </div>
            <div className = 'list'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Productos'}>Productos</Link></li>
                    <li><Link to={'/Nosotros'}>Sobre nosotros</Link></li>
                    <li><Link to={'/Contacto'}>Contacto</Link></li>
                </ul>
            </div>
        </div>
        <CartWidget/>
        </>
    )
}
 
export default Navbar;
