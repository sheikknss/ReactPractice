import { useState, useMemo, useEffect } from "react";

export const ProductCalcOptimization = () => {
  const [products, setProducts] = useState([
    { name: "A", price: 10 },
    { name: "B", price: 10 },
    { name: "C", price: 10 },
    { name: "D", price: 10 },
  ]);

  const [count, setCount] = useState(0);

  const totalSumValue = useMemo(() => {
    console.log("Calculating total");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleAddProduct = () => {
    setProducts((prevProduct) => [...prevProduct, { name: "E", price: 10 }]);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        counter
      </button>
      <button onClick={handleAddProduct}>Add Product</button>
      {products.map((product, index) => (
        <div key={index}>
          {product.name}
          {product.price}
        </div>
      ))}
      <h3>{count}</h3>
      <h3>{` Total : ${totalSumValue}`}</h3>
    </>
  );
};
