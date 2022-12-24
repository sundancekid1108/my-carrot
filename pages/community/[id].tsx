import type { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useRouter } from "next/router";
import useSWR from "swr";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { Answer, Post, User } from "@prisma/client";

// http://localhost:3000/community/id

interface AnswerWithUser extends Answer {
	user: User;
}

interface PostWithUser extends Post {
	user: User;
	_count: {
		answers: number;
		wondering: number;
	};
	answers: AnswerWithUser[];
}

interface CommunityPostResponse {
	isSuccess: boolean;
	post: PostWithUser;
	isWondering: boolean;
}

interface AnswerForm {
	answer: string;
}

interface AnswerResponse {
	isSuccess: boolean;
	response: Answer;
}

const CommunityPostDetail: NextPage = () => {
	const router = useRouter();
	const { register, handleSubmit, reset } = useForm<AnswerForm>();
	const { data, mutate } = useSWR<CommunityPostResponse>(
		router.query.id ? `/api/posts/${router.query.id}` : null
	);
	const [wonder, { loading }] = useMutation(
		`/api/posts/${router.query.id}/wonder`
	);

	const [sendAnswer, { data: answerData, loading: answerLoading }] =
		useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);

	const onWonderClick = () => {
		if (!data) return;
		mutate(
			{
				...data,
				post: {
					...data.post,
					_count: {
						...data.post._count,
						wondering: data.isWondering
							? data?.post._count.wondering - 1
							: data?.post._count.wondering + 1,
					},
				},
				isWondering: !data.isWondering,
			},
			false
		);
		if (!loading) {
			wonder({});
		}
	};

	const onValid = (form: AnswerForm) => {
		if (answerLoading) return;
		sendAnswer(form);
	};

	useEffect(() => {
		if (answerData && answerData.isSuccess) {
			reset();
			mutate();
		}
	}, [answerData, reset, mutate]);

	console.log("CommunityPostDetail data", data);

	return (
		<>
			<Layout canGoBack>
				<div>
					<span className="inline-flex my-3 ml-4 items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
						testtag
					</span>
					<div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
						<div className="w-10 h-10 rounded-full bg-slate-300" />
						<div>
							<p className="text-sm font-medium text-gray-700">
								{data?.post?.user?.name}
							</p>
							<Link href={`/users/profiles/${data?.post?.user?.id}`}>
								<div className="text-xs font-medium text-gray-500">
									View profile &rarr;
								</div>
							</Link>
						</div>
					</div>
					<div>
						<div className="mt-2 px-4 text-gray-700">
							<span className="text-orange-500 font-medium">Q.</span>{" "}
							{data?.post?.question}
						</div>
						<div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
							<button
								onClick={onWonderClick}
								className={cls(
									"flex space-x-2 items-center text-sm",
									data?.isWondering ? "text-teal-600" : ""
								)}>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
								<span>궁금해요 {data?.post?._count?.wondering}</span>
							</button>
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
								<span>답변 {data?.post._count.answers}</span>
							</span>
						</div>
					</div>
					<div className="px-4 my-5 space-y-5">
						{data?.post.answers.map((answer) => (
							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-slate-200 rounded-full" />
								<div>
									<span className="text-sm block font-medium text-gray-700">
										{answer.user.name}
									</span>
									<span className="text-xs text-gray-500 block ">
										{answer.createdAt}
									</span>
									<p className="text-gray-700 mt-2">{answer.answer} </p>
								</div>
							</div>
						))}
					</div>
					<form className="px-4" onSubmit={handleSubmit(onValid)}>
						<TextArea
							name="description"
							// placeholder="Answer this question!"
							required
							register={register("answer", { required: true, minLength: 5 })}
						/>
						<button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
							{answerLoading ? "Loading..." : "Reply"}
						</button>
					</form>
				</div>
			</Layout>
		</>
	);
};

export default CommunityPostDetail;
