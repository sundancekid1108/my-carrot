import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";

const NotFound = () => {
	return (
		<Layout hasTabBar title="Not Found">
			<div className="space-y-4 divide-y-[2px]">
				<span className="flex ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
					동네질문
				</span>
				Not Found
			</div>
		</Layout>
	);
};

export default NotFound;
