import ProductRow from "./ProductRow"

function ProductTable({products, searchNombre, isInStock}) {
  return (
    <div>
      <h3>ProductTable</h3>

      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0" }}>
      <div>Name</div>
      <div>Price</div>
    </div>
    <hr />

      {products.filter((product) => {
        if (searchNombre === "") {
          return product
        } else {
          return product.name.toLowerCase().includes(searchNombre.toLowerCase())
        }
      })
      .filter((product) => {
        if (isInStock === false) {
          return product
        } else {
          return product.inStock === true
        }
      })
      .map((eachProduct, index)  => {
        return (
          
          <ProductRow key={index} product={eachProduct} />
        )
      })}
      

    </div>

    
  )
}

export default ProductTable