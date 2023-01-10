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
	} = req;

	const livestream = await client.liveStream.findUnique({
		where: {
			id: +id.toString(),
		},
	});
	res.json({ isSuccess: true, livestream });
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
