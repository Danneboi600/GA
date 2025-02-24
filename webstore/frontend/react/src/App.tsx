import Products from "./components/Products";
import Form from "./components/Form";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "./components/Footer";

interface Product {
  _id: string;
  productNames: string;
  productPrices: string;
  productImages: string;
}

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    axios.get("https://orange-carnival-979p44qgprgw377vp-3000.app.github.dev/products")
    .then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
    .catch(error => {
      console.error("There was an error making the request:", error);
    })
  }, [])

  return (
    <div>
      <Products products={products} heading="Products" ></Products>
      <Footer></Footer>
      <Form></Form>
    </div>
  )

  /*
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );

  */
}


export default App;
