import React from "react";
import ItemList from "../item/itemlist";
import CommunityList from "../community/communitylist";
import Footer from "../../components/layouts/footer/footer";
import Header from "../../components/layouts/header/header";

const Home = () => {
	return (
		<Header title="홈" hasTabBar>
			<div className="flex">
				{[1, 1, 1, 1].map((_, i) => (
					<div key={i}>hi</div>
				))}
			</div>
		</Header>
	);
};

export default Home;
