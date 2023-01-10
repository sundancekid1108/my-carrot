import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import Input from "@components/input";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LiveStream } from "@prisma/client";

interface CreateLiveStreamForm {
	name: string;
	price: string;
	description: string;
}

interface CreateLiveStreamResponse {
	isSuccess: boolean;
	livestream: LiveStream;
}

const CreateLiveStream: NextPage = () => {
	const router = useRouter();
	const [createLiveStream, { loading, data }] =
		useMutation<CreateLiveStreamResponse>(`/api/livestreams`);

	const { register, handleSubmit } = useForm<CreateLiveStreamForm>();

	const onValid = (form: CreateLiveStreamForm) => {
		if (loading) return;
		createLiveStream(form);
	};
	useEffect(() => {
		if (data && data.isSuccess) {
			router.push(`/livestream/${data.livestream.id}`);
		}
	}, [data, router]);

	return (
		<>
			<Layout canGoBack title="LiveStream">
				<form onSubmit={handleSubmit(onValid)} className=" space-y-4 py-4 px-4">
					<Input
						required
						register={register("name", { required: true })}
						label="Name"
						name="name"
						type="text"
					/>
					<Input
						required
						register={register("price", { required: true })}
						label="Price"
						placeholder="Price"
						name="price"
						type="text"
					/>
					<TextArea
						register={register("description", { required: true })}
						name="description"
						label="Description"
					/>
					<Button text={loading ? "Loading..." : "Create LiveStream"} />
				</form>
			</Layout>
		</>
	);
};

export default CreateLiveStream;
