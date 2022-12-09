import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import FloatingButton from "@components/floatingbutton";
import Item from "@components/product";
import useUserInfo from "@libs/client/useUserInfo";
import Head from "next/head";
import useSWR from "swr";
import { Product } from "@prisma/client";

interface ProductsResponse {
	isSuccess: boolean;
	products: Product[];
}

const Home: NextPage = () => {
	const user = useUserInfo();
	const { data } = useSWR<ProductsResponse>("/api/products");
	console.log("productsData", data);
	console.log("currentuser", user);
	return (
		<>
			<Layout tabBarOn title="홈">
				<Head>
					<title>홈</title>
				</Head>
				<div className="flex flex-col space-y-5 divide-y">
					{data?.products?.map((product) => (
						<Item
							id={product.id}
							key={product.id}
							title={product.name}
							price={product.price}
							comments={1}
							hearts={1}
						/>
					))}
					<FloatingButton href="/products/uploadproduct">
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					</FloatingButton>
				</div>
			</Layout>
		</>
	);
};

export default Home;
