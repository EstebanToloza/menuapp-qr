import React from 'react';
import Product from './Product';

const ProductsCategorysCard = ({ products }) => {
  
  const producstByCategory = {}
  for (let product of products) {
    const category = product.category;
    const foundProducts = producstByCategory[category];
    if(!foundProducts) {
      producstByCategory[category] = [product];
      continue;
    }
    foundProducts.push(product)
  }

  const categorysList = Object.keys(producstByCategory);

  return (
    <>
      {categorysList.map((category) => (
        categorysList.length && (
        <div key={category} className="m-3 p-3 border bg-light category-container">
          <h4>{category}</h4>
          <ul className="products-list p-2 mb-0">
            <Product producstByCategory={producstByCategory} category={category} />
          </ul>
        </div>
        )
      ))}
    </>
  );
};

export default ProductsCategorysCard;
