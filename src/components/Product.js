import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';

const Product = ({ productsByCategory, category }) => {

  const isOutStock = "no";

  const {cart, setCart} = useContext(CartContext);

  const handleAddToCart = (product) => {
    //setCart(cart + 1)
    setCart([...cart, 
      product
    ])
    console.log(cart)
  }

  const handleRemoveToCart = (product) => {
    const dish = product.dish;
    const cartItems = cart.filter(product => product.dish !== dish)
    setCart(cartItems)
  }

  return (
    <>
        {productsByCategory[category].map(product => (
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
                          <button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                          <button onClick={() => handleRemoveToCart(product)}>REMOVE TO CART</button>
                        </div>
                      </div>
                  }
                </div>
            </li>
          </div>
        ))}
    </>
  );
};

export default Product;
