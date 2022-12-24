import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		body: { question },
		session: { user },
	} = req;

	console.log("post req", req.body);
	console.log(question);
	console.log(user);

	if (req.method === "POST") {
		const post = await client.post.create({
			data: {
				question,
				user: {
					connect: {
						id: user?.id,
					},
				},
			},
		});

		// console.log("post", post);
		res.json({
			isSuccess: true,
			post,
		});
	}

	if (req.method === "GET") {
		const posts = await client.post.findMany({
			include: {
				user: {
					select: {
						id: true,
						name: true,
						avatar: true,
					},
				},
				_count: {
					select: {
						wondering: true,
						answers: true,
					},
				},
			},
		});

		res.json({
			isSuccess: true,
			posts,
		});
	}
}

export default withApiSession(
	withHandler({
		methods: ["GET", "POST"],
		handler,
	})
);
