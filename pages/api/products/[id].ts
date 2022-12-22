import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";
import product from "@components/product";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const { id } = req.query;
	console.log("id", id);
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
	//연관 키워드 물품 찾기
	// 키워드 split 후 조회
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
	res.json({ isSuccess: true, productInfo, relatedProducts });
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
