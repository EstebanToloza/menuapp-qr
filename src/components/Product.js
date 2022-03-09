import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ productsByCategory, category }) => {

  const isOutStock = "no";

  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);



  return (
    <>
        {productsByCategory[category].map(((product, i) => {
          const productId = i;
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
                            <button onClick={() => AddItemToCart(product)}>ADD TO CART</button>
                            <button onClick={() => DeleteItemToCart(productId)}>REMOVE TO CART</button>
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
