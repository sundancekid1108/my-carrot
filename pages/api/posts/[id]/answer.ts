import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		query: { id },
		session: { user },
		body: { answer },
	} = req;

	const newAnswer = await client.answer.create({
		data: {
			user: {
				connect: {
					id: user?.id,
				},
			},
			post: {
				connect: {
					id: +id.toString(),
				},
			},
			answer,
		},
	});

	console.log(newAnswer);

	res.json({
		isSuccess: true,
		answer: newAnswer,
	});
}

export default withApiSession(
	withHandler({
		methods: ["POST"],
		handler,
	})
);
