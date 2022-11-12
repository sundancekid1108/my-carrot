import type { NextPage } from "next";
import Layout from "../../components/layout";
import Button from "../../components/button";
import TextArea from "../../components/textarea";
//http://localhost:3000/community/createpost

const CreatePost: NextPage = () => {
	return (
		<>
			<Layout canGoBack title="Create Post">
				<form className="p-4 space-y-4">
					<TextArea required placeholder="Ask a question!" />
					<Button text="Submit" />
				</form>
			</Layout>
		</>
	);
};

export default CreatePost;
