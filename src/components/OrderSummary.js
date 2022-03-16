import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const OrderSummary = ({cartItems, cartTotal, setStep, checkoutSteps }) => {
    const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  return (
    <>
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
    </>
  )
}

export default OrderSummary