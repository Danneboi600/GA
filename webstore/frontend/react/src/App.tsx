import Products from "./components/Products"
import Form from "./components/Form"
import {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  useEffect(()=> {

  }, [])

  let productNames = ['product1', 'product2']
  return (
    <div>
      <Products productNames={productNames} heading="Products" ></Products>
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
