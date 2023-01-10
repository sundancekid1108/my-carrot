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
		body: { name, price, description },
	} = req;

	if (req.method === "POST") {
		console.log(req.body);
		const livestream = await client.liveStream.create({
			data: {
				name,
				price,
				description,
				user: {
					connect: {
						id: user?.id,
					},
				},
			},
		});
		// console.log(livestream);
		res.json({ isSuccess: true, livestream });
	} else if (req.method === "GET") {
		const livestreams = await client.liveStream.findMany({});
		res.json({ isSuccess: true, livestreams });
	}
}

export default withApiSession(
	withHandler({
		methods: ["GET", "POST"],
		handler,
	})
);
