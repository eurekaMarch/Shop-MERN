import { useState } from "react";

function ProductToCart() {
  const cartItems = JSON.parse(window.localStorage.getItem("cartItems")) || [];
  const [cartProduct, setCartProduct] = useState(cartItems);

  const addToCart = (product, amountItem) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    if (productExit) {
      // setCartProduct(
      //   cartProduct.map((item) => {
      //     return item.id === product.id
      //       ? { ...productExit, qty: amountItem }
      //       : item;
      //   })
      // );
      const newCartItems = cartItems.map((item) => {
        return item.id === product.id
          ? { ...productExit, qty: amountItem }
          : item;
      });

      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setCartProduct(newCartItems);
    } else {
      // setCartProduct([...cartProduct, { ...product, qty: amountItem }]);

      cartItems.push({ ...product, qty: amountItem });
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartProduct(cartItems);
    }
  };

  const removeFromCart = (product) => {
    // const newProduct = cartProduct.filter(
    //   (addedProduct) => addedProduct.id !== product.id
    // );
    // setCartProduct(newProduct);

    const newCartItems = cartItems.filter(
      (addedProduct) => addedProduct.id !== product.id
    );

    window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setCartProduct(newCartItems);
  };

  const increaseQty = (product) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    if (productExit) {
      // setCartProduct(
      //   cartProduct.map((item) =>
      //     item.id === product.id
      //       ? { ...productExit, qty: productExit.qty + 1 }
      //       : item
      //   )
      // );

      const newCartItems = cartItems.map((item) => {
        return item.id === product.id
          ? { ...productExit, qty: productExit.qty + 1 }
          : item;
      });

      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setCartProduct(newCartItems);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    // setCartProduct(
    //   cartProduct.map((item) =>
    //     item.id === product.id
    //       ? { ...productExit, qty: Math.max(productExit.qty - 1, 1) }
    //       : item
    //   )
    // );

    const newCartItems = cartItems.map((item) => {
      return item.id === product.id
        ? { ...productExit, qty: Math.max(productExit.qty - 1, 1) }
        : item;
    });

    window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setCartProduct(newCartItems);
  };

  const clearLocalStorage = () => {
    window.localStorage.removeItem("cartItems");
  };

  return {
    addToCart,
    removeFromCart,
    cartProduct,
    increaseQty,
    decreaseQty,
    clearLocalStorage,
  };
}

export default ProductToCart;
