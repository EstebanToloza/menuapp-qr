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

  console.log("products", products)

  
  return (
    <div className="App">
      <h1>AppMenu</h1>
    </div>
  );
}

export default App;
