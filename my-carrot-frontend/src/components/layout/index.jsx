import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const getTitle = (...str) => {
	console.log("str1", str);
	const result = str.join("");
	console.log("str2", str);
	return result;
};

const Layout = ({ title, canGoBack, hasTabBar, children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const onClick = () => {
		navigate(-1);
		console.log("back");
	};

	console.log("children", children);
	console.log(location);
	return (
		<div>
			<div className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-medium  fixed text-gray-800 border-b top-0  flex items-center">
				{canGoBack ? (
					<button onClick={onClick}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"></path>
						</svg>
					</button>
				) : null}
				{title ? (
					<span className={getTitle(canGoBack ? "mx-auto" : "", "")}>
						{title}
					</span>
				) : null}
			</div>
			{children}
			{hasTabBar ? (
				<nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
					<Link to="/">
						<a
							className={getTitle(
								"flex flex-col items-center space-y-2 ",
								location.pathname === "/"
									? "flex flex-col items-center space-y-2 text-orange-500"
									: "flex flex-col items-center space-y-2 hover:text-gray-500 transition-colors"
							)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
							</svg>
							<span>홈</span>
						</a>
					</Link>
					<Link to="/community">
						<a
							className={getTitle(
								"flex flex-col items-center space-y-2 ",
								location.pathname === "/community"
									? "flex flex-col items-center space-y-2 text-orange-500"
									: "flex flex-col items-center space-y-2 hover:text-gray-500 transition-colors"
							)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
							</svg>
							<span>동네생활</span>
						</a>
					</Link>

					<Link to="/nearby">
						<a
							className={getTitle(
								"flex flex-col items-center space-y-2 ",
								location.pathname === "/nearby"
									? "flex flex-col items-center space-y-2 text-orange-500"
									: "flex flex-col items-center space-y-2 hover:text-gray-500 transition-colors"
							)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.36328 12.0523C4.01081 11.5711 3.33457 11.3304 3.13309 10.9655C2.95849 10.6492 2.95032 10.2673 3.11124 9.94388C3.29694 9.57063 3.96228 9.30132 5.29295 8.76272L17.8356 3.68594C19.1461 3.15547 19.8014 2.89024 20.2154 3.02623C20.5747 3.14427 20.8565 3.42608 20.9746 3.7854C21.1106 4.19937 20.8453 4.85465 20.3149 6.16521L15.2381 18.7078C14.6995 20.0385 14.4302 20.7039 14.0569 20.8896C13.7335 21.0505 13.3516 21.0423 13.0353 20.8677C12.6704 20.6662 12.4297 19.99 11.9485 18.6375L10.4751 14.4967C10.3815 14.2336 10.3347 14.102 10.2582 13.9922C10.1905 13.8948 10.106 13.8103 10.0086 13.7426C9.89876 13.6661 9.76719 13.6193 9.50407 13.5257L5.36328 12.0523Z"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
							</svg>
							<span>내근처</span>
						</a>
					</Link>

					<Link to="/chat">
						<a
							className={getTitle(
								"flex flex-col items-center space-y-2 ",
								location.pathname === "/chat"
									? "flex flex-col items-center space-y-2 text-orange-500"
									: "flex flex-col items-center space-y-2 hover:text-gray-500 transition-colors"
							)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
							</svg>
							<span>채팅</span>
						</a>
					</Link>

					<Link to="/profile">
						<a
							className={getTitle(
								"flex flex-col items-center space-y-2 ",
								location.pathname === "/profile"
									? "flex flex-col items-center space-y-2 text-orange-500"
									: "flex flex-col items-center space-y-2 hover:text-gray-500 transition-colors"
							)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
							</svg>
							<span>프로필</span>
						</a>
					</Link>
				</nav>
			) : null}
		</div>
	);
};

export default Layout;
