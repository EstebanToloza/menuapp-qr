import axios from "axios";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const App = () => {

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
    console.log(producstByCategory)

  
  return (
    <div className="App">
      <h1>AppMenu</h1>
      {
        categorysList.map((category) => (
          <div key={category}>
            <p>{category}</p>
            <ul>
              {producstByCategory[category].map(product => (
                <div key={product.dish}>
                  <li>{`${product.dish} - ${product.descripcion} - $${product.price}`}</li>
                </div>
              ))}
            </ul>
          </div>
        ))
      }

    </div>
  );
}

export default App;
