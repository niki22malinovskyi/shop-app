import React, { useReducer } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Catalog from "./components/Catalog/Catalog";

import reducer from "./state/reducer";
import items from "./assets/items/items";


export const Context = React.createContext();


export const inisialState = {
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

// "homepage": "https://niki22malinovskyi.github.io/shop-app",

function App() {

  

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
