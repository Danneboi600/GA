
const Form = () => {
    return (
      <>
          <form action="/form" method="POST">
              <label>Form</label>
                <br></br>
                <input type="text" name="productNames" placeholder="Product name"></input>
                <br></br>
                <input type="text" name="productPrices" placeholder="Product price"></input>
                <br></br>
                <input type="text" name="productImages" placeholder="Product image"></input>
                <br></br>
              <input type="submit" value="send"></input>
          </form>
      </>
    )
  }
  
  export default Form