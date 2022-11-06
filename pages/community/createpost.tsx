import type { NextPage } from "next";
//http://localhost:3000/community/createpost

const CreatePost: NextPage = () => {
	return (
		<>
			<form className="px-4 py-10">
				<textarea
					className="mt-1 shadow-md w-full rounded-md focus:ring-orange-500 border-gray-300 focus:border-orange-500"
					rows={6}
				/>
				<button className="mt-2 py-2 px-4 w-full bg-orange-500 hover:bg-orange-600 text-white border border-transparent rounded-md shadow-md">
					Submit
				</button>
			</form>
		</>
	);
};

export default CreatePost;
