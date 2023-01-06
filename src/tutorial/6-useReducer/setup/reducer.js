// reducer function
import { data } from "../../../data";

export const reducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
};
