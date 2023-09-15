import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// There is one asynchronous Redux action defined in the code which is fetchProducts
// The Type of fetchProducts is createAsyncThunk
// This action fetches product data from an external API using an HTTP GET request. It utilizes the fetch API to retrieve data from the specified URL.
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/maath9826/demo/products"
  );

  return response.json();
});

// The Redux reducer for the "product" slice handles state changes based on the actions.
// It defines the initial state and specifies how the state should be updated in response to actions.
const productSlice = createSlice({
  name: "product", //The name of the reducer slice
  initialState: {
    isLoading: false, // Indicates whether a product data request is in progress
    data: [], // An array to store product data
    isError: false, // Indicates whether an error occurred during data fetching
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      // fetchProducts.pending: Sets isLoading to true when the data fetch request is pending.
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // fetchProducts.fulfilled: Updates isLoading to false and stores the fetched data in the data property when the data fetch is successful.
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // fetchProducts.rejected: Sets isError to true when an error occurs during data fetching.
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
