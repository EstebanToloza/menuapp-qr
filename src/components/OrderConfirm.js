import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import Modal from 'react-bootstrap/Modal';


const OrderConfirm = ({ cartTotal, handleCloseCart, maxHeight, handleSteps }) => {

  const { setCustomer, order, cartItems } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    const customerData = data;
    setCustomer(customerData)
    e.target.reset()
    handleCloseCart()
  }

   useEffect(() => {
     console.log(order)
   }, [order])
   
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body style={{ height: maxHeight }}>
        <div className='col-md-3 mb-3 p-0'>
          <input 
            type="text" 
            placeholder="Nombre" 
            {...register("First name", {required: true, maxLength: 80})} 
            className='form-control'
          />
        </div>
        <div className='col-md-3 mb-4 p-0'>
          <textarea 
            placeholder='Comentarios adicionales'
            {...register("Comentarios adicionales", { maxLength: 500})} 
            className='form-control'
            rows={3}
          />
        </div>
        <div className='order-resume-container p-3'>
          <span className='d-block mb-3 border-bottom'>Su pedido</span>
            {cartItems.map(item => {
              const itemTotal = item.amount * parseInt(item.price);
              return (
                <div key={item.id} className='item-resume-container mb-2'>
                  <div className='order-resume-info'>
                    <span>{item.dish} x {item.amount}u.</span>
                  </div>
                  <div className='order-resume-amouunt'>
                    {`$${itemTotal}`}
                  </div>
                </div>
              )
            })}
        </div>
      </Modal.Body>
        <div className='modal-footer-container'>
          <div className='cart-total-container d-flex justify-content-between'>
              <span className='total-text'>Total a pagar:</span>
              <span className='total-price'>{`$${cartTotal}`}</span>
          </div>
          <div className='mx-auto text-center mt-4'>
            <div className='mx-auto text-center mt-4'>
                <button type='submit' className='btn btn-block btn-make-order'>
                    REALIZAR PEDIDO
                </button>
                <button type='button' className='btn btn-block btn-edit-order' onClick={handleSteps}>
                    EDITAR PEDIDO
                </button>
            </div>
          </div>
        </div>
    </form>
  );
}

export default OrderConfirm