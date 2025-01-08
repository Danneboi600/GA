import ListGroup from "./components/ListGroup";

function App() {
  let items = ["T-Shirts", "Jeans", "Hats", "Sweatshirts", "Accessories"];
  return (
    <div>
      <ListGroup items={items} heading="Clothes"/>
    </div>
  );
}

export default App;
