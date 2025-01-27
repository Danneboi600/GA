import Products from "./components/Products"
import Form from "./components/Form"


function App() {

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
