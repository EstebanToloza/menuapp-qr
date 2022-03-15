import React, { useContext, useState } from 'react';
import { BagCheck } from 'react-bootstrap-icons';
import { CartContext } from '../context/CartContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Cart = () => {

    const { cartItems } = useContext(CartContext);
    console.log(cartItems)

    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = () => setShowCart(false);
    //const handleShowCart = () => setShowCart(true);

    const CartResume = () => {

        return (
            <Modal show={showCart} onHide={handleCloseCart} centered>
            <Modal.Header closeButton>
              <Modal.Title>Orden Mesa 2</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map(item => {
                    const itemTotal = item.amount * parseInt(item.price);

                    return (
                        <div key={item.id} className="cart-container-product mb-3 py-3">
                            <div className='cart-product-info'>
                                <span className='item-name mr-2'>{item.dish}</span>
                                x
                                <span className='item-amount ml-2'>{item.amount}u.</span>
                            </div>
                            <div className='cart-product-price-and-actions'>
                                <span className='item-total'>{`$${itemTotal}`}</span>
                                <div className='item-actions'>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </Modal.Body>
          </Modal>
        )
    }

    return (
        <>
            <div className='cart-container' onClick={() => setShowCart(!showCart)}>
                <BagCheck />
                <div className='cart-qty'>
                    <span>{cartItems.length}</span>
                </div>
            </div>
            {showCart && <CartResume />}
        </>
    )
}

export default Cart;