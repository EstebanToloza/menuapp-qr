import React, { useContext } from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import ProductsCategoriesCard from './ProductsCategoriesCard';
import { Accordion } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductsList = () => {

  const { cart, setCart } = useContext(CartContext)
  
  const [products, setProducts] = useState([])
  const dataUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        dataUrl,
        {
          responseType: 'blob'
        }
      ).then(
        (response) => {
          new Promise ((resolve, reject) => {
            Papa.parse(response.data, {
              download: true,
              header: true,
              complete: results => {
                const productsList = results.data;
                return resolve(setProducts(productsList))
              }
            })
          })
        }
      )
    }
    fetchData();
  }, []);

  
  return (
    <>
      {!products.length ? (
        <div className="d-flex justify-content-center" style={{position: 'relative', top: 150}}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Accordion defaultActiveKey="0">
          <ProductsCategoriesCard products={products} />
          <button onClick={() => setCart("carrito actualizado")}>actualizar carrito</button>
        </Accordion>
      )}
    </>
  );
};

export default ProductsList;
