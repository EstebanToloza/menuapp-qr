import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Modal from 'react-bootstrap/Modal';


const OrderSummary = ({cartItems, cartTotal, setStep, checkoutSteps, maxHeight, step, handleSteps, handleCloseCart }) => {
    const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  return (
    <>
        <Modal.Body style={{ height: maxHeight }}>
            {cartItems.map(item => {
                const itemTotal = item.amount * parseInt(item.price);
                return (
                    <div key={item.id} className="cart-container-product mb-1 p-3" >
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
        </Modal.Body>
        <div className='modal-footer-container'>
            <div className='cart-total-container d-flex justify-content-between'>
                <span className='total-text'>Total a pagar:</span>
                <span className='total-price'>{`$${cartTotal}`}</span>
            </div>
            <div className='mx-auto text-center mt-4'>
                <button className='btn btn-block btn-make-order' onClick={handleSteps}>
                    CONFIRMAR PEDIDO
                </button>
                <button className='btn btn-block btn-edit-order' onClick={handleCloseCart}>
                    AGREGAR PRODUCTOS
                </button>
            </div>
        </div>
    </>
  )
}

export default OrderSummary