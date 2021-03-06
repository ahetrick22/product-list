import React, { Fragment } from "react";
import SearchBar from "../containers/SearchBar";
import ProductGrid from "../containers/ProductGrid";
import PageNumbers from "../containers/PageNumbers";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'


const App = () => {
  return (
    <Fragment>
      <h1>Products</h1>
      <SearchBar />
      <ProductGrid />
      <PageNumbers />
    </Fragment>
  );
}

export default App