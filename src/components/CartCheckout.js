import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import OrderConfirm from './OrderConfirm';
import OrderSummary from './OrderSummary';


const CartCheckout = ({cartItems, showCart, setShowCart}) => {
    const handleCloseCart = () => setShowCart(false);
    const cartTotal = cartItems.reduce((prev, current) => prev + current.amount * current.price, 0);
    const checkoutSteps = {
        STEP_SUMMARY : 0,
        STEP_CONFIRM: 1,
    };
    const [step, setStep] = useState(checkoutSteps.STEP_SUMMARY)

    const UserWindowHeight = () => {
        const [height, setHeight] = useState([window.innerHeight]);
        useEffect(() => {
          const HeightResize = () => {
            setHeight(window.innerHeight);
          };
          window.addEventListener('resize', HeightResize);
        }, []);
        return height;
      }
    
    const windowHeight = UserWindowHeight();
    const maxHeight =  `${windowHeight / 100 * 40}px`;

    

    const handleSteps = () => {
        if (step === checkoutSteps.STEP_SUMMARY) {
            setStep(checkoutSteps.STEP_CONFIRM)
        }
        if (step === checkoutSteps.STEP_CONFIRM) {
            setStep(checkoutSteps.STEP_SUMMARY)
        }
    }

    return (
        <Modal show={showCart} onHide={handleCloseCart} centered>
            <Modal.Header closeButton>
                <Modal.Title>Orden Mesa 2</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: maxHeight }}>
                {step === checkoutSteps.STEP_SUMMARY && <OrderSummary cartItems={cartItems} cartTotal={cartTotal} setStep={setStep} checkoutSteps={checkoutSteps} />}
                {step === checkoutSteps.STEP_CONFIRM && <OrderConfirm cartItems={cartItems} cartTotal={cartTotal} setStep={setStep} checkoutSteps={checkoutSteps} />}
            </Modal.Body>
            <div className='modal-footer-container'>
                <div className='cart-total-container d-flex justify-content-between'>
                    <span className='total-text'>Total a pagar:</span>
                    <span className='total-price'>{`$${cartTotal}`}</span>
                </div>
                <div className='mx-auto text-center mt-4'>
                    {step === checkoutSteps.STEP_SUMMARY && 
                        <>
                            <button className='btn btn-block btn-make-order' onClick={handleSteps}>
                                CONFIRMAR PEDIDO
                            </button>
                            <button className='btn btn-block btn-edit-order' onClick={handleCloseCart}>
                                AGREGAR PRODUCTOS
                            </button>
                        </>
                    }
                    {step === checkoutSteps.STEP_CONFIRM && 
                        <>
                            <button className='btn btn-block btn-make-order' onClick={handleSteps}>
                                REALIZAR PEDIDO
                            </button>
                            <button className='btn btn-block btn-edit-order' onClick={handleSteps}>
                                EDITAR PEDIDO
                            </button>
                        </>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default CartCheckout