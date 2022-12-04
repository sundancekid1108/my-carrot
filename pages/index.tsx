import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import FloatingButton from "@components/floatingbutton";
import Item from "@components/product";
import useUserInfo from "@libs/client/useUserInfo";
import Head from "next/head";

const Home: NextPage = () => {
	const user = useUserInfo();
	console.log("currentuser", user);
	return (
		<>
			<Layout tabBarOn title="홈">
				<Head>
					<title>Home</title>
				</Head>
				<div className="flex flex-col space-y-5 divide-y">
					{[1, 1, 1, 1, 1].map((_, i) => (
						<Item
							id={i}
							key={i}
							title="아이템"
							price={99}
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
