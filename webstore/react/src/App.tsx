import ListGroup from "./components/ListGroup";
//import Footer from "./components/Footer";

function App() {
  let items = ["T-Shirts", "Jeans", "Hats", "Sweatshirts", "Accessories"];

    const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Clothes" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
