import React from 'react';
import { Accordion } from 'react-bootstrap';
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
        <Accordion.Item eventKey={category} key={category} className="mx-3">
          <>
          <Accordion.Header>{category}</Accordion.Header>
          <Accordion.Body className="pb-0">
            <div key={category} >
              <ul className="products-list py-2 mb-0">
                <Product productsByCategory={productsByCategory} category={category} />
              </ul>
            </div>
          </Accordion.Body>
          </>
        </Accordion.Item>
      ))}
    </>
  );
};

export default ProductsCategoriesCard;
