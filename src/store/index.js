import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import ShoppingCartSlice from "./ShoppingCartSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
	reducer: {
		product: ProductSlice,
		shoppingCart: ShoppingCartSlice,
		auth: AuthSlice,
	},
});

export default store;
