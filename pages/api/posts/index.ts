import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	

	if (req.method === "POST") {
		const {
			body: { question, latitude, longitude },
			session: { user },
		} = req;

		console.log(req.body);

		const post = await client.post.create({
			data: {
				user: {
					connect: {
						id: user?.id,
					},
				},
				question,
				latitude,
				longitude,
			},
		});

		// console.log("post", post);
		res.json({
			isSuccess: true,
			post,
		});
	}

	if (req.method === "GET") {
		const {
			query: { latitude, longitude },
		} = req;
		console.log(latitude, longitude);

		const parsedLatitude = parseFloat(latitude.toString());
		const parsedLongitue = parseFloat(longitude.toString());

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
			where: {
				latitude: {
					gte: parsedLatitude - 0.02,
					lte: parsedLatitude + 0.02,
				},
				longitude: {
					gte: parsedLongitue - 0.02,
					lte: parsedLongitue + 0.02,
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
