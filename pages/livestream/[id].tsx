import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import { useRouter } from "next/router";
import useSWR from "swr";
import { LiveStream } from "@prisma/client";

interface LiveStreamResponse {
	isSuccess: true;
	livestream: LiveStream;
}

const LiveStream: NextPage = () => {
	const router = useRouter();
	const { data } = useSWR<LiveStreamResponse>(
		router.query.id ? `/api/livestreams/${router.query.id}` : null
	);

	console.log(data);
	return (
		<>
			<Layout canGoBack>
				<div className="py-10 px-4  space-y-4">
					<div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
					<div className="mt-5">
						<h1 className="text-3xl font-bold text-gray-900">
							{data?.livestream?.name}
						</h1>
						<span className="text-2xl block mt-3 text-gray-900">
							{data?.livestream?.price}
						</span>
						<p className=" my-6 text-gray-700">
							{data?.livestream?.description}
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
						<div className="py-10 pb-16 h-[50vh] overflow-y-scroll  px-4 space-y-4">
							<div className="flex items-start space-x-2">
								<div className="w-8 h-8 rounded-full bg-slate-400" />
								<div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
									<p>test</p>
								</div>
							</div>
							<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
								<div className="w-8 h-8 rounded-full bg-slate-400" />
								<div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
									<p>test</p>
								</div>
							</div>
						</div>
						<div className="fixed py-2 bg-white  bottom-0 inset-x-0">
							<div className="flex relative max-w-md items-center  w-full mx-auto">
								<input
									type="text"
									className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
								/>
								<div className="absolute inset-y-0 flex py-2 pr-2 right-0">
									<button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
										&rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};
export default LiveStream;
