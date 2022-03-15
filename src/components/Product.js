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
            <div key={product.dish}>
              <li className="product-info mb-3">
                  <div>
                    <div className="product-name">{product.dish}</div>
                    <div className="font-weight-light product-description">{product.descripcion}</div>
                  </div>
                  <div className="product-price">
                    {
                      product.stock === isOutStock ? 
                        "No disponible" 
                      : 
                        <div>
                          <div>{`$${product.price}`}</div>
                          <div className="add-remove-cart-container">
                            <button onClick={() => AddItemToCart(product)}>+</button>
                            <span>{itemQty}</span>
                            <button 
                              onClick={() => DeleteItemToCart(product.id)}
                              disabled={inCart ? false : true}
                            >-</button>
                          </div>
                        </div>
                    }
                  </div>
              </li>
            </div>
          )
        }))}
    </>
  );
};

export default Product;
