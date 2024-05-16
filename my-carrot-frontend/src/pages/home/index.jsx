import React from "react";
import ItemList from "../item";
import CommunityList from "../community";
import Layout from "../../components/layout";

const Home = () => {
	return (
		<Layout title="홈" hasTabBar>
			<div className="flex">
				{[1, 1, 1, 1].map((_, i) => (
					<div key={i}>hi</div>
				))}
			</div>
		</Layout>
	);
};

export default Home;
