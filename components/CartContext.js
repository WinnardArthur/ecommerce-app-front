import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({});

function CartContextProvider({ children }) {
  const LStorage = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      LStorage?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
    
    useEffect(() => {
        if (LStorage && LStorage.getItem('cart')) {
            setCartProducts(JSON.parse(LStorage.getItem('cart')))
        }
    }, [])

  function addProducts(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProducts(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }
      return prev;
    })
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProducts, removeProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
