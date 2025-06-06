import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Default to an empty object
  const url = "http://localhost:5000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]); // Default to an empty array

  const addToCart = async (itemId) => {
    try {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));

      if (token) {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev) => {
        const updatedCart = { ...prev };
        if (updatedCart[itemId] > 1) {
          updatedCart[itemId] -= 1;
        } else {
          delete updatedCart[itemId];
        }
        return updatedCart;
      });

      if (token) {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
const fetchFoodList = async () => {
  try {
    const response = await axios.get(`${url}/api/food/list`);
    console.log("Fetched Food List:", response.data.data); // Debug log
    setFoodList(response.data.data || []); // Fallback to an empty array
  } catch (error) {
    console.error("Error fetching food list:", error);
  }
};
  

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      setCartItems(response.data.cartData || {}); // Fallback to an empty object
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
