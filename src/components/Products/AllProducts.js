import { useState, useEffect } from "react";
import "./AllProducts.css";

const getAllproducts = async () => {
  return await fetch("https://dummyjson.com/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};
export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let data = await getAllproducts();
    setProducts(data.products);
  };

  return (
    <>
      <h1>All Products here</h1>

      <table>
        <tr>
          <th>Brand</th>
          <th>Category</th>
          {/* <th>Image</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
        </tr>

        {products.length &&
          products.map((items) => {
            debugger;
            return (
              <tr key={items.id}>
                <td>{items.brand}</td>
                <td>{items.category}</td>
                {/* <td><img src={items.images}></img></td> */}
                <td>{items.description}</td>
                <td>{items.price}</td>
                <td>{items.rating}</td>
                <td>{items.stock}</td>
              </tr>
            );
          })}
      </table>

      {/* <div>
        <img src="https://dummyjson.com/image/i/products/1/1.jpg"></img>
      </div> */}
    </>
  );
};
