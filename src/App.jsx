import React, { useState } from "react";

import "./App.css";

import Autocomplete from "./Autocomplete";
import ProductDetail from "./ProductDetail";

const App = () => {
  const [productId, setProductId] = useState(undefined)

  const handleProductSelect = (id) => {
    setProductId(id)
  }
  
  return (
    <div className="App">
      <Autocomplete onProductSelected={handleProductSelect}/>
      <ProductDetail productId={productId} />
    </div>
  );
}

export default App;
