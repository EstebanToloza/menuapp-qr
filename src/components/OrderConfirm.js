import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import Modal from 'react-bootstrap/Modal';


const OrderConfirm = ({ cartTotal, handleCloseCart, maxHeight, handleSteps }) => {
  const { setCustomer, cartItems, clearCart } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    setCustomer(data);
    e.target.reset();
    handleCloseCart();

    const wspNumber = '5493412296117';
    const customerText = `Hola! Mi nombre es *${data.firstName}* y quiero realizar el siguiente pedido:\n\n`;
    const productsText = cartItems
      .reduce((message, product) => message.concat(`* ${product.dish} - $${product.price * product.amount}\n`), ``,)
      .concat(`\n*Total:* $${cartTotal}\n\n`);
    const additionalComments = data.additionalComments?.length ? `*Comentarios adicionales:* ${data.additionalComments}` : '';
    const fullMessage = `${customerText}${productsText}${additionalComments}`;
    window.open(`https://wa.me/${wspNumber}/?text=${encodeURIComponent(fullMessage)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='needs-validation'>
      <Modal.Body style={{ height: maxHeight }}>
        <div className='col-md-3 mb-4 p-0 position-relative'>
          <input 
            type="text" 
            placeholder="Nombre" 
            {...register("firstName", {required: true, maxLength: 80})} 
            className='form-control'
          />
          <span className='error-message position-absolute'>{errors.firstName?.type === 'required' && "Ingrese su nombre para poder continuar"}</span>
        </div>
        <div className='col-md-3 mb-4 p-0'>
          <textarea 
            placeholder='Comentarios adicionales'
            {...register("additionalComments", { maxLength: 500})} 
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
                <div className='d-flex mt-2'>
                  <button type='button' className='btn btn-edit-order mr-1' onClick={handleSteps}>
                      EDITAR PEDIDO
                  </button>
                  <button type='button' className='btn btn-edit-order ml-1' onClick={clearCart}>
                      LIMPIAR CARRITO
                  </button>
                </div>
            </div>
          </div>
        </div>
    </form>
  );
}

export default OrderConfirm