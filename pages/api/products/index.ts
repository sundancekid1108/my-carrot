import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	if (req.method === "GET") {
		const products = await client.product.findMany({})
		return res.json({isSuccess: true, products})
	}

	if (req.method === "POST") {
		const {
			body: { name, price, description },
			session: { user },
		} = req;

		const product = await client.product.create({
			data: {
				name,
				price: price,
				description,
				image: "imagesample",
				user: {
					connect: {
						id: user?.id,
					},
				},
			},
		});

		console.log("product", product);
		return res.json({
			isSuccess: true,
			product,
		});
	}
}
export default withApiSession(
	withHandler({
		methods: ["GET", "POST"],
		handler,
	})
);
