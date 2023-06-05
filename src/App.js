import React, { useMemo, useReducer } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Catalog from "./components/Catalog/Catalog";

import reducer from "./state/reducer";
import items from "./assets/items/items";


export const Context = React.createContext();



function App() {

  const inisialState = useMemo(() => (
    {
      product: items,
      card: {
        items:[],
        totalProducts:0,
        totalPrice:0
      },
      filters: {
        search: {
          value: ''
        },
        price: {
          from: '',
          to: ''
        },
        color: {
          value: null
        },
        storage: {
          value: null
        },
        os: {
          value: null
        },
        display: {
          value: null
        }
      }
    }
  ), []);

  const [state, dispatch] = useReducer(reducer, inisialState);


  return (
    <Context.Provider value={{dispatch, state}}>
      <Header />
      <Banner />
      <Catalog />
    </Context.Provider>
  );
}

export default App;
