import { useContext } from "react";
import Footer from "../Footer/Footer";
import { ProductContext } from "../../Contexts/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log(filterProducts);
  return (
    <div>
      <div>
        {filterProducts.map((products) => {
          return <div key={products.id}>{products.title}</div>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
