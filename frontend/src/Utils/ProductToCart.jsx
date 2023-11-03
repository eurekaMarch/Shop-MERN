import { useState } from "react";

function ProductToCart() {
  const cardItems = JSON.parse(window.localStorage.getItem("cardItems")) || [];
  const [cartProduct, setCartProduct] = useState(cardItems);

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
      const newCardItems = cardItems.map((item) => {
        return item.id === product.id
          ? { ...productExit, qty: amountItem }
          : item;
      });

      window.localStorage.setItem("cardItems", JSON.stringify(newCardItems));
      setCartProduct(newCardItems);
    } else {
      // setCartProduct([...cartProduct, { ...product, qty: amountItem }]);

      cardItems.push({ ...product, qty: amountItem });
      window.localStorage.setItem("cardItems", JSON.stringify(cardItems));
      setCartProduct(cardItems);
    }
  };

  const removeFromCart = (product) => {
    // const newProduct = cartProduct.filter(
    //   (addedProduct) => addedProduct.id !== product.id
    // );
    // setCartProduct(newProduct);

    const newCardItems = cardItems.filter(
      (addedProduct) => addedProduct.id !== product.id
    );

    window.localStorage.setItem("cardItems", JSON.stringify(newCardItems));
    setCartProduct(newCardItems);
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

      const newCardItems = cardItems.map((item) => {
        return item.id === product.id
          ? { ...productExit, qty: productExit.qty + 1 }
          : item;
      });

      window.localStorage.setItem("cardItems", JSON.stringify(newCardItems));
      setCartProduct(newCardItems);
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

    const newCardItems = cardItems.map((item) => {
      return item.id === product.id
        ? { ...productExit, qty: Math.max(productExit.qty - 1, 1) }
        : item;
    });

    window.localStorage.setItem("cardItems", JSON.stringify(newCardItems));
    setCartProduct(newCardItems);
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
