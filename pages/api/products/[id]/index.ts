import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";
import product from "@components/item";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		query: { id },
		session: { user },
	} = req;
	// console.log("id", id);

	const productInfo = await client.product.findUnique({
		where: {
			id: +id.toString(),
		},
		include: {
			user: {
				select: {
					id: true,
					name: true,
					avatar: true,
				},
			},
		},
	});

	const terms = productInfo?.name.split(" ").map((word) => ({
		name: {
			contains: word,
		},
	}));

	const relatedProducts = await client.product.findMany({
		where: {
			OR: terms,
			AND: {
				id: {
					not: productInfo?.id,
				},
			},
		},
	});

	const isLiked = Boolean(
		await client.favorite.findFirst({
			where: {
				productId: product?.id,
				userId: user?.id,
			},
			select: {
				id: true,
			},
		})
	);

	res.json({ isSuccess: true, productInfo, isLiked, relatedProducts });
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
