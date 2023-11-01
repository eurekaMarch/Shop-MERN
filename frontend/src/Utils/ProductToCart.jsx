import { useState } from "react";

function ProductToCart() {
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (product, amountItem) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    if (productExit) {
      setCartProduct(
        cartProduct.map((item) => {
          return item.id === product.id
            ? { ...productExit, qty: amountItem }
            : item;
        })
      );
    } else {
      setCartProduct([...cartProduct, { ...product, qty: amountItem }]);
    }
  };

  const removeFromCart = (product) => {
    const newProduct = cartProduct.filter(
      (addedProduct) => addedProduct.id !== product.id
    );
    setCartProduct(newProduct);
  };

  const increaseQty = (product) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    if (productExit) {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartProduct([...cartProduct, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    setCartProduct(
      cartProduct.map((item) =>
        item.id === product.id
          ? { ...productExit, qty: Math.max(productExit.qty - 1, 1) }
          : item
      )
    );
  };

  return {
    addToCart,
    removeFromCart,
    cartProduct,
    increaseQty,
    decreaseQty,
  };
}

export default ProductToCart;
