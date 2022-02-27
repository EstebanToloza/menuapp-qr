import Layout from "./components/Layout";
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
