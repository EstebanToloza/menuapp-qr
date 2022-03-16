import React, { useContext, useState } from 'react';
import { BagCheck } from 'react-bootstrap-icons';
import { CartContext } from '../context/CartContext';
import CartCheckout from './CartCheckout';

const Cart = () => {

    const { cartItems } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <div className='cart-container' onClick={() => setShowCart(!showCart)}>
                <BagCheck />
                <div className='cart-qty'>
                    <span>{cartItems.length}</span>
                </div>
            </div>
            {showCart && <CartCheckout cartItems={cartItems} showCart={showCart} setShowCart={setShowCart}/>}
        </>
    )
}

export default Cart;