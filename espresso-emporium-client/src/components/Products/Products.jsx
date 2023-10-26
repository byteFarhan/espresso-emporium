import { useLoaderData } from "react-router-dom";
// import ProductBG from "'./images/more/1.png'";
import Product from "../Product/Product";
import { useState } from "react";

const Products = () => {
  const loadedProducts = useLoaderData() || [];
  const [products, setProducts] = useState(loadedProducts);
  return (
    <div className="bg-[url('https://i.postimg.cc/15v7nrt3/1.png')] bg-no-repeat bg-cover bg-center py-20">
      {/* <h1>coffees: {products.length}</h1> */}

      <div className="grid grid-cols-1 gap-5 md:px-16 lg:px-0 lg:grid-cols-2 max-w-[1400px] mx-auto px-3">
        {products &&
          products?.map((product) => (
            <Product
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
