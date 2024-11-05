import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchUsers = () => {
    return fetch("http://localhost:5000/api").then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching users: ${res.status}`);
      }
      return res.json();
    });
  };

  const fetchProducts = () => {
    return fetch("http://localhost:5000/products").then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching products: ${res.status}`);
      }
      return res.json();
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, productsResponse] = await Promise.all([
          fetchUsers(),
          fetchProducts(),
        ]);
        setUsers(usersResponse.users);
        setProducts(productsResponse.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>Users</h3>
      <ul className="list-group">
        {users &&
          users.map((user, i) => (
            <li className="list-group-item" key={i}>
              {user}
            </li>
          ))}
      </ul>
      <h3>Products</h3>
      <ul className="list-group">
        {products &&
          products.map((product, i) => (
            <li className="list-group-item" key={i}>
              {product}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
