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

export default withApiSession(
	withHandler({
		methods: ["POST"],
		handler,
	})
);
