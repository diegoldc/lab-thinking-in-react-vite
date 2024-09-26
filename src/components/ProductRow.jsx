
function ProductRow({product}) {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0" }}>
      <div style={{color: product.inStock ? "black" : "red"}}>{product.name}</div>
      <div>{product.price}</div>
    </div>
    <hr />
    
    </>
  )
}

export default ProductRow