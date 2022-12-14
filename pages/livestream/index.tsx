import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import FloatingButton from "@components/floatingbutton";

import useSWR from "swr";
import { LiveStream } from "@prisma/client";
import livestreams from "pages/api/livestreams";

interface LiveStreamsResponse {
	isSuccess: boolean;
	livestreams: LiveStream[];
}

const LiveStreamsList: NextPage = () => {
	const { data } = useSWR<LiveStreamsResponse>(`/api/livestreams`);
	console.log(data);
	return (
		<>
			<Layout tabBarOn title="라이브">
				<div className="divide-y-[1px] space-y-4">
					{data?.livestreams.map((livestream) => (
						<Link key={livestream.id} href={`/livestream/${livestream.id}`}>
							<div className="pt-4 block  px-4">
								<div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
								<h1 className="text-2xl mt-2 font-bold text-gray-900">
									{livestream.name}
								</h1>
							</div>
						</Link>
					))}
					<FloatingButton href="/livestream/createlivestream">
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
								d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
						</svg>
					</FloatingButton>
				</div>
			</Layout>
		</>
	);
};

export default LiveStreamsList;
