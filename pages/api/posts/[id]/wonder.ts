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
	} = req;

	const existsWondering = await client.wondering.findFirst({
		where: {
			userId: user?.id,
			postId: +id.toString(),
		},

		select: {
			id: true,
		},
	});

	if (existsWondering) {
		await client.wondering.delete({
			where: {
				id: existsWondering.id,
			},
		});
	} else {
		await client.wondering.create({
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
			},
		});
	}

	res.json({
		isSuccess: true,
	});
}

export default withApiSession(
	withHandler({
		methods: ["POST"],
		handler,
	})
);
