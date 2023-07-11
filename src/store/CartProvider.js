import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
    // we use concat() because we want to generate a brand new
    // state, not push() because push will update the old state
    // without React knowing
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
}

/**
 * This is a component where we simply access CartContext.Provider
 * and pass props.children between the context provider elements
 * This allows us to wrap every component that access this context
 * with this CartProvider component
 *
 * We can also add the logic to manage the context to this component,
 * so that all is contained in one component and no other component
 * will need to deal with that logic.
 * @param {*} props
 * @returns
 */
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  function addItemToCartHandler(item) {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
