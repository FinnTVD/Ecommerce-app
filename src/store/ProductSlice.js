import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlApi } from "../utils/global";

const ProductSlice = createSlice({
	name: "product",
	initialState: {
		listProduct: [],
		isLoading: true,
		totalPagination: 0,
		currentPagination: 1,
	},
	reducers: {
		setListProduct: (state, action) => {
			state.listProduct = action.payload;
		},
		setCurrentPagination: (state, action) => {
			state.currentPagination = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.listProduct = action.payload.data;
			state.totalPagination = action.payload.totalPage;
			state.isLoading = false;
		});
		builder.addCase(fetchProduct.rejected, (state, action) => {
			state.isLoading = false;
		});
		builder.addCase(fetchCategory.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCategory.fulfilled, (state, action) => {
			state.listProduct = action.payload.data;
			state.totalPagination = action.payload.totalPage;
			state.isLoading = false;
		});
		builder.addCase(fetchCategory.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export const fetchProduct = createAsyncThunk(
	"fetchProduct",
	async (page = 1) => {
		try {
			const res = await axios.get(
				`${urlApi}/listProduct?_page=${page}&_limit=10`
			);
			const db = res.data;
			return {
				data: db.data,
				totalPage: db.pagination.totalPage,
			};
		} catch (error) {
			throw new Error(error);
		}
	}
);

export const fetchCategory = createAsyncThunk(
	"fetchCategory",
	async (category) => {
		try {
			const res = await axios.get(
				`${urlApi}/listProduct?_page=1&_limit=10&category=${category}`
			);
			const db = res.data;
			return {
				data: db.data,
				totalPage: db.pagination.totalPage,
			};
		} catch (error) {
			throw new Error(error);
		}
	}
);

export const { setListProduct, setCurrentPagination } = ProductSlice.actions;

export default ProductSlice.reducer;
