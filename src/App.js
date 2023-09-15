import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/product_card/ProductCard";
import { Audio } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slice/product";
import Modal from "react-modal";

function App() {
  // To interact with Redux in a React component, we typically use the useSelector hook to access
  // the state and the useDispatch hook to dispatch actions.
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Inside the useEffect, we dispatches the fetchProducts action when the component mounts, initiating the data fetching process.
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="App">
        {state.product.isLoading ? (
          <div className="loader-wrapper">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="black"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          <div className="cards-wrapper">
            {!Array.isArray(state.product.data)
              ? "No data!"
              : state.product.data.map((product, index) => (
                  <ProductCard key={index} {...product}></ProductCard>
                ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
