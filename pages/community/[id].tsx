import type { NextPage } from "next";
// http://localhost:3000/community/id

const CommunityDetail: NextPage = () => {
	return (
		<>
			<div>
				<span className="inline-flex my-3 ml-4 items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
					testtag
				</span>
				<div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
					<div className="w-10 h-10 rounded-full bg-slate-300" />
					<div>
						<p className="text-sm font-medium text-gray-700">testname</p>
						<p className="text-xs font-medium text-gray-500">
							View profile &rarr;
						</p>
					</div>
				</div>
				<div>
					<div className="mt-2 px-4 text-gray-700">
						<span className="text-orange-500 font-medium">Q.</span>
						test text
					</div>
					<div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
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
				<div className="px-4 my-5 space-y-5">
					<div className="flex items-start space-x-3">
						<div className="w-8 h-8 bg-slate-200 rounded-full" />
						<div>
							<span className="text-sm block font-medium text-gray-700">
								testuser
							</span>
							<span className="text-xs text-gray-500 block ">test time</span>
							<p className="text-gray-700 mt-2">test reply</p>
						</div>
					</div>
				</div>
				<div className="px-4">
					<textarea
						className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
						rows={4}
						placeholder="Reply in here"
					/>
					<button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
						Reply
					</button>
				</div>
			</div>
		</>
	);
};

export default CommunityDetail;
