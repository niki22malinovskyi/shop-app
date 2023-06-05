import Items from "../assets/items/items";

export default function (state, action) {
  switch (action.type) {
    case "addCart":
      let updatedCart = state.card.items;
      if (state.card.items.some((el) => el.id === action.payload)) {
        updatedCart = state.card.items.map((el) => {
          if (el.id === action.payload) {
            return { ...el, counter: el.counter++ };
          } else {
            return el;
          }
        });
      } else {
        const newItem = {
          ...state.product.find((el) => el.id === action.payload),
          counter: 1,
        };

        updatedCart = [...updatedCart, newItem];
      }

      return {
        ...state,
        card: {
          items: updatedCart,
          totalProducts: updatedCart.reduce((acc, el) => {
            const sum = acc + el.counter;
            return sum;
          }, 0),
          totalPrice: updatedCart.reduce((acc, el) => {
            const sum = acc + el.price * el.counter;
            return sum;
          }, 0),
        },
      };

    case "deleteOrder":
      let updCart = state.card.items.filter((el) => el.id !== action.payload);

      return {
        ...state,
        card: {
          items: updCart,
          totalProducts: updCart.reduce((acc, el) => {
            const sum = acc + el.counter;
            return sum;
          }, 0),
          totalPrice: updCart.reduce((acc, el) => {
            const sum = acc + el.price * el.counter;
            return sum;
          }, 0),
        },
      };

    case "diffAmount":
      let updateAmount = state.card.items.map((el) => {
        if (el.id === action.payload) {
          return { ...el, counter: el.counter >= 1 ? el.counter-- : 1 };
        } else {
          return el;
        }
      });

      return {
        ...state,
        card: {
          items: updateAmount,
          totalProducts: updateAmount.reduce((acc, el) => {
            let sum = acc + el.counter;
            return sum;
          }, 0),
          totalPrice: updateAmount.reduce((acc, el) => {
            const sum = acc + el.price * el.counter;
            return sum;
          }, 0),
        },
      };

    case "addFilters":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: {
            ...state.filters[action.payload.filterName],
            ...action.payload.value,
            
          },
        },
      };
    case "removeFilters":
      let a = state.filters[action.payload.filterName].value.filter(
        (val) => val !== action.payload.value
      )
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: {
            value: a.length ? a : null,
          },
        },
      };
    case "filteredItems":
      let filteredItem = Items;

      if (!!state.filters.search.value) {
        filteredItem = filteredItem.filter((el) =>
          el.name
            .toLowerCase()
            .includes(state.filters.search.value.toLowerCase())
        );
      }

      if (!!state.filters.price.from) {
        filteredItem = filteredItem.filter(
          (el) => el.price >= state.filters.price.from
        );
      }

      if (!!state.filters.price.to) {
        filteredItem = filteredItem.filter(
          (el) => el.price <= state.filters.price.to
        );
      }

      if (!!state.filters.color.value) {
        filteredItem = filteredItem.filter((el) => {
          return state.filters.color.value.find((val) =>
            el.color.includes(val)
          );
        });
      }

      if (!!state.filters.storage.value) {
        filteredItem = filteredItem.filter((el) =>
          state.filters.storage.value.find((val) => el.storage === val)
        );
      }

      if (!!state.filters.os.value) {
        filteredItem = filteredItem.filter((el) => {
          return state.filters.os.value.find((val) => el.os === val);
        });
      }

      if (!!state.filters.display.value) {
        filteredItem = filteredItem.filter((el) => {
          return state.filters.display.value.find((val) => el.display === val);
        });
      }
      return { ...state, 
        product: filteredItem,

       };
    case "ascendingItems":


      return {
        ...state,
        product: state.product.sort((a, b) => a.price - b.price),
      };
    case "descendingItems":

      return {
        ...state,
        product: state.product.sort((a, b) => b.price - a.price),
      };
    default:
      return {...state};
  }
}
