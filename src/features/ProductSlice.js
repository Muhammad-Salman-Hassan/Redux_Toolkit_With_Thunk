import { createSlice } from "@reduxjs/toolkit";

export const Statuses = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const productSlice = createSlice({
    name: "product",

    initialState: {
        data: [],
        status: Statuses.IDLE,
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function FetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(setStatus(Statuses.LOADING)));
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            dispatch(setProduct(data));

            dispatch(setStatus(Statuses.IDLE));
        } catch (error) {
            dispatch(setStatus(Statuses.ERROR));
        }
    };
}
