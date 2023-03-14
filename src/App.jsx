import React, { useState } from "react";

import "./App.css";

import Autocomplete from "./components/Autocomplete";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const [productId, setProductId] = useState(null)

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
