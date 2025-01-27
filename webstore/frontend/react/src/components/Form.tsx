
const Form = () => {
    return (
      <>
          <form action="/form" method="POST">
              <label>Form</label>
                <br></br>
                <input type="text" name="productNames" placeholder="Product name"></input>
              <input type="submit" value="send"></input>
          </form>
      </>
    )
  }
  
  export default Form