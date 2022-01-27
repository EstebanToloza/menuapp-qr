import React from 'react';
import Product from './Product';

const ProductsCategoriesCard = ({ products }) => {
  
  //Products grouped by categories
  const productsByCategory = {}
  for (let product of products) {
    const category = product.category;
    const foundProducts = productsByCategory[category];
    if(!foundProducts) {
      productsByCategory[category] = [product];
      continue;
    }
    foundProducts.push(product)
  }

  //Listed categories names
  const categoriesList = Object.keys(productsByCategory);

  //Categories without products excluded         
  //in this example, "postres" category is excluded
  const avaiableCategories = [];
  for (let category of categoriesList) {
    const isAvaiableCategories = productsByCategory[category].map(category => category.stock).includes("si");
    if (isAvaiableCategories) {
      avaiableCategories.push(category)
    }
  }

  return (
    <>
      {avaiableCategories.map((category) => (
        <div key={category} className="m-3 p-3 border bg-light category-container">
          <h4>{category}</h4>
          <ul className="products-list p-2 mb-0">
            <Product productsByCategory={productsByCategory} category={category} />
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProductsCategoriesCard;
