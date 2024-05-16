import React from "react";
import ItemList from "../item";
import CommunityList from "../community";
import Layout from "../../components/layout";

const ChatList = () => {
	return (
		<div className="divide-y-[1px] ">
			{[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
				<div
					key={i}
					className="flex px-4 cursor-pointer py-3 items-center space-x-3">
					<div className="w-12 h-12 rounded-full bg-slate-300" />
					<div>
						<p className="text-gray-700">ChatList</p>
						<p className="text-sm  text-gray-500">chat chat</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChatList;
