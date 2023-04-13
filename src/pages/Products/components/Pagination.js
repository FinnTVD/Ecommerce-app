import { useDispatch, useSelector } from "react-redux";

import {
	fetchProduct,
	setCurrentPagination,
} from "../../../store/ProductSlice";

import { Pagination } from "antd";

const PaginationProduct = () => {
	const { currentPagination, totalPagination } = useSelector(
		(state) => state.product
	);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(fetchProduct(e));
		dispatch(setCurrentPagination(e));
	};

	return (
		<Pagination
			onChange={handleChange}
			current={currentPagination}
			total={totalPagination * 10}
		/>
	);
};
export default PaginationProduct;
