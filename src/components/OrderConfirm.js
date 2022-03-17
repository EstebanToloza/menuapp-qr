import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';

const OrderConfirm = () => {

  const { order, setOrder, customer, cartItems, setCustomer } = useContext(CartContext);


  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);

  const onSubmit = (data, e) => {
    const customerData = data;
    setCustomer(customerData)
    e.target.reset()
  }

  useEffect(() => {
    console.log(order)
  }, [order])
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row">
      <div className='col-md-3'>
        <input 
          type="text" 
          placeholder="First name" 
          {...register("First name", {required: true, maxLength: 80})} 
          className='form-control'
        />
      </div>
      <div className='col-md-3'>
        <textarea 
          placeholder='Comentarios adicionales'
          {...register("Comentarios adicionales", { maxLength: 500})} 
          className='form-control'
          rows={3}
        />
      </div>
      <div className='mx-auto text-center mt-4'>
        <button type='submit' className='btn btn-block btn-make-order' /* onClick={handleSubmit(onSubmit)}  onClick={handleSteps} */>
            REALIZAR PEDIDO
        </button>
        <button className='btn btn-block btn-edit-order' /* onClick={handleSteps} */>
            EDITAR PEDIDO
        </button>
      </div>
    </form>
  );
}

export default OrderConfirm