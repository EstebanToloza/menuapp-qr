import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ productsByCategory, category }) => {

  const isOutStock = "no";

  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);



  return (
    <>
        {productsByCategory[category].map(((product) => {
          const currentProduct = {...product, amount: 0};
          return (
            <div key={currentProduct.dish}>
              <li className="product-info mb-3">
                  <div>
                    <div className="product-name">{currentProduct.dish}</div>
                    <div className="font-weight-light product-description">{currentProduct.descripcion}</div>
                  </div>
                  <div className="product-price">
                    {
                      product.stock === isOutStock ? 
                        "No disponible" 
                      : 
                        <div>
                          <div>{`$${product.price}`}</div>
                          <div className="add-remove-cart-container">
                            <button onClick={() => AddItemToCart(currentProduct)}>ADD TO CART</button>
                            <button onClick={() => DeleteItemToCart(currentProduct.id)}>REMOVE TO CART</button>
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
