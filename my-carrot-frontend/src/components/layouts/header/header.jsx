import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const getTitle = (...str) => {
	console.log("str1", str);
	str.join("");
	console.log("str2", str);
	return str;
};

const Header = ({ title, canGoBack, hasTabBar, children }) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(-1);
		console.log("back");
	};
	return (
		<div>
			<div
				className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-medium  fixed text-gray-800 border-b top-0  flex items-center">
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
					<span className={getTitle(canGoBack ? "mx-auto" : "", "")}>{title}</span>
				) : null}
			</div>

			{hasTabBar ? (
				<nav
					className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
					<Link to="/">
						<a className="flex flex-col items-center space-y-2">
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
						<a className="flex flex-col items-center space-y-2">
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

					<Link to="/community">
						<a className="flex flex-col items-center space-y-2">
							<svg
								className="w-6 h-6"
								// fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0"
									d="M13,11.8999819 L13,19 L11,19 L11,11.8999819 C8.71775968,11.4367116 7,9.41895791 7,7 C7,4.23857625 9.23857625,2 12,2 C14.7614237,2 17,4.23857625 17,7 C17,9.41895791 15.2822403,11.4367116 13,11.8999819 Z M9,14.1573001 L9,16.1843625 C6.0671837,16.5504753 4,17.3867347 4,18 C4,18.8069531 7.5791408,20 12,20 C16.4208592,20 20,18.8069531 20,18 C20,17.3867347 17.9328163,16.5504753 15,16.1843625 L15,14.1573001 C19.0558765,14.601713 22,15.967812 22,18 C22,20.5067554 17.5202663,22 12,22 C6.4797337,22 2,20.5067554 2,18 C2,15.967812 4.94412354,14.601713 9,14.1573001 Z M12,10 C13.6568542,10 15,8.65685425 15,7 C15,5.34314575 13.6568542,4 12,4 C10.3431458,4 9,5.34314575 9,7 C9,8.65685425 10.3431458,10 12,10 Z"
								/>
							</svg>

							<span>내근처</span>
						</a>
					</Link>

					<Link to="/chat">
						<a className="flex flex-col items-center space-y-2">
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
						<a className="flex flex-col items-center space-y-2">
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

export default Header;
