import type { NextPage } from "next";
//http://localhost:3000/community/community

const Community: NextPage = () => {
	return (
		<>
			<div className="py-10 space-y-8">
				{[1, 2, 3, 4].map((i) => (
					<div key={i} className="flex cursor-pointer flex-col items-start">
						<span className="flex ml-4 items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
							TestTest
						</span>
						<div className="mt-2 px-4 text-gray-700">
							<span className="text-orange-500 font-medium">Q.</span>
							test
						</div>

						<div className="mt-5 px-4 flex items-center justify-between w-full text-gray-500 font-medium text-s">
							<span>test name</span>
							<span>test time</span>
						</div>
						<div className="flex px-4 space-x-5 mt-3 text-gray-700 py-3 border-t border-b-[2px]  w-full">
							<span className="flex space-x-2 items-center text-sm">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<polyline points="9 11 12 14 22 4"></polyline>
									<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
								</svg>

								<span>궁금해요 1</span>
							</span>
							<span className="flex space-x-2 items-center text-sm">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>

								<span>답변 1</span>
							</span>
						</div>
					</div>
				))}

				<button className="fixed hover:bg-orange-500 transition-colors cursor-pointer  bottom-20 right-8 shadow-xl bg-orange-400 rounded-full p-5 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
						<polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
					</svg>
				</button>
			</div>
		</>
	);
};

export default Community;
