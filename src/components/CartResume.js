import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../context/CartContext';


const CartResume = ({cartItems, showCart, setShowCart}) => {
    const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
    const handleCloseCart = () => setShowCart(false);
    const cartTotal = cartItems.reduce((prev, current) => prev + current.amount * current.price, 0);

    return (
        <Modal show={showCart} onHide={handleCloseCart} centered>
            <Modal.Header closeButton>
                <Modal.Title>Orden Mesa 2</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map(item => {
                    const itemTotal = item.amount * parseInt(item.price);
                    return (
                        <div key={item.id} className="cart-container-product mb-1 py-3 border-bottom" >
                            <div className='cart-product-info d-flex flex-column'>
                                <span className='item-name'>{item.dish}</span>
                                <span className='item-amount'>x {item.amount}u.</span>
                            </div>
                            <div className='cart-product-price-and-actions'>
                                <span className='item-total'>{`$${itemTotal}`}</span>
                                <div className='item-actions'>
                                    <div className="add-remove-cart-container">
                                        <button 
                                            onClick={() => DeleteItemToCart(item.id)}
                                            className='btn-add'
                                            //disabled={inCart ? false : true}
                                        >
                                            <span>-</span>
                                        </button>
                                        <span className='item-qty'>{item.amount}</span>
                                        <button 
                                            onClick={() => AddItemToCart(item)}
                                            className='btn-remove'
                                        >
                                            <span>+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='cart-total-container pt-3 d-flex justify-content-between'>
                    <span className='total-text'>Total a pagar:</span>
                    <span className='total-price'>{`$${cartTotal}`}</span>
                </div>
                <div className='mx-auto text-center mt-4'>
                    <button className='btn btn-block btn-make-order'>REALIZAR PEDIDO</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CartResume