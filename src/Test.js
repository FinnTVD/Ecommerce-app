import axios from "axios";

const Test = () => {
	const handleCall = async () => {
		const res = await axios.get(
			"http://localhost:4001/api/listProduct?_page=1&_limit=5"
		);
		console.log("🚀 ~ file: Test.js:15 ~ handleCall ~ res:", res);
	};

	return (
		<div>
			<button className="dark:bg-white" onClick={handleCall}>
				call api
			</button>
		</div>
	);
};

export default Test;
