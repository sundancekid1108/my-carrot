import type { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/productlist";

const Liked: NextPage = () => {
	return (
		<>
			<Layout title="관심목록" canGoBack>
				<div className="flex flex-col space-y-5 pb-10 divide-y">
					<ProductList kind="favorites" />
				</div>
			</Layout>
		</>
	);
};

export default Liked;
