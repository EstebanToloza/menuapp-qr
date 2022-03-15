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
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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