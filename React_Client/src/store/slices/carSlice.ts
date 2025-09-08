import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Car } from "../../types/car";

interface CarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async () => {
    const response = await fetch("/src/data.json");
    const data = await response.json();
    return data.cars;
  }
);

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cars";
      });
  },
});

export default carSlice.reducer;
