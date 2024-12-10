function ListGroup() {
  const items = ["T-Shirts", "Jeans", "Hats", "Sweatshirts", "Accessories"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
