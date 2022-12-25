import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import useCoords from "@libs/client/useCoords";
//http://localhost:3000/community/createpost

interface CreatePostForm {
	question: string;
}

interface CreatePostResponse {
	isSuccess: boolean;
	post: Post;
}

const CreatePost: NextPage = () => {
	const router = useRouter();
	const { latitude, longitude } = useCoords();
	const { register, handleSubmit } = useForm<CreatePostForm>();
	const [post, { loading, data }] =
		useMutation<CreatePostResponse>("/api/posts");

	const onValid = (data: CreatePostForm) => {
		console.log("onValid data", data);

		if (loading) return;
		post({ ...data, latitude, longitude });
	};
	<p>리뷰자리</p>;
	useEffect(() => {}, [data, router]);

	return (
		<>
			<Layout canGoBack title="Create Post">
				<form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
					<TextArea
						register={register("question", { required: true, minLength: 5 })}
						required
						placeholder="Ask a question!"
					/>
					<Button text={loading ? "Loading..." : "Submit"} />
				</form>
			</Layout>
		</>
	);
};

export default CreatePost;
