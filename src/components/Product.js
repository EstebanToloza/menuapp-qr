import React from 'react';

const Product = ({ productsByCategory, category }) => {

  const isOutStock = "no"

  return (
    <>
        {productsByCategory[category].map(product => (
          <div key={product.dish}>
            <li className="product-info mb-3">
                <div>
                  <div>{product.dish}</div>
                  <div className="font-weight-light product-description">{product.descripcion}</div>
                </div>
                <div>
                  {product.stock === isOutStock ? "No disponible" : `$${product.price}`}
                </div>
            </li>
          </div>
        ))}
    </>
  );
};

export default Product;
