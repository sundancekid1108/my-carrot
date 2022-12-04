import type { NextPage } from "next";
import Layout from "@components/layout";
import Item from "@components/product";

const Liked: NextPage = () => {
	return (
		<>
			<Layout title="관심목록" canGoBack>
				<div className="flex flex-col space-y-5 py-10 divide-y">
					{[1, 1, 1, 1].map((i) => (
						<Item
							key={i}
							id={i}
							title="iPhone 14"
							price={99}
							comments={1}
							hearts={1}
						/>
					))}
				</div>
			</Layout>
		</>
	);
};

export default Liked;
