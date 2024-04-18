import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const getTitle = (...str) => {
	console.log("str1", str);
	str.join("");
	console.log("str2", str);
	return str;
};

const Footer = ({ title, canGoBack, hasTabBar, children }) => {
	// const router = Router();
	const onClick = () => {
		// Router.back();
		console.log("back");
	};
	return <div></div>;
};

export default Footer;
