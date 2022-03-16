import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ productsByCategory, category }) => {

  const isOutStock = "no";
  const { DeleteItemToCart, AddItemToCart, cartItems } = useContext(CartContext);
  const cartIds = cartItems.map(cart => cart.id)
  
  const filterCartItem = (inCart, product) => {
    const nullItem = 0;
    const cartItem = inCart? cartItems.filter((item) => item.id === product.id) : nullItem;

    return cartItem;
  }

  return (
    <>
        {productsByCategory[category].map(((product) => {
          const inCart = cartIds.includes(product.id);
          const cartItem = filterCartItem(inCart, product);
          const itemQty = cartItem === 0 ? cartItem : cartItem[0].amount;

          return (
            <li className="product-info" key={product.dish}>
                <div>
                  <div className="product-name">{product.dish}</div>
                  <div className="font-weight-light product-description">{product.descripcion}</div>
                </div>
                <div className="product-price">
                  {
                    product.stock === isOutStock ? 
                      "No disponible" 
                    : 
                      <div className='cart-product-price-and-actions'>
                        <span className='item-total'>{`$${product.price}`}</span>
                        <div className='item-actions'>
                          <div className="add-remove-cart-container">
                            <button 
                                onClick={() => DeleteItemToCart(product.id)}
                                className='btn-add'
                                disabled={inCart ? false : true}
                            >
                                <span>-</span>
                            </button>
                            <span className='item-qty'>{itemQty}</span>
                            <button 
                                onClick={() => AddItemToCart(product)}
                                className='btn-remove'
                            >
                                <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                  }
                </div>
            </li>
          )
        }))}
    </>
  );
};

export default Product;
