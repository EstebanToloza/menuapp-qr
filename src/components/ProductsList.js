import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import ProductsCategoriesCard from './ProductsCategoriesCard';

const ProductsList = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTdffsUIOaXwUOPy17qE8Hz1TZNVofcWmiv0e3-04Knv0t3xPyoCl5iJQOlauM1qYAbd6X45-ql71s5/pub?output=csv',
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
        <ProductsCategoriesCard products={products} />
      )}
    </>
  );
};

export default ProductsList;
