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

	const alreadyFav = await client.favorite.findFirst({
		where: {
			productId: +id.toString(),
			userId: user?.id,
		},
	});

	if (alreadyFav) {
		await client.favorite.delete({
			where: {
				id: alreadyFav.id,
			},
		});
	} else {
		await client.favorite.create({
			data: {
				user: {
					connect: {
						id: user?.id,
					},
				},
				product: {
					connect: {
						id: +id.toString(),
					},
				},
			},
		});
	}
	res.json({ isSuccess: true });
}

export default withApiSession(
	withHandler({
		methods: ["POST"],
		handler,
	})
);
