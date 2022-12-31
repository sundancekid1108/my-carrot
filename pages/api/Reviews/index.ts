import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		session: { user },
	} = req;

	const reviews = await client.review.findMany({
		where: {
			createdForUserId: user?.id,
		},
		include: {
			createdByUser: { select: { id: true, name: true, avatar: true } },
		},
	});
	res.json({
		isSuccess: true,
		reviews,
	});
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
